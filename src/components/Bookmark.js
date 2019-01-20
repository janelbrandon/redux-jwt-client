import React from 'react'
import PropTypes from 'prop-types'

function Bookmark(props) {
  const { _id, title, url, remove } = props
  return (
    <li>
      {title} (<a href={url}>Visit</a>)
      <button onClick={() => remove(_id)}>Delete!</button>
    </li>
  )
}

Bookmark.propTypes = {
  _id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

export default Bookmark
