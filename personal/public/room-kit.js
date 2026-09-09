/* =====================================================================
   ROOM KIT
   The scaffolding every room needs: renderer setup, the sRGB fix, springs,
   the WebGL fallback, and the projector that pins DOM buttons onto 3D
   objects. Extracted after building four rooms and copying the same ~150
   lines into each one.

   The older rooms (crate, server, darkroom) still carry their own
   copies — they work, and rewriting them to use this buys nothing today.
   New rooms should use this.
   ===================================================================== */
(function(){
  "use strict";

  var mq = matchMedia("(prefers-reduced-motion: reduce)");
  var reduced = mq.matches;
  mq.addEventListener && mq.addEventListener("change", function(e){ reduced = e.matches; });

  /* --- springs: physical, slightly overshooting, flat under reduced motion --- */
  function Spring(v, k, d){ this.x = v; this.v = 0; this.t = v; this.k = k || 140; this.d = d || 20; }
  Spring.prototype.step = function(dt){
    if (reduced){ this.x = this.t; this.v = 0; return this.x; }
    var n = Math.min(4, Math.ceil(dt / 0.012)) || 1, h = dt / n;
    for (var i = 0; i < n; i++){
      var a = this.k * (this.t - this.x) - this.d * this.v;
      this.v += a * h; this.x += this.v * h;
    }
    return this.x;
  };

  function webglOK(){
    try {
      var c = document.createElement("canvas");
      return !!(window.WebGLRenderingContext &&
        (c.getContext("webgl") || c.getContext("experimental-webgl")));
    } catch (e){ return false; }
  }

  /* Three's lights and material colours are treated as linear, but everyone
     authors them as sRGB hex. Without this pass the whole room washes out. */
  function linearize(scene){
    scene.traverse(function(o){
      if (o.isLight && o.color) o.color.convertSRGBToLinear();
      if (!o.isMesh && !o.isPoints && !o.isLine) return;
      var ms = Array.isArray(o.material) ? o.material : [o.material];
      for (var i = 0; i < ms.length; i++){
        var m = ms[i];
        if (!m) continue;
        if (m.color && !m.userData._lin){ m.color.convertSRGBToLinear(); m.userData._lin = true; }
        if (m.emissive && !m.userData._elin){ m.emissive.convertSRGBToLinear(); m.userData._elin = true; }
      }
    });
  }

  function makeRenderer(canvas, opts){
    opts = opts || {};
    var r = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
    r.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    r.setSize(window.innerWidth, window.innerHeight, false);
    r.outputEncoding = THREE.sRGBEncoding;
    r.toneMapping = THREE.ACESFilmicToneMapping;
    r.toneMappingExposure = opts.exposure == null ? 1.0 : opts.exposure;
    return r;
  }

  /* Builds the accessible <li><button> list every room uses as both its
     screen-reader content and its hit targets. `render` fills the button. */
  function buildList(items, listEl, render, cls){
    var btns = [];
    items.forEach(function(item, i){
      var li = document.createElement("li");
      var b = document.createElement("button");
      b.className = cls || "room-btn";
      b.type = "button";
      b.dataset.i = String(i);
      var sr = document.createElement("span");
      sr.className = "sr";
      render(sr, item, i);
      b.appendChild(sr);
      li.appendChild(b);
      listEl.appendChild(li);
      btns.push(b);
    });
    return btns;
  }

  /* Pins a DOM element over a 3D object every frame. Sizes from the object's
     projected half-height so buttons shrink with distance like the thing
     they cover. */
  function Projector(camera){
    this.camera = camera;
    this._p = new THREE.Vector3();
    this._u = new THREE.Vector3();
    this._up = new THREE.Vector3();
  }
  Projector.prototype.frame = function(){
    this._up.setFromMatrixColumn(this.camera.matrixWorld, 1).normalize();
  };
  Projector.prototype.place = function(obj, el, o){
    o = o || {};
    var W = window.innerWidth, H = window.innerHeight;
    var half3 = o.half == null ? 0.5 : o.half;
    obj.getWorldPosition(this._p);
    this._u.copy(this._p).addScaledVector(this._up, half3);
    this._p.project(this.camera);
    this._u.project(this.camera);
    var behind = this._p.z > 1;
    var x = (this._p.x * 0.5 + 0.5) * W;
    var y = (-this._p.y * 0.5 + 0.5) * H;
    var half = Math.max(o.minHalf || 22, Math.abs((-this._u.y * 0.5 + 0.5) * H - y));
    var hPx = half * 2 * (o.scale || 1);
    var wPx = hPx * (o.aspect || 1);
    el.style.width = wPx + "px";
    el.style.height = hPx + "px";
    el.style.transform = "translate(" + (x - wPx / 2).toFixed(1) + "px," + (y - hPx / 2).toFixed(1) + "px)";
    el.style.zIndex = String(Math.round((1 - this._p.z) * 10000));
    return { x: x, y: y, half: half, behind: behind };
  };

  /* Rooms all boot the same way: wait for fonts so canvas text isn't drawn
     in a fallback face, but never let that block the page. */
  function boot(init, onFail){
    function go(){
      if (!window.THREE || !webglOK()){ onFail(); return; }
      try { init(); }
      catch (err){ console.error("[room] init failed:", err); onFail(); }
    }
    if (document.fonts && document.fonts.ready){
      var done = false;
      var once = function(){ if (!done){ done = true; go(); } };
      document.fonts.ready.then(once);
      setTimeout(once, 2500);
    } else go();
  }

  function fallback(btns){
    document.body.classList.add("fallback");
    var s = document.getElementById("stage");
    if (s) s.remove();
    (btns || []).forEach(function(b){
      b.disabled = true;
      b.removeAttribute("aria-expanded");
      b.removeAttribute("style");
      if (b.parentElement) b.parentElement.removeAttribute("style");
    });
  }

  window.RoomKit = {
    get reduced(){ return reduced; },
    Spring: Spring,
    webglOK: webglOK,
    linearize: linearize,
    makeRenderer: makeRenderer,
    buildList: buildList,
    Projector: Projector,
    boot: boot,
    fallback: fallback
  };
})();
