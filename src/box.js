import {use, useState } from "react"

const boxes = ({ val, setVal }) => {
  const black = "black"

  return (
    <div>
        <input
        className="inp1"
        style = {{
        backgroundColor: val,
        color: "black" ? "white" : "black"
      }}
        value={val}
          placeholder="Empty Value"
         
        >
        
        </input>
        <input
        className="inp2"
          type="text" 
          placeholder="Add color name"
          onChange={(e) => setVal(e.target.value)}
          value={val}
        >
        
        </input>
        
    </div>
  )
}

export default boxes