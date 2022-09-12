import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../Redux/Actions'
import './ShowPage.css'

export const ShowPage = () => {
 
    const [page,setpage]=useState(1)
    const [limit,setlimit]=useState(50)
    const dispatch=useDispatch()
    const fetch=useSelector((state)=>state.reducer.products)


    // console.log(data.length)
    const handleAdd=()=>{
        // let lengthpage=data.length/limit
        
            setpage(page+1)
            setlimit(limit+50)
         
    }
    const handleless=()=>{
         
         
            setpage(page-1)
            setlimit(limit-50)
          
    }
useEffect(()=>{
  
    dispatch(fetchData(limit))
},[limit,dispatch])
console.log(fetch)

  return (
    <>
    <div className='container'>
        <table className='tableclass' >
       <tr className='tablerow1' >
             <th>Rank</th>
            <th>Name</th>
            <th>Assets</th>
            <th>Exchange</th>
            <th>maxSupply</th>
            <th>Supply</th>
            <th>volumeUsd24Hr</th>
            <th>changePercent</th>
       </tr>
     {fetch.map((el)=>{
        return(
            <tr className='tablerow'>
            <td>{el.rank}</td>
            <td><img className='image' src="https://assets.coincap.io/assets/icons/btc%402x.png" alt="" />{el.symbol}</td>
            <td>{el.name}</td>
          
            <td>{el.maxSupply/10}</td>
            <td>{el.marketCapUsd/10}</td>
            <td>{el.volumeUsd24Hr/100}</td>
            <td>{el.marketCapUsd/10}</td>
            <td>{el.changePercent24Hr}</td>
           </tr>
        )
     })}
        </table>


     
    </div>
    <div className='mainbutton'><button onClick={handleAdd}>Next Page</button>
       <button disabled={page==1} onClick={handleless}>Prev Page</button></div>
    </>

  )
}
