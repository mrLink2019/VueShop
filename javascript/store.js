const store = new Vuex.Store({
	state: {
		cartItems: [],
		products: [
			{
				images: ["a1.jpg", "a2.jpg", "a3.jpg", "a4.jpg"],
				name: "ZenBook 13 UX333FA-A4199T",
				price: "21999",
				article: "71282506"
			},
			{
				images: ["b1.jpg", "b2.jpg", "b3.jpg", "b4.jpg"],
				name: "Acer Aspire 3 A315-22",
				price: "5199",
				article: "71279753"
			},
			{
				images: ["c1.png", "c2.jpg", "c3.jpg", "c4.jpg"],
				name: "HP Envy x360 13-ar0005ur",
				price: "19999",
				article: "71271738"
			},
			{
				images: ["d1.jpg", "d2.jpg", "d3.jpg", "d4.jpg"],
				name: "ENOVO Tab M10 HD 2/32GB",
				price: "4799",
				article: "71271476"
			},
			{
				images: ["e1.jpg", "e2.jpg", "e3.jpg", "e4.jpg"],
				name: "HUAWEI MediaPad M5 Lite 4/64GB",
				price: "8999",
				article: "71283342"
			},
			{
				images: ["f1.jpg", "f2.jpg", "f3.jpg", "f4.jpg"],
				name: "MICROSOFT Surface Pro 6 8/256Gb",
				price: "41999",
				article: "71272747"
			},
			{
				images: ["d1.jpg", "d2.jpg", "d3.jpg", "d4.jpg"],
				name: "ENOVO Tab M10 HD 2/32GB",
				price: "4799",
				article: "71271476"
			},
			{
				images: ["e1.jpg", "e2.jpg", "e3.jpg", "e4.jpg"],
				name: "HUAWEI MediaPad M5 Lite 4/64GB",
				price: "8999",
				article: "71283342"
			},
			{
				images: ["f1.jpg", "f2.jpg", "f3.jpg", "f4.jpg"],
				name: "MICROSOFT Surface Pro 6 8/256Gb",
				price: "41999",
				article: "71272747"
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