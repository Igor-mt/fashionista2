import React from 'react'

import './UserMenuButton.css'

const UserMenuButton = ({onClick, children}) => {
  return (
    <button className="user-menu-btn" type="button" onClick={onClick}>{children}</button>
  )
}

export default UserMenuButton