import { useState } from "react"

const useInputState= (defaultValue ='') =>{
    const [value,setVlaue ] =useState(defaultValue);

    const handleChagesIs=val =>{
    setVlaue(val.target.value)
}

return [value,handleChagesIs]
}



export default useInputState ;