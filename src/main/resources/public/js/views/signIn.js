let signIn = app.component('Signin', {
  emits: ['usrnm-psswd'],
  data() {
    return {
      username: '',
      password: '',
      hovered: false,
      classObj: {
        'btn-dark': this.hovered, 'btn-light': !this.hovered
      },
    }
  },
  computed: {
    displayModalButton() {
      return (this.username !== '') && (this.password !== '');
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.username.focus();
    });
  },
  methods: {
    logIn() {
      this.signIn = false;
      this.$emit('usrnm-psswd', {
        username: this.username,
        password: this.password
      })
    },
    setHover(boole) {
      this.hovered = boole;
    },
  },
  /*html*/
  template: `
     <div>
        <h1 id="login-header">Login</h1>
        <div class="input-group">
          <div class="input-group-prepend">
            <input
              aria-label="Username"
              class="form-control"
              placeholder="Username"
              ref="username"
              type="text"
              v-model="this.username"
            />
            <input
              aria-label="Password"
              class="form-control"
              placeholder="Password"
              ref="password"
              type="password"
              v-model="this.password"
            />
          </div>
          <button
            :class="classObj"
            @click="logIn"
            @mouseleave="setHover(false)"
            @mouseover="setHover(true)"
            class="btn"
            id="login-form-submit"
            v-show="this.displayModalButton"
          >
            Log in
          </button>
        </div>
      </div>
  `
});