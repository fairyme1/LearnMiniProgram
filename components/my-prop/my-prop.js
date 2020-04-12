// components/my-prop/my-prop.js
Component({

  properties: {
    title:{
      type:String,
      value:'组件默认值',
      observer: function(newVal,oldVal){
        console.log(newVal,oldVal);
      }
    }
  },
  externalClasses:['titleclass']

 
})
