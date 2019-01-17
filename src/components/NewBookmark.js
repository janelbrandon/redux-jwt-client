import React from 'react'
import PropTypes from 'prop-types'

const NewBookmark = ({ createBookmark }) => (
    <form onSubmit={createBookmark}>
        <label>Title: <input type="text" name="title" /></label><br />
        <label>Url: <input type="text" name="url" /></label><br />
        <button type="submit">Submit</button>
    </form>
)

NewBookmark.propTypes = {
    createBookmark: PropTypes.func.isRequired
}

export default NewBookmark