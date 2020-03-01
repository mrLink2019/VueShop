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

  },

  data: {
    
  },

  methods: {
    deleteCartItem (itemArticle) {
      store.commit('deleteCartItem', itemArticle);
    }

  }

});