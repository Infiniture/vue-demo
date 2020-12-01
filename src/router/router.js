import Home from '../views/Home.vue'

export default [
  {
    path: '/',
    alias: '/home_page',
    name: 'Home',
    component: Home,
    // 函数模式
    props: route => ({
      food: route.query.food
    }),
    beforeEnter: (to, from, next) => {
      if (from.name === 'login') alert('这是从登录页来的')
      else alert('这不是从登录页来的')
      next()
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    // 对象模式
    props: {
      food: 'banana'
    },
    meta: {
      title: '关于'
    }
  },
  // 动态路由
  {
    path: '/argue/:name',
    name: 'argue',
    component: () => import('@/views/argue.vue'),
    // 布尔模式
    props: true
  },
  // 嵌套路由
  {
    path: '/parent',
    name: 'parent',
    component: () => import('@/views/parent.vue'),
    children: [
      {
        // 不用在自组件前面加/，会自动补全
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
  },
  {
    path: '*',
    components: () => import('@/views/error_404.vue')
  }
]
