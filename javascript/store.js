const store = new Vuex.Store({
	state: {
		cartItems: [],

		products: [
			{
				images: ["a1.jpg", "a2.jpg", "a3.jpg", "a4.jpg"],
				name: "Asus ZenBook 13",
				price: 21999,
				article: "71282506",
				description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, voluptate.",
				cartCount: 0,
				categories: ["laptop", "Asus"]
			},
			{
				images: ["b1.jpg", "b2.jpg", "b3.jpg", "b4.jpg"],
				name: "Acer Aspire 3 A315-22",
				price: 5199,
				article: "71279753",
				description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima",
				cartCount: 0,
				categories: ["laptop", "Aser"]
			},
			{
				images: ["c1.png", "c2.jpg", "c3.jpg", "c4.jpg"],
				name: "HP Envy x360 13-ar0005ur",
				price: 19999,
				article: "71271738",
				description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
				cartCount: 0,
				categories: ["laptop", "HP"]
			},
			{
				images: ["d1.jpg", "d2.jpg", "d3.jpg", "d4.jpg"],
				name: "LENOVO Tab M10 HD 2/32GB",
				price: 4799,
				article: "71271476",
				description: "Lorem ipsum dolor sit amet, consectetur adipisicing",
				cartCount: 0,
				categories: ["tablet", "Lenovo"]
			},
			{
				images: ["e1.jpg", "e2.jpg", "e3.jpg", "e4.jpg"],
				name: "HUAWEI MediaPad M5 Lite 4/64GB",
				price: 8999,
				article: "71283342",
				description: "Lorem ipsum dolor sit amet, consectetur",
				cartCount: 0,
				categories: ["tablet", "Huawei"]
			},
			{
				images: ["f1.jpg", "f2.jpg", "f3.jpg", "f4.jpg"],
				name: "MICROSOFT Surface Pro 6 8/256Gb",
				price: 41999,
				article: "71272747",
				description: "Lorem ipsum dolor sit amet",
				cartCount: 0,
				categories: ["tablet", "Microsoft"]
			},
			{
				images: ["g1.jpg", "g2.jpg", "g3.jpg", "g4.jpg"],
				name: "NIKON D3500 + AF-P 18-55 non VR",
				price: 12599,
				article: "71263098",
				description: "Lorem ipsum dolor sit",
				cartCount: 0,
				categories: ["camera", "Nicon"]
			},
			{
				images: ["h1.jpg", "h2.jpg", "h3.jpg", "h4.jpg"],
				name: "PANASONIC Lumix DMC-TZ80",
				price: 8699,
				article: "71201848",
				description: "Lorem ipsum dolor",
				cartCount: 0,
				categories: ["camera", "Panasonic"]
			},
			{
				images: ["i1.jpeg", "i2.jpg", "i3.jpg", "i4.jpg"],
				name: "CANON EOS Wi-Fi 4000D 18-55 DC",
				price: 9299,
				article: "71255600",
				description: "Lorem ipsum",
				cartCount: 0,
				categories: ["camera", "Canon"]
			}
		],
		sortedProducts: [],
		productsForPriceSorting: []
	},

	mutations: {
		addCartItem: (state, product) => {
			if(state.cartItems.length) {
				let isProductInCart = false;
				state.cartItems.map(function (item) {
					if (item.article === product.article) {
						isProductInCart = true;
						product.cartCount++;
					}
				});
				if (!isProductInCart) {
					product.cartCount ++;
					state.cartItems.push(product);
				}
			} else {
				product.cartCount++;
				state.cartItems.push(product);
			}

		},

		deleteCartItem: (state, itemArticle) => {
			state.cartItems.splice(itemArticle, 1);
		},

		addItemCount: (state, itemIndex) => {
			state.cartItems[itemIndex].cartCount++;
		},

		subtractItemCount: (state, itemIndex) => {
			if (state.cartItems[itemIndex].cartCount != 1) {
				state.cartItems[itemIndex].cartCount--;
			}
		},

		clearCart: (state) => {
			state.cartItems = [];
		},

		sortProductsByName: (state, itemForSorting) => {
			state.sortedProducts = [];
			state.products.map(function (item) {
				for (var i = 0; i <= item.categories.length - 1; i++) {
					if(item.categories[i] == itemForSorting) {							
						state.sortedProducts.push(item);
					}
				}	
					
			});
			state.productsForPriceSorting = state.sortedProducts.slice();

		},

		clearSort: (state) => {
			state.sortedProducts = state.products.slice();
			state.productsForPriceSorting = state.sortedProducts.slice();
		},

		sortByPrice: (state, payload) => {
			state.sortedProducts = state.productsForPriceSorting.slice();
			console.log(payload.minPrice + " " + payload.maxPrice);
			state.sortedProducts = state.sortedProducts.filter(function (item) {
          		return item.price >= payload.minPrice && item.price <= payload.maxPrice
        	});
		}

	},

	actions: {

	},

	getters: {
		cartItems: state => {
			return state.cartItems;
		},
		cartItemsCount: state => {
			return state.cartItems.length;
		},

		cartItemsPrice: state => {
			let fullPrice = 0;
			state.cartItems.forEach(x => fullPrice += x.price*x.cartCount);
			return fullPrice;
		},

		products: state => {
			return state.sortedProducts;
		},
		currentProduct: state => {
			return state.currentProduct;
		},

		maxProductPrice: state => {
			let maxProductPrice = 0;
			state.products.map(function (product) {
					if (product.price > maxProductPrice) {
						maxProductPrice = product.price;
					}
				})
			return maxProductPrice;		
		}
	}

});