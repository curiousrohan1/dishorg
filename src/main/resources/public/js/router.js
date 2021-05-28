const groceryList = { template: '<div>make a grocery list</div>' }
const home = { template: '<div>Home</div>' }

const routes = [
  {
    path: '/groceries', component: groceryList
  },
  {
    path: '/', component: home
  },
  {
    path: '/sign-in', component: signIn
  },
  {
    path: '/make-a-recipe', component: makeRec
  }
]
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})
app.use(router);