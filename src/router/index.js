import { createRouter, createWebHistory } from "vue-router";
import Layout from "../layouts/Layout.vue";
import Home from "../pages/home/Home.vue";
import Agents from "../pages/agents/Agents.vue";
import Businesses from "../pages/businesses/Businesses.vue";
import ServiceCategory from "../pages/serviceCategory/ServiceCategory.vue";
import ServiceSubCategory from "../pages/serviceSubCategory/ServiceSubCategory.vue";
import Users from "../pages/users/Users.vue";
import WithdrawRequest from "../pages/withdrawRequest/WithdrawRequest.vue";
import WithdrawalHistory from "../pages/withdrawalHistory/WithdrawalHistory.vue"
import Profile from "../pages/profile/Profile.vue";
import ServiceCategoryAddForm from "../forms/ServiceCategoryAddForm.vue";
import ServiceCategoryUpdateForm from "../forms/ServiceCategoryUpdateForm.vue";
import ServiceSubCategoryAddForm from "../forms/ServiceSubCategoryAddForm.vue";
import ServiceSubCategoryUpdateForm from "../forms/ServiceSubCategoryUpdateForm.vue";
import BusinessDetailsEditForm from "../forms/BusinessDetailsEditForm.vue";
import WithdrawdetailsForm from "../forms/WithdrawdetailsForm.vue";
import WithdrawHistorydetailsForm from "../forms/WithdrawHistorydetailsForm.vue";
import AgentAddForm from "../forms/AgentAddForm.vue";
import AgentEditForm from "../forms/AgentEditForm.vue";
import Login from "../pages/authentication/Login.vue";
import Registration from "../pages/authentication/Registration.vue";
import NotFound from "../pages/notFound/NotFound.vue";

//store
import store from "../store/store.js";

const routes = [
  {
    path: "/",
    component: Layout,

    children: [
      //pages
      {
        path: "/",
        name:'dashboard',
        component: Home,
        meta: { requiresAuth: true }
      },
      {
        path: "/agents",
        name:'agents',
        component: Agents,
        meta: { requiresAuth: true }
      },
      {
        path: "/businesses",
        name:'businesses',
        component: Businesses,
        meta: { requiresAuth: true }
      },
      {
        path: "/service-category",
        name:'service-category',
        component: ServiceCategory,
        meta: { requiresAuth: true }
      },
      {
        path: "/service-sub-category",
        name:'service-sub-category',
        component: ServiceSubCategory,
        meta: { requiresAuth: true }
      },
      {
        path: "/users",
        name:'users',
        component: Users,
        meta: { requiresAuth: true }
      },
      {
        path: "/withdraw-request",
        name:'withdraw-request',
        component: WithdrawRequest,
        meta: { requiresAuth: true }
      },
      {
        path: "/withdraw-history",
        name:'withdraw-history',
        component: WithdrawalHistory,
        meta: { requiresAuth: true }
      },
      {
        path: "/profile",
        name:'profile',
        component:Profile ,
        meta: { requiresAuth: true }
      },

      //forms

      {
        path: "/service-category-add",
        name:"service-category-add",
        component: ServiceCategoryAddForm,
        meta: { requiresAuth: true }
      },
      {
        path: "/service-category-edit/:id",
        name:"service-category-edit",
        component: ServiceCategoryUpdateForm,
        meta: { requiresAuth: true }
      },
      {
        path: "/service-sub-category-add",
        name:"service-sub-category-add",
        component: ServiceSubCategoryAddForm,
        meta: { requiresAuth: true }
      },
      {
        path: "/service-sub-category-edit/:id",
        name:"service-sub-category-edit",
        component: ServiceSubCategoryUpdateForm,
        meta: { requiresAuth: true }
      },
      {
        path: "/businesses-edit/:id",
        name:"businesses-edit",
        component: BusinessDetailsEditForm,
        meta: { requiresAuth: true }
      },
      {
        path: "/withdraw-edit/:id",
        name:"withdraw-edit",
        component: WithdrawdetailsForm,
        meta: { requiresAuth: true }
      },
      {
        path: "/withdraw-history-edit/:id",
        name:"withdraw-history-edit",
        component: WithdrawHistorydetailsForm,
        meta: { requiresAuth: true }
      },
      {
        path: "/agent-add",
        name:"agent-add",
        component: AgentAddForm,
        meta: { requiresAuth: true }
      },
      {
        path: "/agent-edit/:id",
        name:"agent-edit",
        component: AgentEditForm,
        meta: { requiresAuth: true }
      },
      
    ],
  },
  {
    path:"/login",
    component:Login,
    beforeEnter: (to, from, next) => {
      // Check if the user is authenticated
      if (store.state.auth.isAuthenticated) {
        // Redirect to another route (e.g., home)
        next('/');
      } else {
        // Continue with the login route
        next();
      }
    },
  },
  {
    path:"/register",
    component:Registration
  },
  {
    path: "/:notFound",
    component: NotFound,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: "smooth" };
  },
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // Check if the user is authenticated
    if (!store.state.auth.isAuthenticated) {
      next('/login'); // Redirect to login page if not authenticated
    } else {
      next(); // Proceed to the route if authenticated
    }
  } else {
    next(); // Continue for routes that don't require authentication
  }
});

export default router;
