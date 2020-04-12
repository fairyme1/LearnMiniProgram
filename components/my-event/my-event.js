// components/my-event/my-event.js
Component({
  methods: {
    handleIncrement(){
      console.log("组件里的handleincrement")
      this.triggerEvent('increment',{name:'fairy',age:18},{})
    }
  }
})
