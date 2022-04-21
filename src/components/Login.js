import React from 'react'

export default function Login() {
  return (
    <div className='my-3'>
        <h2>Login</h2>
      <form className="row">
        <div className="mb-3 row">
            <label htmlFor="staticEmail2" className="visually-hidden">Email</label>
            <input type="text" className="form-control" id="staticEmail2"/>
        </div>
        <div className="mb-3 row">
            <label htmlFor="inputPassword2" className="visually-hidden">Password</label>
            <input type="password" className="form-control" id="inputPassword2" placeholder="Password"/>
        </div>
        <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3">Confirm identity</button>
        </div>
    </form>
    </div>
  )
}
