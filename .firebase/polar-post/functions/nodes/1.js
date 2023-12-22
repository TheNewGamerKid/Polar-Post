

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.LHjkTA0U.js","_app/immutable/chunks/scheduler.sMD3e7PM.js","_app/immutable/chunks/index.Pc22rDlo.js","_app/immutable/chunks/singletons.JKzZRVsZ.js"];
export const stylesheets = [];
export const fonts = [];
