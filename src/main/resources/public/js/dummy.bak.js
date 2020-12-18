const Dummy = Vue.createApp({
    data() {
        return {
        }
    }
})
Dummy.component('caller', {
    props: {},
    template: `
        <button v-on:click="broadcast('wElL, hElLo ThErE!')">Broadcast</button>
    `,
    methods: {
        broadcast(message) {
            this.$emit('yo', { data: message });
        }
    },
    emits: { 'yo': null }
})
Dummy.component('receiver', {
    props: {},
    template: `
        <h6>RECEIVED!</h6>
    `
})
Dummy.component('parent', {
    data() {
        return {
            receiverVis: "none"
        }
    },
    template: `
    <div>
        <caller @yo="received"/>    
        <receiver id="receiver" :style="{display:receiverVis}"/>
    </div>
    `,
    methods: {
        received(message) {
            this.receiverVis = 'block';
            alert(message);
        }
    }
})
Dummy.mount('#dummy');