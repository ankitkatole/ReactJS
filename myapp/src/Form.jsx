function handleFormSubmit(event){
    event.preventDefault();
    console.log("Submitted")
}
function Form(){
    return(
        <form onClick={handleFormSubmit}>
            <label>Name:</label>
            <input placeholder="Enter Your Name" />
            <button>Submit</button>
        </form>
    )
}

export default Form;