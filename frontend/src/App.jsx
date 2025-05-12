import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchBooksData } from '../src/redux/actions';
import useChildrenBooksHook from './redux/reduxHook';


function App() {
  const [count, setCount] = useState(0);
  const {
    childrenBooksData,
    childrenBooksDataError,
    childrenBooksDataLoading,
    fetchChildrenBooks
 } = useChildrenBooksHook();
 

  useEffect(() => {
   fetchChildrenBooks();
  }, []);

  useEffect(()=>{
    if(childrenBooksData){
      console.log(childrenBooksDataLoading == false && childrenBooksData.length > 0)
      console.log(childrenBooksData)
    }
  },[childrenBooksData])
 



  return (
    <>
      {childrenBooksDataLoading == false && childrenBooksData.length > 0 ? childrenBooksData.slice()
    .sort((a, b) => a.title.localeCompare(b.title)).map((book,index)=>(
        <div>
          {book.title}
        </div>
      )) :'no data'} 
    </>
  )
}

export default App
