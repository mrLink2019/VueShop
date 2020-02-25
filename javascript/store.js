const store = new Vuex.Store({
	state: {
		cartItems: []
	},

	mutations: {

	},

	actions: {

	},

	getters: {
		cartItemsCount: state=> {
			return state.cartItems.length;
		}
		
	}

});