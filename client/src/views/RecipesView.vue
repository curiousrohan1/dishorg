<script setup>
import LeftPane from '@/components/LeftPane.vue'
import RightPane from '@/components/RightPane.vue'
</script>

<script>
export default {
    computed: {
    displayWarn() {
      return this.$store.state.error !== '';
    },
  },
  methods: {
    updateErr(message) {
      this.$store.commit('setError', message);
      window.setTimeout(() => {
        this.$store.commit('setError', '');
      }, 3000)
    },
    focus() {
      this.$refs.rightPane.plusIng(true);
    }
  }
}
</script>
<template>
    <div>
        <p
          class="alert alert-danger"
          id="error-message"
          role="alert"
          v-show="displayWarn"
        >
          {{this.$store.state.error}}
        </p>
        <div class="clearfix">
          <LeftPane
            @update-err="updateErr($event)"
            id="left-pane"
            @focus="focus"
          ></LeftPane>
          <RightPane
            @update-err="updateErr($event)"
            ref="rightPane"
          ></RightPane>
        </div>
    </div>
</template>

<style>
@import '@/assets/style.css';
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
