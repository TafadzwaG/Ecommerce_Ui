import { createRouter, createWebHistory } from 'vue-router';
import { defineAsyncComponent } from 'vue'
import auth from '../middlewares/auth'
import store from '../store/index.js'
import middlewarePipeline from '../middlewarePipeline.js'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Products from '../views/product/Products.vue'
import ProductDetails from '../views/product/ProductDetails.vue'
import ShopList from '../views/shop/ShopList.vue'
import Login from '../views/account/Login.vue'
import Register from '../views/account/Register.vue'
import MyAccount from '../views/dashboard/MyAccount.vue'


const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },

    {
        path: '/products',
        name: 'Products',
        component: Products,
        meta: {
            middleware: [
                auth
            ]

        }
    },

    {
        path: '/product-details/:id',
        name: 'ProductDetails',
        component: ProductDetails,
        meta: {
            middleware: [
                auth
            ]

        }
    },

    {
        path: '/shop-list',
        name: 'ShopList',
        component: ShopList,
        meta: {
            middleware: [
                auth
            ]

        }
    },

    {
        path: '/login',
        name: 'Login',
        component: Login,
    },

    {
        path: '/register',
        name: 'Register',
        component: Register,
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: MyAccount,
        meta: {
            middleware: [
                auth
            ]

        },
        children: [{
                path: '/dashboard-title',
                name: 'DashboardTitle',
                component: () =>
                    import ('../views/dashboard/DashboardTitle.vue')
            },

            {
                path: '/orders',
                name: 'Orders',
                component: () =>
                    import ('../views/dashboard/Orders.vue')
            },

            {
                path: '/address',
                name: 'Address',
                component: () =>
                    import ('../views/dashboard/Address.vue')
            },
            {
                path: '/account-details',
                name: 'AccountDetails',
                component: () =>
                    import ('../views/dashboard/AccountDetails.vue')
            }
        ]
    },
    {
        path: '/blog',
        name: 'Blog',
        component: () =>
            import ('../views/blog/Blog.vue'),
        meta: {
            middleware: [
                auth
            ]

        }
    },
    {
        path: '/faq',
        name: 'Faq',
        component: () =>
            import ('../views/faqs/Faq.vue')
    },
    {
        path: '/collections',
        name: 'Collections',
        component: () =>
            import ('../views/collections/Collections.vue')
    },
    {
        path: '/cart',
        name: 'Cart',
        component: () =>
            import ('../views/shopping/Cart.vue'),
        meta: {
            middleware: [
                auth
            ]

        }
    },
    {
        path: '/checkout',
        name: 'Checkout',
        component: () =>
            import ('../views/shopping/Checkout.vue'),
        meta: {
            middleware: [
                auth
            ]

        }
    },
    {
        path: '/shipping',
        name: 'Shipping',
        component: () =>
            import ('../views/shopping/Shipping.vue'),
        meta: {
            middleware: [
                auth
            ]

        }
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})



router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0);
    if (!to.meta.middleware) {
        return next()
    }

    const middleware = to.meta.middleware;

    const context = {
        to,
        from,
        next,
        store
    }

    return middleware[0]({
        ...context,
        next: middlewarePipeline(context, middleware, 1)
    })
})


export default router