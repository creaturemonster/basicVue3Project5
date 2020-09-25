const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    }, 
    resetInput(){
      this.name='';
    }, 
    outputFullName(){
      if(this.name === ' '){
        return ' ';
      }
      return this.name + ' ' + 'Schwarzmuller' ;
    }
  }
});

app.mount('#events');
