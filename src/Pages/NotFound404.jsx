import React from 'react'
import {Link} from 'react-router-dom'

const NotFound404 = () => {
  return <main>
    <div className="container">
      <div className="row mt-5 mb-5 align-items-center justify-content-center">
        <div className="col-auto">
         <h1>Not Found 404</h1>
         <Link to='/'>ortga qaytish</Link>
        </div>
      </div>
    </div>
  </main>
}

export default NotFound404