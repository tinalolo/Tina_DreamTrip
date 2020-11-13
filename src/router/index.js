import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'
import MemberCenter from '../components/member/MemberCenter.vue'
import Wishlist from '../components/member/Wishlist.vue'
import MemberCart from '../components/member/MemberCart.vue'
import AdminSort from '../components/admin/AdminSort.vue'
import AdminProduct from '../components/admin/AdminProduct.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      login: false,
      title: 'ZUzu Creation'
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue'),
    meta: {
      login: false,
      title: 'Cart - ZUzu Creation'
    }
  },
  {
    path: '/member',
    name: 'Member',
    component: () => import(/* webpackChunkName: "member" */ '../views/Member.vue'),
    meta: {
      login: true,
      title: 'Member - ZUzu Creation'
    },
    children: [
      {
        path: 'membercenter',
        component: MemberCenter,
        meta: {
          login: true,
          title: 'Member Center - ZUzu Creation',
          route: 'Member'
        }
      },
      {
        path: 'wishlist',
        component: Wishlist,
        meta: {
          login: true,
          title: 'Wishlist - ZUzu Creation',
          route: 'Member'
        }
      },
      {
        path: 'MemberCart',
        component: MemberCart,
        meta: {
          login: true,
          title: 'MemberCart - ZUzu Creation',
          route: 'Member'
        }
      }
    ]
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue'),
    meta: {
      login: true,
      title: 'Admin - ZUzu Creation'
    },
    children: [
      {
        path: 'adminsort',
        component: AdminSort,
        meta: {
          login: true,
          title: 'Admin Sort - ZUzu Creation',
          route: 'Admin'
        }
      },
      {
        path: 'adminproduct',
        component: AdminProduct,
        meta: {
          login: true,
          title: 'Admin Product - ZUzu Creation',
          route: 'Admin'
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
      login: false,
      title: 'Login - ZUzu Creation'
    }
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "search" */ '../views/Search.vue'),
    meta: {
      login: false,
      title: 'Search - ZUzu Creation'
    }
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "shop" */ '../views/Shop.vue'),
    meta: {
      login: false,
      title: 'Shop - ZUzu Creation'
    }
  },
  {
    path: '/sort/:id',
    name: 'Sort',
    component: () => import(/* webpackChunkName: "sort" */ '../views/Sort.vue'),
    meta: {
      login: false,
      title: 'Sort - ZUzu Creation'
    }
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: () => import(/* webpackChunkName: "product" */ '../views/Product.vue'),
    meta: {
      login: false,
      title: 'Product - ZUzu Creation'
    }
  },
  {
    path: '/announcement',
    name: 'Announcement',
    component: () => import(/* webpackChunkName: "announcement" */ '../views/Announcement.vue'),
    meta: {
      login: false,
      title: 'Announcement - ZUzu Creation'
    }
  },
  {
    path: '/collection',
    name: 'Collection',
    component: () => import(/* webpackChunkName: "collection" */ '../views/Collection.vue'),
    meta: {
      login: false,
      title: 'Collection - ZUzu Creation'
    }
  },
  {
    path: '/notice',
    name: 'Notice',
    component: () => import(/* webpackChunkName: "notice" */ '../views/Notice.vue'),
    meta: {
      login: false,
      title: 'Notice - ZUzu Creation'
    }
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  if (to.meta.login && !store.state.account) {
    next('/login')
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  document.title = to.meta.title
})

export default router
