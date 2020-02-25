let app = new Vue({
  el: '#shop',

  components: {
    'v-header': Vheader,
  },

  computed: {
    cartItemsCount: function() {
      return store.getters.cartItemsCount;
    }
    // store.getters.cartItemsCount
  },

  data: {
    
  },

  methods: {

  }

});