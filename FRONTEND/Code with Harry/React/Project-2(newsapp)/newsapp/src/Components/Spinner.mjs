import React from 'react'
import loading from "./loading.gif"
import "./spinner.css"
const Spinner = () => {

  return (
    <div className='text-center'>
      <img className="my-3" src={loading} alt="Loading" height="100px" />
    </div>
  )

}

export default Spinner
