import { createRouter, createWebHistory } from "vue-router";
import RecipesView from "../views/RecipesView.vue";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import GroceryView from "../views/GroceryView.vue";
import Buttons from "../components/buttons/authentication-button.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
    {
      path: "/make-a-grocery-list",
      name: "groceries",
      component: GroceryView,
    },
    {
      path: "/make-a-recipe",
      name: "recipes",
      component: RecipesView,
    },
    {
      path: "/help",
      component: {
        template: `
          <Help></Help>
        `,
      },
    },
    {
      path: "/signin",
      component: Buttons,
    },
  ],
});

export default router;
