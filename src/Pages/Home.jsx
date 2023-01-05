import React from 'react'

const Home = ({login,email,password}) => {
  return <main>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-auto">
          <form action="" onSubmit={login}>
           <div className="form-control">
            <input type="text" name="" id="" ref={email}/>
           </div>
           <div className="form-control">
            <input type="password" name="" id="" ref={password} />
           </div>
           <button className='btn btn-secondary'>login</button>
          </form>
        </div>
      </div>
    </div>
  </main>
}

export default Home