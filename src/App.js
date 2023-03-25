import logo from './logo.svg';
import './App.css';
import Layout from './Layout/layout';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home/Home';
import Portfolio from './portfolio/portfolio';
import Contact from './Contact/Contact';
import About from './About/About';



 let ren =  createBrowserRouter([
  { path:'' , element:<Layout/>  , children:[
    {index:true , element:<Home/>},
    {path:'portfolio' , element:<Portfolio/>},
    {path:'contact' , element:<Contact/>},
    {path:'About' , element:<About/>},
    {path:'*' , element:<Home/>},
  ]}
])


function App() {
  return <>
  
  <RouterProvider router={ren} ></RouterProvider>
  
  </>
}

export default App;
