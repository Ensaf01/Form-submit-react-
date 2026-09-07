import { useState } from "react"

const useInputState = (defaultValue = '') => {
    const [value, setVlaue] = useState(defaultValue);

    // const handleChagesIs = val => {
    //     setVlaue(val.target.value)
    // }

    // return [value, handleChagesIs]
    const onChange = val => {
        setVlaue(val.target.value)
    }

    return {
        value,
        onChange
    }
}



export default useInputState;