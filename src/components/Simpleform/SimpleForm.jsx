

const SimpleForm = () => {
    const handleSubmit=(e) =>{
        e.preventDefault(); // submit normal behave ke prevent korbo,like reload etc 
        console.log("form submit")
        console.log(e.target.names.value)// e click from form then target means which on click and then names is specific which on clicked then value show
         console.log(e.target.email.value)
         console.log(e.target.phone.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="names" id="" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="text" name="phone" /> <br />
                <input type="submit" value="submit" />
            </form>
            
            
        </div>
    );
};

export default SimpleForm;