let cart = new Vue({
  el: '#cartPage',

  components: {
    'v-header':  Vheader,
    'v-footer':  Vfooter,             
    'v-cart': Vcart
  },

  computed: {
    cartItemsCount: function() {
      return store.getters.cartItemsCount;
    }
  },

  data: {
    
  },

  methods: {

  }

});