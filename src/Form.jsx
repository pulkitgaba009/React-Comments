import { useState } from "react"

function Form(){
    let [formData,setFormData] = useState({
        fullName:"",
        userName:""
    })

    function handleInputChange(event){
        let fieldName = event.target.name;
        let value = event.target.value;
        
        setFormData((prevValue)=>{
          return  {...prevValue,[fieldName]: value}
        })
    }


    function handle(event){
        event.preventDefault();
        console.log("Submitted Data:", formData);
    }

    return (
        <form onSubmit={handle}>
            <label htmlFor="userName"> User name : </label>
            <input 
            id="userName" 
            type="text"
            name="userName"
            placeholder="User Name" 
            value={formData.userName}
            onChange={handleInputChange}
            />

            <br /><br />

            <label htmlFor="fullName"> Full name : </label>
            <input 
            id="fullName" 
            type="text"
            name="fullName"
            placeholder="Full Name" 
            value={formData.fullName}
            onChange={handleInputChange}
            />
            
            <br /><br />
            <button>Submit</button>
        </form>
    )
}

export default Form