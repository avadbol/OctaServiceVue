import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/dashboard",
      component: () => import("@/view/layout/Layout"),
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: () => import("@/view/pages/Dashboard.vue")
        },
        {
          path: "/define",
          name: "define",
          redirect:"/define/unit",
          component: () => import("@/view/pages/define/unit/UnitList.vue"),
          children: [
            {
              path: "unit",
              name: "unit-define",
              component: () => import("@/view/pages/define/unit/UnitList.vue")
            },
          ]
        },
        {
          path: "/stock",
          name: "stock",
          redirect:"/stock/list",
          component: () => import("@/view/pages/stock/create.vue"),
          children: [
            {
              path: "create",
              name: "stock-create",
              component: () => import("@/view/pages/stock/create.vue")
            },
            {
              path: "edit",
              name: "stock-edit",
              component: () => import("@/view/pages/stock/edit.vue")
            },
            {
              path: "edit",
              name: "stock-edit",
              component: () => import("@/view/pages/stock/list.vue")
            }
          ]
        },

      ]
    },

    {
      path: "/error",
      name: "error",
      component: () => import("@/view/pages/error/Error.vue"),
      children: [
        {
          path: "error-1",
          name: "error-1",
          component: () => import("@/view/pages/error/Error-1.vue")
        }
      ]
    },

    {
      path: "/",
      component: () => import("@/view/pages/auth/Auth"),
      children: [
        {
          name: "login",
          path: "/login",
          component: () => import("@/view/pages/auth/Login")
        },
        {
          name: "register",
          path: "/register",
          component: () => import("@/view/pages/auth/Register")
        }
      ]
    },

    {
      path: "*",
      redirect: "/404"
    },

    {
      path: "/404",
      name: "404",
      component: () => import("@/view/pages/error/Error-1.vue")
    }
  ]
});
