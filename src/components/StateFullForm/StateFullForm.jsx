import { useState } from "react";


const StateFullForm = () => {
    const [name, setName] = useState(null)
    const [emails, setemail] = useState(null)
    const [error, setError] = useState()

    const handleSubmit = e => {
        e.preventDefault();
        if (name.length < 4) {
            setError('name length must be gather then 5')
        }
        else {
            setError('');
            console.log("submited :", name, emails);
        }

    }
    const handleNameChange = x => {
        console.log(x.target.value)
        setName(x.target.value);
    }

    const handleEmailChange = e => {
        console.log(e.target.value)
        setemail(e.target.value);
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange} type="text" name="names" id="" />
                <br />
                <input onChange={handleEmailChange} type="email" name="email" id="" />
                <br />
                <input type="password" name="password" required />
                <br />

                <input type="submit" value="submit" />

                {/* // error sow */}
                {
                    error && <p>{error}</p>
                }
            </form>

        </div>
    );
};

export default StateFullForm;