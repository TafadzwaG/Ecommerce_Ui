import { createRouter, createWebHistory } from 'vue-router';
import { defineAsyncComponent } from 'vue'
import auth from '../middlewares/auth'
import store from '../store/index.js'
import middlewarePipeline from '../middlewarePipeline.js'

const routes = [{
        path: '/',
        name: 'Home',
        component: () =>
            import ('../views/Home.vue')
    },
    {
        path: '/about',
        name: 'About',

        component: () =>
            import ('../views/About.vue')
    },

    {
        path: '/products',
        name: 'Products',

        component: () =>
            import ('../views/product/Products.vue'),
        meta: {
            middleware: [
                auth
            ]

        }
    },

    {
        // path: 'product-details/:id',
        path: '/product-details',
        name: 'ProductDetails',

        component: () =>
            import ('../views/product/ProductDetails.vue'),
        meta: {
            middleware: [
                auth
            ]

        }
    },

    {
        path: '/shop-list',
        name: 'ShopList',
        component: () =>
            import ('../views/shop/ShopList.vue'),
        meta: {
            middleware: [
                auth
            ]

        }
    },

    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../views/account/Login.vue')
    },

    {
        path: '/register',
        name: 'Register',
        component: () =>
            import ('../views/account/Register.vue')
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () =>
            import ('../views/dashboard/MyAccount.vue'),
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