<script lang="ts" setup>
import LeftPane from "@/components/LeftPane.vue";
import RightPane from "@/components/RightPane.vue";
import { defineComponent } from "vue";
</script>

<script lang="ts">
export default defineComponent({
  computed: {
    displayWarn() {
      return this.$store.state.error !== "";
    },
  },
  methods: {
    updateErr(message) {
      this.$store.commit("setError", message);
      window.setTimeout(() => {
        this.$store.commit("setError", "");
      }, 3000);
    },
  },
});
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
          ></LeftPane>
          <RightPane
            @update-err="updateErr($event)"
            ref="rightPane"
          ></RightPane>
        </div>
    </div>
</template>

<style>
@import "@/assets/style.css";
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
