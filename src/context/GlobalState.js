import React,{createContext,useReducer} from 'react'
import AppReducer from './AppReducer'

//initial state
const initialState={
    transactions:[
        //   { id: 1, text: 'Flower', amount: -20 },
        //   { id: 2, text: 'Salary', amount: 300 },
        //   { id: 3, text: 'Book', amount: -10 },
        //   { id: 4, text: 'Camera', amount: 150 }
    ]
}

//create context
export const GlobalContext = createContext(initialState)

//global context excess er jonno we need a provider 
//everything wrap around a provider
//provider component
export const GlobalProvider = ({children}) => {
//whenever we call reducer action we need to use this dispatch
const [state,dispatch] =useReducer(AppReducer,initialState);

//action it is going to appReducer
function deleteTransaction(id){
    dispatch({
        type:'DELETE_TRANSACTION',
        payload:id
    })
}
//add transactions
function addTransaction(transaction){
    dispatch({
        type:'ADD_TRANSACTION',
        payload:transaction
    })
}

//and then we need to provider component
//value for access to the other component state
return(<GlobalContext.Provider value={{
    transactions:state.transactions,
    deleteTransaction,
    addTransaction
}}>
    {children}
</GlobalContext.Provider>);
//in the GlobalContext.Provider component children is whatever we wrape
}
