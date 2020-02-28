const store = new Vuex.Store({
	state: {
		cartItems: [],
		products: [
			{
				images: ["1.jpg", "2.jpg"],
				name: "Product 1",
				price: "100",
				article: "1"
			},
			{
				images: ["3.jpg", "4.jpg"],
				name: "Product 2",
				price: "120",
				article: "2"
			},
			{
				images: ["5.jpg", "6.jpg"],
				name: "Product 3",
				price: "140",
				article: "3"
			},
			{
				images: ["7.jpg", "8.jpg"],
				name: "Product 4",
				price: "160",
				article: "4"
			},
			{
				images: ["9.jpg", "10.jpg"],
				name: "Product 5",
				price: "180",
				article: "5"
			},
			{
				images: ["11.jpg", "12.jpg"],
				name: "Product 6",
				price: "200",
				article: "6"
			}
		]
	},

	mutations: {

	},

	actions: {

	},

	getters: {
		cartItemsCount: state=> {
			return state.cartItems.length;
		},
		products: state=> {
			return state.products;
		}
		
	}

});