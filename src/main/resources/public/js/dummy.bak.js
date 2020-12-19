const Dummy = Vue.createApp({
  data() {
    return {
    };
  },
});
Dummy.component('Caller', {
  props: {},
  emits: { yo: null },
  methods: {
    broadcast(message) {
      this.$emit('yo', { data: message });
    },
  },
  template: `
        <button v-on:click="broadcast('wElL, hElLo ThErE!')">Broadcast</button>
    `,
});
Dummy.component('Receiver', {
  props: {},
  template: `
        <h6>RECEIVED!</h6>
    `,
});
const parent = Dummy.component('Parent', {
  data() {
    return {
      receiverVis: 'none',
    };
  },
  methods: {
    received(message) {
      this.receiverVis = 'block';
      alert(message);
    },
  },
  template: `
    <div>
        <caller @yo="received"/>    
        <receiver id="receiver" :style="{display:receiverVis}"/>
    </div>
    `,
});
Dummy.mount('#dummy');
