// components/my-mslot/my-mslot.js
Component({
 options:{
   multipleSlots:true
 },
//  监听所在页面生命周期
pageLifetimes:{
  show(){
    console.log("监听页面显示出来")
  },
  hide(){
    console.log("监听页面显示隐藏")
  },
  resize(){
    console.log("监听页面大小变化")
  }
},
//监听组件生命周期本身
lifetimes:{
  created(){
    console.log("监听组件被创建出来")
  },
  attached(){
    console.log("组件被添加到页面")
  },
  ready(){
    console.log("组件被渲染出来")
  },
  moved(){
    console.log("组价被移动到另一个节点")
  },
  detached(){
    console.log("组件被移除")
  }

},


})
