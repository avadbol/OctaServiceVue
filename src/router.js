import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
import Layout from "./view/layout/Layout"
export const constantRoutes=[
  {
    path:'/',
    component:Layout,
    redirect:'/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import("@/view/pages/Dashboard.vue"),
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      },
      {
        path: '/stock',
        component: () => import('@/view/pages/stock/stock'),
        hidden: true
      },
      {
        path: '/safe',
        component: () => import('@/view/pages/safe/safe'),
        hidden: true
      },
      {
        path: '/bank',
        component: () => import('@/view/pages/bank/bank'),
        hidden: true
      },
    ]
  },

  // {
  //   path: '/stock',
  //   component: import("@/view/pages/stock/list"),
  //   redirect: '/stock/list',
  //   children: [
  //     {
  //       path: 'list',
  //       component: () => import("@/view/pages/stock/list"),
  //       name : 'stock-list',
  //     },
  //     {
  //       path: 'create',
  //       component: () => import('@/view/pages/stock/create'),
  //       name : 'Services',
  //     },
  //     {
  //       path: 'edit/:id',
  //       component: () => import('@/view/pages/stock/edit'),
  //       name : 'servicesEdit',
  //     },
  //   ]
  // },
  {
    path: '/cari',
    component: Layout,
    redirect: '/cari/list',
    children: [
      {
        path: 'list',
        component: () => import('@/view/pages/cari/list'),
        name : 'User',
      },
      {
        path: 'create',
        component: () => import('@/view/pages/cari/create'),
        name : 'User',
      },
      {
        path: 'edit/:id',
        component: () => import('@/view/pages/cari/edit'),
        name : 'userEdit',
      },
    ]
  },
  {
    path: '/safe',
    component: Layout,
    redirect: '/safe/list',
    children: [
      {
        path: 'list',
        component: () => import('@/view/pages/safe/list'),
        name : 'User',
      },
      {
        path: 'create',
        component: () => import('@/view/pages/safe/create'),
        name : 'User',
      },
     
    ]
  },


]
const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})
const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
export default router

// export default new Router({
//   routes: [
//     {
//       path: "/",
//       redirect: "/dashboard",
//       component: Layout,
//       children: [
//         {
//           path: "/dashboard",
//           name: "dashboard",
//           component: () => import("@/view/pages/Dashboard.vue")
//         },
//         {
//           path: "/define",
//           name: "define",
//           redirect:"/define/unit",
//           component: () => import("@/view/pages/define/unit/UnitList.vue"),
//           children: [
//             {
//               path: "unit",
//               name: "unit-define",
//               component: () => import("@/view/pages/define/unit/UnitList.vue")
//             },
//           ]
//         },
//         {
//           path: "/stock",
//           name: "stock",
//           redirect:"/stock",
//           component: Layout,
//           children: [
//             {
//               path: "create",
//               name: "stock-create",
//               component: () => import("@/view/pages/stock/create.vue")
//             },
//             {
//               path: "edit",
//               name: "stock-edit",
//               component: () => import("@/view/pages/stock/edit.vue")
//             },
//             {
//               path: "list",
//               name: "stock-list",
//               component: () => import("@/view/pages/stock/list.vue")
//             }
//           ]
//         },
//         {
//           path: "/cari",
//           name: "cari",
//           redirect:"/cari/list",
//           component: () => import("@/view/pages/error/Error.vue"),
//           children: [
//             {
//               path: "create",
//               name: "cari-create",
//               component: () => import("@/view/pages/cari/create.vue")
//             },
//             {
//               path: "edit/:id",
//               name: "cari-edit",
//               component: () => import("@/view/pages/cari/edit.vue")
//             },
//             {
//               path: "list",
//               name: "cari-list",
//               component: () => import("@/view/pages/cari/list.vue")
//             }
//           ]
//         },
//
//       ]
//     },
//
//     {
//       path: "/error",
//       name: "error",
//       component: () => import("@/view/pages/error/Error.vue"),
//       children: [
//         {
//           path: "error-1",
//           name: "error-1",
//           component: () => import("@/view/pages/error/Error-1.vue")
//         }
//       ]
//     },
//
//     {
//       path: "/",
//       component: () => import("@/view/pages/auth/Auth"),
//       children: [
//         {
//           name: "login",
//           path: "/login",
//           component: () => import("@/view/pages/auth/Login")
//         },
//         {
//           name: "register",
//           path: "/register",
//           component: () => import("@/view/pages/auth/Register")
//         }
//       ]
//     },
//
//     {
//       path: "*",
//       redirect: "/404"
//     },
//
//     {
//       path: "/404",
//       name: "404",
//       component: () => import("@/view/pages/error/Error-1.vue")
//     }
//   ]
// });
