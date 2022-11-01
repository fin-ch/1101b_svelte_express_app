const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-35b78167.js","imports":["_app/immutable/start-35b78167.js","_app/immutable/chunks/index-edd250b0.js","_app/immutable/chunks/singletons-87a578cf.js"],"stylesheets":[]},
		nodes: [
			() => import('./chunks/0-ff495e10.js'),
			() => import('./chunks/1-882d9c56.js'),
			() => import('./chunks/2-c74c8194.js'),
			() => import('./chunks/3-681ade1c.js')
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

export { manifest };
//# sourceMappingURL=manifest.js.map
