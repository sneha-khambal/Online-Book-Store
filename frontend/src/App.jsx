import { useEffect, useState } from 'react'
import {BrowserRouter ,Routes,Route,Link} from 'react-router-dom';

 import './App.css';
import  ChildrenBookComponent  from './components/childrenBookComponent';
import  HomeComponent  from './components/HomeComponent';
import { AccountPageComponent } from './components/AccountPageComponent';

 


 


function App() {
 const [bookType , setBookType] = useState('comics')
 
 
  return (
    <>
      <BrowserRouter>
    <Routes>
    <Route path='/' element={<HomeComponent  />}/>
    <Route path='/MyAccount' element={<AccountPageComponent   />}/>
    {/* <Route path='/books/comics' element={<ChildrenBookComponent bookType={'comics'} />}/> */}
    </Routes>
    </BrowserRouter>

   
  
    </>
  )
}

export default App
