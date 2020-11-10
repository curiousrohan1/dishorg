const App = Vue.createApp({
  data(){
    return{
    }
  },
  methods:{}
});
App.component('parent',{
  template:`
    <div>
      <p :class={"alert-danger"} id="error-message" :style="display:none;text-align:center;"/>
    </div>
  `
})
App.component('')
App.mount('#dishorg');