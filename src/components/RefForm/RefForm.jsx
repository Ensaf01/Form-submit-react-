import { useRef } from "react";


const RefForm = () => {
   
    const nameRef=useRef(null)
    const emailRef=useRef(null)
    const passRef=useRef(null);
    const handleSubmit = (re) => {
        re.preventDefault()
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passRef.current.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="names" id="" />
                <br />
                <input ref={emailRef}  type="email" name="email" id="" />
                <br />
                <input ref={passRef} type="password" name="password" required />
                <br />

                <input type="submit" value="submit" />

                
            </form>
        </div>
    );
};

export default RefForm;