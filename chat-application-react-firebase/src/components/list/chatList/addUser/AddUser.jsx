import React from 'react'
import "./addUser.css"

export default function AddUser() {
  return (
    <div className='addUser'>
      <form action="">
        <input type="text" placeholder='search user' />
        <button>Search</button>
      </form>
      <div className="user">
        <div className="detail">
        <img src="./avatar.png" alt="" />
        <span>Sahil</span>
        </div>
        <button>Add User</button>

      </div>

    </div>
  )
}
