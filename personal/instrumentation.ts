export async function register() {
  // Turbopack provides a broken localStorage mock for SSR (--localstorage-file with no valid path).
  // motion/framer-motion v12 accesses localStorage during SSR, hitting this broken mock.
  // Replace it with a safe no-op implementation.
  if (typeof globalThis.localStorage?.getItem !== "function") {
    globalThis.localStorage = {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
      clear: () => {},
      length: 0,
      key: () => null,
    } as unknown as Storage;
  }
}
