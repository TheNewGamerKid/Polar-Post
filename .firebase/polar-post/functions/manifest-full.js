export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","test-hero.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.rZjdImBF.js","app":"_app/immutable/entry/app.aPc_lakF.js","imports":["_app/immutable/entry/start.rZjdImBF.js","_app/immutable/chunks/scheduler.sMD3e7PM.js","_app/immutable/chunks/singletons.JKzZRVsZ.js","_app/immutable/entry/app.aPc_lakF.js","_app/immutable/chunks/scheduler.sMD3e7PM.js","_app/immutable/chunks/index.Pc22rDlo.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
