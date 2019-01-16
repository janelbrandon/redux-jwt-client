import store from '../config/store'
import { setBookmarksAction } from '../config/actions'
import { api } from '../api/init'

const fetchBookmarks = async () => {
    try {
        const bookmarks = await api.get('/bookmarks')
        store.dispatch(setBookmarksAction(bookmarks.data))
    }
    catch (error) {
        alert('Can\'t get bookmarks!')
    }
}

const removeBookmark = (id) => {
    api.delete(`/bookmarks/${id}`).then(() => {
        const index = store.getState().bookmarks.findIndex(bookmark => bookmark._id === id)
        if (index >= 0) {
            const newBookmarks = [...store.getState().bookmarks]
            newBookmarks.splice(index, 1)
            store.dispatch(setBookmarksAction(newBookmarks))
        }
    }).catch((err) => {
        console.error('Error removing bookmark on server: Error: ', err)
    })

}

const createBookmark = (event) => {
    event.preventDefault()
    const form = event.target
    console.log(form)
    const title = form.elements.title.value
    const url = form.elements.url.value
    if (title.length === 0 || url.length === 0) {
        alert('Bookmark title and url are required')
        return
    }
    api.post('/bookmarks', {
        title: form.elements.title.value,
        url: form.elements.url.value
    }).then((res) => {
        const newBookmarks = [...store.getState().bookmarks, res.data]
        store.dispatch(setBookmarksAction(newBookmarks))
        fetchBookmarks()
        form.elements.title.value = ''
        form.elements.url.value = ''
    }).catch((error) => {
        console.error('Error creating bookmark: ', error)
    })
}


export { fetchBookmarks, createBookmark, removeBookmark } 