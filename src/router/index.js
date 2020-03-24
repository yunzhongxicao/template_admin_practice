import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },

  {
    path: '/zhuangtai',
    component: Layout,
    redirect: '/zhuangtai/havedone',
    name: 'Zhuaungtai',
    meta: { title: '状态查询' },
    children: [
      {
        path: 'havedone',
        name: 'Havedone',
        component: () => import('@/views/zhuangtai/havedone/index'),
        meta: { title: '已完成订单' }
      },
      {
        path: '/notdone',
        name: 'Notdone',
        component: () => import('@/views/zhuangtai/notdone/index'),
        meta: { title: '未完成订单' }
      },
      {
        path: '/readydone',
        name: 'Readydone',
        component: () => import('@/views/zhuangtai/readydone/index'),
        meta: { title: '待生产订单' }
      }
    ]
  },

  {
    path: '/dingdanfenjie',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/dingdanfenjie/index'),
        name: 'Dingdanfenjie',
        meta: { title: '订单分解' }
      }
    ]
  },

  {
    path: '/jichuangjiagong',
    component: Layout,
    redirect: '/jichuangjiagong/renwu',
    name: 'Jichuangjiagong',
    meta: { title: '机床加工' },
    children: [
      {
        path: 'jichuangzhuangtai',
        name: 'Jichuangzhuangtai',
        component: () => import('@/views/jichuangjiagong/jichuangzhuangtai/index'),
        meta: { title: '机床状态查询' }
      },

      {
        path: 'renwu',
        name: 'Renwu',
        component: () => import('@/views/jichuangjiagong/renwu/index'),
        meta: { title: '加工任务分配' }
      },
      {
        path: 'xinxi',
        name: 'Xinxi',
        component: () => import('@/views/jichuangjiagong/xinxi/index'),
        meta: { title: '实时信息反馈' }
      }
    ]
  },

  {
    path: '/wuliao',
    component: Layout,
    redirect: '/wuliao/chuku',
    name: 'Wuliao',
    meta: { title: '物料管理' },
    children: [
      {
        path: 'chuku',
        name: 'Chuku',
        component: () => import('@/views/wuliao/chuku/index'),
        meta: { title: '出库管理' }
      },
      {
        path: 'ruku',
        name: 'Ruku',
        component: () => import('@/views/wuliao/ruku/index'),
        meta: { title: '入库管理' }
      },
      {
        path: 'kucun',
        name: 'Kucun',
        component: () => import('@/views/wuliao/kucun/index'),
        meta: { title: '库存管理' }
      }
    ]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },
  /*
  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: 'menu2' }
      }
    ]
  },

  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/index', // 重定向地址，在面包屑中点击会重定向去的地址
    hidden: true, // 不在侧边栏线上
    alwaysShow: true, // 一直显示根路由
    meta: { roles: ['admin', 'editor'] }, // 你可以在根路由设置权限，这样它下面所以的子路由都继承了这个权限

    children: [{
      path: 'index',
      component: () => import('@/views/permission/index'),
      name: 'permission',
      meta: {
        title: 'permission',
        icon: 'lock', // 图标
        role: ['admin', 'editor'], // 或者你可以给每一个子路由设置自己的权限
        noCache: true // 不会被 <keep-alive> 缓存
      }
    }]
  },
*/
  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
