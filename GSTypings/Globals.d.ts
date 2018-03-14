/**
 * Loads JavaScript module from gived path. Path is relative to Runtime Modules for runtime scripts or Modules for all other.
 * File will be loaded every time when you call this function. To include module once use requireOnce.
 * @param {string} path Module path
 */
declare function require(path: string): void;

/**
 * Loads JavaScript module from gived path. Path is relative to Runtime Modules for runtime scripts or Modules for all other.
 * File will be loaded only once even if some other loaded this same module earlier.
 * @param {string} path Module path
 */
declare function requireOnce(path: string): void;
