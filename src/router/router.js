import Home from '../views/Home.vue'

export default [
  {
    path: '/',
    alias: '/home_page',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // 动态路由
  {
    path: '/argue/:name',
    name: 'argue',
    component: () => import('@/views/argue.vue')
  },
  // 嵌套路由
  {
    path: '/parent',
    name: 'parent',
    component: () => import('@/views/parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import('@/views/child.vue')
      }
    ]
  },
  // 命名路由的使用
  {
    path: '/named_view',
    components: {
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')
    }
  },
  // 重定向
  {
    path: '/main',
    // redirect: '/'
    // 命名路由也可以实现相同的效果
    // redirect: {
    //   name: 'Home'
    // }
    // redirect: to => {
    //   // 返回一个字符串
    //   // return {
    //   //   name: 'Home'
    //   // }

    //   // 或者返回一个路径
    //   // return '/'
    // }
    redirect: to => '/'
  }
]
