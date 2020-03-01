let app = new Vue({
  el: '#shop',

  components: {
    'v-header':  Vheader,
    'v-footer':  Vfooter,             
    'v-navbar':  Vnavbar,
    'v-product': Vproduct,
    'v-cart-item': VcartItem,
  },

  computed: {
    cartItemsCount: function() {
      return store.getters.cartItemsCount;
    },
    products: function() {
      return store.getters.products;
    }

  },

  data: {
    
  },

  methods: {

  }

});