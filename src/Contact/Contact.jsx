import React from 'react'

export default function Contact() {
  return <>
  
<div className='w-100 vh-100 mt-3'>
<div className="container">
  <div className="items">
    <h1 className='text-center fw-bolder'>CONTACT ME</h1>
    <div className='iconabout  text-center w-25 m-auto'>
<i className="fa-solid  fa-star"></i>


</div>
<div className='mt-5'>
<input placeholder='Name' className='form-control inputcont w-50 fs-3 py-3 m-auto' type="text" />
<br />
<input placeholder='Email' className='form-control inputcont w-50 py-3 fs-3 m-auto' type="text" />
<br />
<input placeholder='Phone Number' className='form-control inputcont w-50 py-3 fs-3 m-auto' type="text" />
<br />
<textarea name="" placeholder='Massage' className='form-control inputcont w-50 py-3 fs-3 m-auto' id="" cols="1"  rows="2"></textarea>
<br />
<div className='w-50 m-auto mt-2'>
<button className='btn zorar p-3 px-4 fs-4'>Send</button>
</div>
</div>
  </div>
</div>
</div>

  
  </>


}
