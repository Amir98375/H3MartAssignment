import* as types from './ActionType'
import axios from 'axios'


const FetchAllpRequest=(payload)=>{
    return{
   type:types.fetch_AllCoin_Request,
   payload
    }
 }
  const FetchAllpSuccess=(payload)=>{
     return{
         type:types.fetch_AllCoin__Success,
         payload
     }
 }
  const FetchAllpFailure=(payload)=>{
     return{
         type:types.fetch_AllCoin__Failure,
         payload
     }
 }
 
 export const fetchData=(payload)=>(dispatch)=>{
     dispatch(FetchAllpRequest())
     // console.log(payload,"fetchdata")
     axios.get(`https://api.coincap.io/v2/assets`,{
      params:{
         limit:payload
      }
     })
     .then((res)=>{
        
         return dispatch(FetchAllpSuccess(res.data.data))     
     })
     .catch((e)=>{
         return dispatch(FetchAllpFailure(e.data))
     })
 }
 