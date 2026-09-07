import useInputState from "../../Hooks/Hooks";


const HookForm = () => {
    const [name, handlechange] = useInputState('ENSAF');
    const handleSubmit = e => {
        console.log('from data',name)
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handlechange} type="text" name="names" id="" />
                <br />
                <input  type="email" name="email" id="" />
                <br />
                <input type="text" name="phone" /> <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;