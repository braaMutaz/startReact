import React from 'react'

export default function Footer() {
  return <>
<div className='mt-5'> 
<div className=' footer py-4 '>
<div className='  footer w-75 m-auto     text-center text-light'>


<div className="row">
<div className="col-4">
   <div className="items">

     <h2>LOCATION</h2>
     <p>2215 John Daniel Drive <br />
Clark, MO 65243</p>
   </div>
 </div>
 <div className="col-4">
   <div className="items">

     <h2>AROUND THE WEB</h2>
     <i className="fa-brands fa-facebook"></i>
     <i className="fa-brands fa-twitter"></i>
     <i className="fa-brands fa-linkedin"></i>
     <i  className="fa-solid fa-basketball"></i>
   </div>
 </div>
 <div className="col-4">
   <div className="items">

     <h2>ABOUT FREELANCER</h2>
     <p>Freelance is a free to use, MIT <br /> licensed Bootstrap theme created by <br /> Route</p>
   </div>
 </div>
</div>

 </div>

</div>
<div className='w-100 copy text-center text-light  py-3'>
  <h5>Copyright © Your Website 2021</h5>
 </div>
</div>
    </>
}
