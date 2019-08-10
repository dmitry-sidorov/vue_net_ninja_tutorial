new Vue({
  el: '#vue-app',
  data: {
    name: 'Dmirty',
    job: 'Software Engineer'
  },
  methods: {
    greet: function(time) {
      return `Good ${time}, ${this.name}!`
    }
  }
});