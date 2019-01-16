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

export { fetchBookmarks, removeBookmark } 