export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-35b78167.js","imports":["_app/immutable/start-35b78167.js","_app/immutable/chunks/index-edd250b0.js","_app/immutable/chunks/singletons-87a578cf.js"],"stylesheets":[]},
		nodes: [
			() => import('.//nodes/0.js'),
			() => import('.//nodes/1.js'),
			() => import('.//nodes/2.js'),
			() => import('.//nodes/3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/svelteroute",
				pattern: /^\/svelteroute\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};