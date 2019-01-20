import React, { Component } from 'react'
import store from '../config/store'
import NewBookmark from './NewBookmark'
import Bookmark from './Bookmark'
import { createBookmark, removeBookmark } from '../services/BookmarkService'


export default class BookmarkList extends Component {

    render() {
        const { bookmarks } = store.getState()

        return (
            <div>
                <h1>Bookmarks</h1>
                <NewBookmark createBookmark={createBookmark} />
                <ul>
                    {
                        bookmarks.map(
                            bookmark => <Bookmark key={bookmark._id} {...bookmark} remove={removeBookmark} />
                        )
                    }
                </ul>

            </div>
        )
    }
}
