import { fetchBookmarks } from './BookmarkService'
import { setBookmarksAction, setLoggedInAction, setLoginErrorAction } from '../config/actions'
import { api, setJwt } from '../api/init'
import store from '../config/store'

const handleSignIn = async (event) => {
    try {
        event.preventDefault()
        const form = event.target
        const response = await api.post('/auth/login', {
            email: form.elements.email.value,
            password: form.elements.password.value
        })
        setJwt(response.data.token)
        store.dispatch(setLoggedInAction(true))
        fetchBookmarks()
        localStorage.setItem('token', response.data.token)
    } catch (error) {
        store.dispatch(setLoginErrorAction(error.message))
    }
}

const handleSignOut = (event) => {
    api.get('/auth/logout').then(() => {
        localStorage.removeItem('token')
        store.dispatch(setLoggedInAction(false))
        store.dispatch(setBookmarksAction([]))
    })
}

export { handleSignIn, handleSignOut }