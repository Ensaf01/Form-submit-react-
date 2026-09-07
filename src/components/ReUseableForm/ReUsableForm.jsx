

const ReUsableForm = ({formTitle,handleSubmit ,submitButtonText='Submit'}) => {


    return (
        <div>
            <h2>{formTitle}</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="names" id="" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="text" name="phone" /> <br />
                <input type="submit" value={submitButtonText} />
            </form>
            
        </div>
    );
};

export default ReUsableForm;
