import {useEffect, useRef, useState} from 'react'

const UseRef = () => {

    const [inputValue, setInputValue] = useState("");
    const [secureInputValue, setDateInputValue] = useState("")

    const cvcRef = useRef(null);
    const cvcDate = useRef(null);

    useEffect(() => {
        console.log(cvcRef);
        console.log(cvcRef.current.value);
    })
    
    const handleInput = (e) => {
        const val = e.target.value;
        // console.log(val.length);
        setInputValue(val);
        if(val.length === 16) {
            cvcRef.current.focus();
        }
    }

    const secureNum = (e) => {
        const val = e.target.value;
        setDateInputValue(val)
        if(val.length === 3){
            cvcDate.current.focus();
        }
    }

  return (
    <div style={{margin:"50px"}}>
        <h1>useRef</h1>
        <input onChange={handleInput} value={inputValue} type="text" placeholder='Card number' /><br></br><br></br>
        <input ref={cvcRef} type="text" placeholder='Secure number' onChange={secureNum} value={secureInputValue} /><br></br><br></br>
        <input ref={cvcDate} type="text" placeholder='Date/Month' />
    </div>
  )
}

export default UseRef;