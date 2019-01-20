import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../styles/componentSyles'


function Bookmark(props) {
  const { _id, title, url, remove } = props
  return (
    <li>
      {title} (<a href={url}>Visit</a>)
      <Button onClick={() => remove(_id)}>Delete!</Button>
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
