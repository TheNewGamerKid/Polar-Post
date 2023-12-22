

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.KV3Dpklt.js","_app/immutable/chunks/scheduler.sMD3e7PM.js","_app/immutable/chunks/index.Pc22rDlo.js"];
export const stylesheets = ["_app/immutable/assets/0.cIjQKFYD.css"];
export const fonts = [];
