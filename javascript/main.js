let app = new Vue({
  el: '#shop',

  components: {
    'v-header': Vheader,
    'v-footer': Vfooter,             
    'v-navbar': Vnavbar,
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