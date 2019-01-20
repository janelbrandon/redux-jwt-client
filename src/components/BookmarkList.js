import React, { Component } from 'react'
import store from '../config/store'
import NewBookmark from './NewBookmark'
import Bookmark from './Bookmark'
import { createBookmark, removeBookmark } from '../services/BookmarkService'
import { List, ListContainer } from '../styles/componentSyles'


export default class BookmarkList extends Component {

    render() {
        const { bookmarks } = store.getState()

        return (
            <ListContainer>
                <h1>Bookmarks</h1>
                <NewBookmark createBookmark={createBookmark} />
                <List>
                    {
                        bookmarks.map(
                            bookmark => <Bookmark key={bookmark._id} {...bookmark} remove={removeBookmark} />
                        )
                    }
                </List>

            </ListContainer>
        )
    }
}
