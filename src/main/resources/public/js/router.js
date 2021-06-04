const routes = [
  {
    path: '/make-a-grocery-list',
    component: {
      template: `
        <Makegrocery></Makegrocery>
       `
    }
  },
  {
    path: '/',
    component: {
      template: `
        <Home></Home>
      `
    }
  },
  {
    path: '/make-a-recipe',
    component: {
      template: `
        <Makerec></Makerec>
      `
    }
  },
  {
    path: '/help',
    component: {
      template: `
        <Help></Help>
      `
    }
  }
]
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})
app.use(router);