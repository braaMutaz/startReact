import React, {  useEffect, useState } from 'react'
export default function Portfolio() {



const [getsrc, setgetsrc] = useState([])
let [srcu, setsrcu] = useState('../img/d48984c2-822f-4fae-951b-e486106c3098/cabin.png')
function getsrcd()
{
 let x = Array.from(document.querySelectorAll('.porder '))

setgetsrc(x)

}

console.log(srcu);

function looop()
{
  for (let i = 0; i < getsrc.length; i++) {
    getsrc[i].onclick=(e)=>{
     let find =  e.target.src

     setsrcu(find)
     
     document.getElementById('demo').src=find
   
     document.getElementById('hide').classList.remove('d-none')
    }
  
  }
}
looop()

function changename2()
{
 document.getElementById('text1').innerHTML= 'LOG CABIN'
}

function changename1()
{
 document.getElementById('text1').innerHTML= 'TASTY CAKE'
}
function changename3()
{
 document.getElementById('text1').innerHTML= 'CIRCUS TENT'
}
function changename4()
{
 document.getElementById('text1').innerHTML= 'CONTROLLER'
}
function changename5()
{
 document.getElementById('text1').innerHTML= 'LOCKED SAFE'
}

function changename6()
{
 document.getElementById('text1').innerHTML= 'SUBMARINE'
}


function dnone() {
  document.getElementById('hide').classList.add('d-none')
}

useEffect(()=> {
  getsrcd()

},[])



























  return <>


<div id='hide'  className='show w-100 text-center vh-100  position-fixed  overflow-auto d-none  ' >
<div className="container w-75 showcss p-3">
  <h1 id='text1'>LOG CABIN</h1>
  <div className='iconporo w-25 m-auto my-3'>
<i className="fa-solid  fa-star"></i>


</div>
<img className='w-50' id='demo' src={require('../img/d48984c2-822f-4fae-951b-e486106c3098/cabin.png')} alt="" />
<div className='w-50 m-auto'>
<p className=' fs-6 text-center mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
<button onClick={dnone} className='btn btn-info'>close</button>
</div>
</div>
  </div>

  <div className=' w-100 vh-100 port '>

  <div className='text-center mt-3 .body-home h1 '>
  <h1 className='fs-1 fw-bolder'>PORTFOLIO</h1>

<div className='iconpor w-25 m-auto'>
<i className="fa-solid  fa-star"></i>


</div>

  </div>
  <div className="container mt-5 ">

<div className="row  g-3">
  <div className="col-lg-4    text-center  ">
<div className='shows'>
<img onClick={changename2} className='  w-100 porder' src={require('../img/d48984c2-822f-4fae-951b-e486106c3098/cabin.png')} alt="" />

</div>
  </div>
  <div className="col-lg-4  text-center ">
  <div className='shows'>
  <img onClick={changename1}  className='  w-100 porder' src={require('../img/d48984c2-822f-4fae-951b-e486106c3098/cake.png')} alt="" />


</div>
    
  </div>
  <div className="col-lg-4  text-center ">
  <div className='shows'>
  <img onClick={changename3} className=' w-100  porder' src={require('../img/d48984c2-822f-4fae-951b-e486106c3098/circus.png')} alt="" />

</div>
  </div>
  <div className="col-lg-4  text-center ">
  <div className='shows'>
  <img onClick={changename4} className=' w-100  porder' src={require('../img/d48984c2-822f-4fae-951b-e486106c3098/game.png')} alt="" />

</div>
  </div>
  <div className="col-lg-4  text-center ">
  <div className='shows'>
  <img onClick={changename5} className=' w-100  porder' src={require('../img/d48984c2-822f-4fae-951b-e486106c3098/safe.png')} alt="" />

</div>
  </div>
  <div className="col-lg-4  text-center ">
  <div className='shows'>
  <img onClick={changename6} className=' w-100  porder' src={require('../img/d48984c2-822f-4fae-951b-e486106c3098/submarine.png')} alt="" />

</div>
  </div>
  

</div>
</div>
  </div>
  
  
  </>
}
