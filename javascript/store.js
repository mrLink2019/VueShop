const store = new Vuex.Store({
	state: {
		cartItems: [
			{
				images: ["a1.jpg", "a2.jpg", "a3.jpg", "a4.jpg"],
				name: "ZenBook 13 UX333FA-A4199T",
				price: 21999,
				article: "71282506",
				count: 1
			},
			{
				images: ["f1.jpg", "f2.jpg", "f3.jpg", "f4.jpg"],
				name: "MICROSOFT Surface Pro 6 8/256Gb",
				price: 41999,
				article: "71272747",
				count: 1
			},
			{
				images: ["g1.jpg", "g2.jpg", "g3.jpg", "g4.jpg"],
				name: "NIKON D3500 + AF-P 18-55 non VR",
				price: 12599,
				article: "71263098",
				count: 1
			}
		],

		products: [
			{
				images: ["a1.jpg", "a2.jpg", "a3.jpg", "a4.jpg"],
				name: "ZenBook 13 UX333FA-A4199T",
				price: 21999,
				article: "71282506"
			},
			{
				images: ["b1.jpg", "b2.jpg", "b3.jpg", "b4.jpg"],
				name: "Acer Aspire 3 A315-22",
				price: 5199,
				article: "71279753"
			},
			{
				images: ["c1.png", "c2.jpg", "c3.jpg", "c4.jpg"],
				name: "HP Envy x360 13-ar0005ur",
				price: 19999,
				article: "71271738"
			},
			{
				images: ["d1.jpg", "d2.jpg", "d3.jpg", "d4.jpg"],
				name: "LENOVO Tab M10 HD 2/32GB",
				price: 4799,
				article: "71271476"
			},
			{
				images: ["e1.jpg", "e2.jpg", "e3.jpg", "e4.jpg"],
				name: "HUAWEI MediaPad M5 Lite 4/64GB",
				price: 8999,
				article: "71283342"
			},
			{
				images: ["f1.jpg", "f2.jpg", "f3.jpg", "f4.jpg"],
				name: "MICROSOFT Surface Pro 6 8/256Gb",
				price: 41999,
				article: "71272747"
			},
			{
				images: ["g1.jpg", "g2.jpg", "g3.jpg", "g4.jpg"],
				name: "NIKON D3500 + AF-P 18-55 non VR",
				price: 12599,
				article: "71263098"
			},
			{
				images: ["h1.jpg", "h2.jpg", "h3.jpg", "h4.jpg"],
				name: "PANASONIC Lumix DMC-TZ80",
				price: 8699,
				article: "71201848"
			},
			{
				images: ["i1.jpeg", "i2.jpg", "i3.jpg", "i4.jpg"],
				name: "CANON EOS Wi-Fi 4000D 18-55 DC",
				price: 9299,
				article: "71255600"
			}
		],
		currentProduct: ""
	},

	mutations: {
		setCurrentProduct: (state, productArticle) => {
			state.currentProduct = productArticle;
		},
		addCartItem: (state, product) => {
			if(state.cartItems.length) {
				let isProductInCart = false;
				state.cartItems.map(function (item) {
					if (item.article === product.article) {
						isProductInCart = true;
						product.count++;
					}
				})
				if (!isProductInCart) {
					product.count = 1;
					state.cartItems.push(product);
				}
			} else {
				product.count = 1;
				state.cartItems.push(product);
			}

		},

		deleteCartItem: (state, itemArticle) => {
			state.cartItems.splice(itemArticle, 1);
		},

		addItemCount: (state, itemIndex) => {
			state.cartItems[itemIndex].count++;
		},

		subtractItemCount: (state, itemIndex) => {
			state.cartItems[itemIndex].count--;
		},

		clearCart: (state) => {
			state.cartItems = [];
		},

	},

	actions: {

	},

	getters: {
		cartItems: state=> {
			return state.cartItems;
		},
		cartItemsCount: state=> {
			return state.cartItems.length;
		},

		cartItemsPrice: state=> {
			let fullPrice = 0;
			state.cartItems.forEach(x => fullPrice += x.price*x.count);
			return fullPrice;
		},

		products: state=> {
			return state.products;
		},
		currentProduct: state=> {
			return state.currentProduct;
		},
	}

});