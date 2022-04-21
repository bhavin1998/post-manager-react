import React from 'react'
import PropTypes from 'prop-types'

export default function Createaccount(props) {
  return (
    <div className='my-3'>
        <h2>{props.pagetitle}</h2>
        <form className="row">
            <div className="mb-3 row">
                <label htmlFor="firstname">First Name</label>
                <input type="text" className="form-control" id="firstname"/>
            </div>
            <div className="mb-3 row">
                <label htmlFor="lastname">Last Name</label>
                <input type="text" className="form-control" id="lastname"/>
            </div>
            <div className="mb-3 row">
                <label htmlFor="emailid">Email</label>
                <input type="text" className="form-control" id="emailid"/>
            </div>
            <div className="mb-3 row">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password"/>
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">Registration</button>
            </div>
        </form>
    </div>
  )
}
