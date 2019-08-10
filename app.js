new Vue({
  el: '#vue-app',
  data: {
    age: 30,
    x: 0,
    y: 0
  },
  methods: {
    add: function(years) {
      this.age += years;
    },
    subtract: function(years) {
      this.age -= years;
    },
    updateCoordinates: function(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    }
  }
});