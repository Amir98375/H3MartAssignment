import* as types from './ActionType'

const initialState={
    laoding:false,
    Error:false,
    products:[],
 
}


export const productReducer=(state=initialState,action)=>{
    const {type,payload}=action;
    switch(type){
        case types.fetch_AllCoin_Request:
        return{
              ...state,
              laoding:true,
              Error:false
        }
        case types.fetch_AllCoin__Success:
            return{
                ...state,
                laoding:false,
                products:payload,
                Error:false
            }
        case types.fetch_AllCoin__Failure:
            return{
                ...state,
                laoding:false,
                Error:true
            }
            default:
                return state;
        }
    }