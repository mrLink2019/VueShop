let router = new VueRouter({
	routes: [
		{
			path: '/',
			name: 'catalog',
			component: Vcatalog
		},
		{
			path: '/cart',
			name: 'cart',
			component: Vcart,
			props: true
		}
	]

});