import React, { Fragment, useState } from 'react'

const FormSecond = () => {

    const [inputFields, setInputFields] = useState({
        firstName : "",
        email : "",
        gender : "",
        date: "",
        country : "",
    });
    const [inputError, setInputError] = useState({
        firstNameError : "",
        emailError : "",
        genderError : "",
        dateError: "",
        countryError : "",
    });
    const [message, setMessage] = useState("");

    const handleSubmit = function (event) {
        event.preventDefault();  
        setMessage("Form Submitted Successfully");   
      
    };

    const handleChange = function (event) {

        setInputError("");

        // FirstName Validation
        if (event.target.name === "firstName" && event.target.value.length <= 2 ){
            setInputError((prevErr)=>({
                ...prevErr,
                [`${event.target.name}Error`] : `${event.target.name} must be at least 3 characters` 
            }));
        }

        // email Validation
        if (event.target.name === "email"){
            if (!event.target.value.includes("@") && !event.target.value.includes("."))
            {
                setInputError((prevErr)=> ({
                    ...prevErr,
                    [`${event.target.name}Error`] : `${event.target.name} is invalid` 
                }));
            }
        }

        // country Validation
        if (event.target.name === "country" && event.target.value == "" ){
            setInputError((prevErr)=> ({
                ...prevErr,
                [`${event.target.name}Error`] : `${event.target.name} is invalid` 
            }));
        }

        console.log(inputError , "==inputError");
        console.log(inputFields, "==fields");

        setInputFields(prev => ({
            ...prev,
            [event.target.name]:event.target.value,
        }));
    };

    return(
        <Fragment>
            <form className='form-one' onSubmit={handleSubmit}>

                <div className='fields'>
                    <label htmlFor='firstName'>First Name</label>
                    <input type='text' id='firstName' name ='firstName' placeholder='First Name' onChange={handleChange} required/>
                </div>

                <label>{inputError.firstNameError && <p className='errorData'>{inputError.firstNameError}</p>}</label>

                <div className='fields'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' name='email' placeholder='Email' onChange={handleChange} required/>
                </div>

                <label>{inputError.emailError && <p className='errorData'>{inputError.emailError}</p>}</label>

                <div className='fields'>
                    <label >Gender</label>
                    <div>
                    <label htmlFor='male'>Male</label>
                    <input type='radio' id='male' name='gender' onChange={handleChange} defaultValue={"male"} required/>
                
                    <label htmlFor='female'>Female</label>
                    <input type='radio' id='female' name='gender' value={"female"} onChange={handleChange} required/>
                    </div>
                </div>

                <label>{inputError.genderError && <p className='errorData'>{inputError.genderError}</p>}</label>

                {/* <div className='fields'>
                    <div className='coursesList'>

                        <label htmlFor='courses'>Courses</label>

                        {courses.map((item,index)=>{
                            return (
                                <div className='courseItem' key={item.id}>
                                    <label htmlFor={item.id} >{item.course}</label>
                                    <input type='checkbox' id={item.id} name={item.course} value={item.course} onChange={()=>HandleChangeCheckbox(index)} required/>
                                </div>
                            );
                        })}
                    </div>
                </div> */}

                <div className='fields'>
                    <label htmlFor='dob'>Date of Birth</label>
                    <input type='date' id='dob' name='date' onChange={handleChange} required/>
                </div>

                <label>{inputError.dateError && <p className='errorData'>{inputError.dateError}</p>}</label>

                <div className='fields'>
                    <label htmlFor='country'>Country</label>
                    <div>
                        <select name='country' onChange={handleChange} required>
                            <option value ="">Select</option>
                            <option value ="uae">UAE</option>
                            <option value ="india">INDIA</option>
                            <option value ="qatar">QATAR</option>
                        </select>
                    </div>
                </div>

                <label>{inputError.countryError && <p className='errorData'>{inputError.countryError}</p>}</label>

                <div className='submitContainer'>
                <button type='submit'>Submit</button>
                {message && <p>{message}</p>}
                </div>
                
            </form>
        </Fragment>
    );
};

export default FormSecond;