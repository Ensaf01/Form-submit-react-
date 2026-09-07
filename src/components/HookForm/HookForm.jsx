import useInputState from "../../Hooks/Hooks";


const HookForm = () => {
    // const [name, handlechange] = useInputState('ENSAF');
    const emaliState=useInputState('ensaf@gamil.com')
// emaliState get 2 vlue= 1.value and onchage
    const handleSubmit = e => {
        console.log('from data',emaliState.value)
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handlechange} type="text" name="names" id="" /> */}
                <br />
                <input {...emaliState} type="email" name="email" id="" />
                <br />
                <input type="text" name="phone" /> <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;