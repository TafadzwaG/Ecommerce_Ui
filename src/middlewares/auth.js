export default function auth({ next, store }) {
    if (!store.getters.token) {
        return next({
            name: 'Login'
        })
    }

    return next();
}