import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { afterShowName, enterName } from '../features/word'
import './Page.css'
const Page = () => {
const dispatch = useDispatch()
const {nameArray,name,endIndex,check} = useSelector((state)=>state.word)
useEffect(() => {
const time=setTimeout(() => {
    dispatch(afterShowName());
  }, 500);
return ()=> setTimeout(time)
}, [name,dispatch,endIndex]);
  return (
    <div className="container">
      <h1>Word Express</h1>
<input className="input"  type='text'  placeholder='enter word' onChange={(e)=>dispatch(enterName(e.target.value))}></input>
{check?(<>
{nameArray.map((words)=>{
  return(
    <>
<span className="span">{words}</span>
</>
)
})}</>):<h3>Biraz Bekleyin </h3>}



    </div>
  )
}

export default Page