import React from 'react'
import PropTypes from 'prop-types'
import { Button, Label, ListContainer } from '../styles/componentSyles'

const NewBookmark = ({ createBookmark }) => (
    <ListContainer>
        <form onSubmit={createBookmark}>
            <Label>Title: <input type="text" name="title" /></Label>
            <label>Url: <input type="text" name="url" /></label>
            <Button highlight="silver" type="submit">Submit</Button>
        </form>
    </ListContainer>
)

NewBookmark.propTypes = {
    createBookmark: PropTypes.func.isRequired
}

export default NewBookmark