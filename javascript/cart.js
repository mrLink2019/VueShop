let cart = new Vue({
  el: '#cart',

  components: {
    'v-header':  Vheader,
    'v-footer':  Vfooter,             
    'v-navbar':  Vnavbar,
    'v-cart-item': VcartItem,
  },

  computed: {
    cartItems: function() {
      return store.getters.cartItems;
    },
    cartItemsCount: function() {
      return store.getters.cartItemsCount;
    },
    fullPrice: function() {
      return store.getters.cartItemsPrice;
    }

  },

  data: {
    
  },

  methods: {
    deleteCartItem (itemArticle) {
      store.commit('deleteCartItem', itemArticle);
    },

    buy(fullPrice) {
      if (fullPrice !=0) {
      alert('You succesfully bought products on sum ' + fullPrice + ' UAH');
      store.commit('clearCart');
      } else {
        alert('You must add something in your cart!');
      }
    }

  }

});