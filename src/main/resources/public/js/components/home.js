app.component('Home', {
  mounted() {
    $.get('/recipes', 'json')
      .done(
        (recipeList) => {
          this.$store.commit('updateRecList', recipeList);
        },
      )
    $.get('/groceries', 'json').done(
      (groceryList) => {
        this.$store.commit('updateGrocList', groceryList);
      }
    )
  },
  /* html */
  template: `
    <div class="centered">
      <h1 class="text-success">Welcome to Cook It Best!</h1>
      <button @click="$router.push('make-a-recipe')" class="btn btn-info">Get Started!</button>
    </div>
  `
})