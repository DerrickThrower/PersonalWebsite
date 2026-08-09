/* =====================================================================
   ROOM NAV — shared by every room
   Four rooms is where in-world doors alone start stranding people, so
   every page also gets a persistent switcher. Injects its own styles so
   a room only has to provide <nav id="roomnav"> and this script tag.
   ===================================================================== */
(function(){
  "use strict";

  var ROOMS = [
    { href: "/",              label: "Shop",          hint: "Roles and projects" },
    { href: "/darkroom",      label: "Darkroom",      hint: "Prints under a safelight" },
    { href: "/arcade",        label: "Arcade",        hint: "Cabinets in the dark" },
    { href: "/aquarium",      label: "Aquarium",      hint: "Caustics, kelp, jellyfish" },
    { href: "/cloud-chamber", label: "Cloud Chamber", hint: "Particle tracks in vapour" }
  ];

  var CSS = [
    '#roomnav{display:flex;gap:.15rem;flex-wrap:wrap;align-items:baseline}',
    '#roomnav a{',
    '  font-family:var(--mono,monospace);font-size:11px;letter-spacing:.13em;',
    '  text-transform:uppercase;color:var(--muted,#8A8A82);text-decoration:none;',
    '  padding:.5em .7em;border:1px solid transparent;border-radius:2px;',
    '  transition:color 160ms ease,border-color 160ms ease;white-space:nowrap}',
    '#roomnav a:hover{color:var(--ink,#EDEDE8);border-color:rgba(200,162,75,.35)}',
    '#roomnav a:focus-visible{outline:2px solid var(--accent,#C8A24B);outline-offset:3px;',
    '  color:var(--ink,#EDEDE8)}',
    '#roomnav a[aria-current="page"]{color:var(--accent,#C8A24B);',
    '  border-color:rgba(200,162,75,.30)}',
    '@media (max-width:640px){#roomnav a{padding:.5em .55em}}'
  ].join("");

  function currentPath(){
    var p = location.pathname.replace(/\/+$/, "");
    return p === "" ? "/" : p;
  }

  /* rooms fade through black between each other, so the set feels like one
     building rather than four unrelated pages */
  function leaveTo(href){
    var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.body.classList.add("leaving");
    setTimeout(function(){ location.href = href; }, reduce ? 0 : 380);
  }

  function build(){
    var host = document.getElementById("roomnav");
    if (!host) return;

    var style = document.createElement("style");
    style.textContent = CSS;
    document.head.appendChild(style);

    var here = currentPath();
    ROOMS.forEach(function(r){
      var a = document.createElement("a");
      a.href = r.href;
      a.textContent = r.label;
      a.title = r.hint;
      if (r.href === here) a.setAttribute("aria-current", "page");
      a.addEventListener("click", function(e){
        /* leave modifier-clicks and middle-clicks alone so new-tab still works */
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        if (r.href === here){ e.preventDefault(); return; }
        e.preventDefault();
        leaveTo(r.href);
      });
      host.appendChild(a);
    });

    /* any other in-world door on the page gets the same fade */
    document.querySelectorAll("a[data-room-link]").forEach(function(a){
      a.addEventListener("click", function(e){
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        e.preventDefault();
        leaveTo(a.getAttribute("href"));
      });
    });
  }

  if (document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", build);
  } else build();
})();
