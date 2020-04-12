// components/f-tab-control/f-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentindex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
    handleclick( event ){
      console.log("组件的点击事件");
      console.log(event);
      const index = event.currentTarget.dataset.index;
      this.setData({
       currentindex:index
      })
      this.triggerEvent('changtabcontrol',{index,title:this.properties.titles[index]});
    }
  }
})
