import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './ShowPage.css'

export const ShowPage = () => {
    const [data,setData]=useState([])
    const [page,setpage]=useState(1)
    const [limit,setlimit]=useState(50)

    const GetData=(limit)=>{
        axios.get(`https://api.coincap.io/v2/assets`,{
            params:{
                limit:limit
            }
        })
        .then((res)=>setData(res.data.data))
    }
    console.log(data.length)
    const handleAdd=()=>{
        let lengthpage=data.length/limit
        
            setpage(page+1)
            setlimit(limit+50)
         
    }
    const handleless=()=>{
         
         
            setpage(page-1)
            setlimit(limit-50)
          
    }
useEffect(()=>{
    GetData(limit)
},[limit])
console.log(data)
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
     {data.map((el)=>{
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
    <div className='mainbutton'><button onClick={handleAdd}>load more</button>
       <button disabled={page==1} onClick={handleless}>show less</button></div>
    </>

  )
}
