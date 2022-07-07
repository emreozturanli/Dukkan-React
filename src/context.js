import React,{useContext, useEffect, useReducer} from 'react';
import {products} from './data';
import {reducer} from './reducer';

export const AppContext = React.createContext();

const initialState = {
    list:products.map((i)=>{ return {...i,amount:1}}),
    totalAmount : products.length,
    totalPrice : products.reduce( (a, b)=>  a + b.price , 0)
}

export const AppProvider = ({children}) => {
    const [state,dispatch] =useReducer(reducer,initialState);

    const increaseAmount = (id)=>{
        dispatch({type:'INCREASE',payload:id})
    }

    const decreaseAmount = (id)=>{
        dispatch({type:'DECREASE',payload:id})
    }

    const removeProduct = (id)=>{
        dispatch({type: 'REMOVE', payload: id})
    }
    const clearCart = ()=>{
        dispatch({type: 'CLEAR'})
    }

    useEffect(()=>{
        dispatch({type: 'CHANGEAMOUNT'});
        dispatch({type: 'TOTALPRICE'});
    },[state.list])

  return (
    <AppContext.Provider value={{...state,increaseAmount,decreaseAmount,removeProduct,clearCart}}>
        {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}