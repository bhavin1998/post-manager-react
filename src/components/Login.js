import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function Login(props) {

    const loginclick = (e) => {
        e.preventDefault();
        alert ();
    }
  return (
    <div className='my-3'>
        <h2>{props.pagetitle}</h2>
        <form className="row">
            <div className="mb-3 row">
                <label htmlFor="staticEmail2">Email</label>
                <input type="text" className="form-control" id="staticEmail2" placeholder="Email"/>
            </div>
            <div className="mb-3 row">
                <label htmlFor="inputPassword2">Password</label>
                <input type="password" className="form-control" id="inputPassword2" placeholder="Password"/>
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3" onClick={loginclick}>Confirm identity</button>
            </div>
        </form>
    </div>
  )
}
