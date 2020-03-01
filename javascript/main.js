let app = new Vue({
  el: '#shopPage',

  components: {
    'v-header':  Vheader,             
    'v-navbar':  Vnavbar,
    'v-catalog': Vcatalog,
    'v-footer':  Vfooter,
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