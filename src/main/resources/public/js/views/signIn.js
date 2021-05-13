app.component('Signin', {
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
})