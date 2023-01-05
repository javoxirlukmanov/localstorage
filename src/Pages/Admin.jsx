import React from 'react'

const Admin = ({logOut}) => {
  return (
    <div>
      <h1>Admin page</h1>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-auto">
            <button onClick={logOut}>LOGOUT</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin