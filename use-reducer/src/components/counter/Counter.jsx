import { useReducer, useState } from "react"
import { decrement, increment, incrementByValue } from "./counterActions"
import Reducer from "./counterReducer"

const initialState={
    counter:0
}

function Counter(){

    const [state,dispatch]=useReducer(Reducer,initialState)

    const [value,setValue]=useState("")

    return(
        <div>
            <h2>Counter:{state.counter}</h2>
            <input value={value} onChange={(e)=>setValue(Number(e.target.value))} type="number" />
            <br />
            <button onClick={()=>dispatch(increment)}>INCREMENT</button>
            <br />
            <button onClick={()=>dispatch(decrement)}>DECREMENT</button>
            <br />
            <button onClick={()=>dispatch(incrementByValue(value))}>INCREMENT BY {value?value:"VALUE"}</button>
            <br />
            <button onClick={()=>dispatch(incrementByValue(-value))}>DECREMENT BY {value?value:"VALUE"}</button>
        </div>
    )
}

export default Counter