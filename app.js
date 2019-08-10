new Vue({
  el: '#vue-app',
  data: {
    name: 'Dmirty',
    job: 'Software Engineer',
    website: 'https://github.com/dmitry-sidorov',
    websiteTag: '<a href="https://github.com/dmitry-sidorov"> Github Account 2 </a>'
  },
  methods: {
    greet: function(time) {
      return `Good ${time}, ${this.name}!`
    }
  }
});