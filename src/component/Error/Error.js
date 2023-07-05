import React from 'react'
import './Error.css'
const Error = () => {
  return (
    <div className='error-container'>
      <div className='error-wrapper'>
        <p>
         Page not found
        </p>
        <div className='backToHome'>
            <a href='/Pokemon'>Go back to the home page</a>
        </div>
      </div>
    </div>
  )
}

export default Error