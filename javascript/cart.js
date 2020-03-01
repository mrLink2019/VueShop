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
  },

  data: {
    
  },

  methods: {

  }

});