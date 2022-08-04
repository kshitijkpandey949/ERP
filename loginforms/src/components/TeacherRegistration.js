import React, {useState,setState} from 'react';
import './Style.css'
function TeacherRegistration() {
    
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [dob, setDOB] = useState(null);
    const [fatherName, setFatherName] = useState(null);
    const [motherName, setMotherName] = useState(null);
    const [aadharNumber, setAadharNumber] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [alternateNumber, setAlternateNumber] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);
    const [addressLine1,setAddressLine1] = useState(null);
    const [addressLine2,setAddressLine2] = useState(null);
    const [correspondanceLine1,setCorrespondanceLine1] = useState(null);
    const [correspondanceLine2,setCorrespondanceLine2] = useState(null);
    const [qualifications,setQualifications] = useState(null);
    const [uploadFile,setUploadFile] = useState(null);


    


    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "dob"){
            setDOB(value);
        }
        if(id === "fatherName"){
            setFatherName(value);
        }
        if(id === "motherName"){
            setMotherName(value);
        }
        if(id === "aadharNumber"){
            setAadharNumber(value);
        }
        if(id === "phoneNumber"){
            setPhoneNumber(value);
        }
        if(id === "alternateNumber"){
            setAlternateNumber(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }
        if(id === "addressLine1"){
            setAddressLine1(value);
        }
        if(id === "addressLine2"){
            setAddressLine2(value);
        }
        if(id === "correspondanceLine1"){
            setCorrespondanceLine1(value);
        }
        if(id === "correspondanceLine2"){
            setCorrespondanceLine2(value);
       }
       if(id === "qualifications"){
        setQualifications(value);
       }
       if(id === "qualifications"){
        setQualifications(value);
       }
       if(id === "uploadfile"){
        setUploadFile(value);
       }

    }

    const handleSubmit  = () => {
        console.log(firstName,lastName,dob,fatherName,motherName,aadharNumber,phoneNumber,alternateNumber,email,password,confirmPassword,addressLine1,addressLine2,correspondanceLine1,correspondanceLine2,qualifications,uploadFile);
    }

    return(
        <div className="form">
            <div className="form-body">
            <h3 class="text-primary">Personal Details</h3>
                <div className="username">
                    <label className="form__label" for="firstName">First Name </label>
                    <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
                </div>
                <div className="lastname">
                    <label className="form__label" for="lastName">Last Name </label>
                    <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
                </div>
                <div className="dob">
                    <label className="form__label" for="dob">Date of Birth: </label>
                    <input className="form__input" type="date" value={dob} onChange = {(e) => handleInputChange(e)} id="dob" placeholder="DOB"/>
                </div>
                <div className="fathername">
                    <label className="form__label" for="FatherName">Father Name: </label>
                    <input  type="text" name="" id="FatherName" value={fatherName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="FatherName"/>
                </div>
                <div className="mothername">
                    <label className="form__label" for="motherName">Mother Name: </label>
                    <input  type="text" name="" id="motherName" value={motherName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="MotherName"/>
                </div>
                <div className='aadharnumber'>
                    <label className='form__label' for="aadharNumber">Aadhar Number: </label>
                    <input type='text'value={aadharNumber}onChange={(e) => setAadharNumber(e.target.value)} required/>
                </div>
                <div className="qualifications">
                    <label className="form__label" for="qualifications">Qualifications: </label>
                    <input className="form__input" type="text" id="qualifications" value={qualifications} onChange = {(e) => handleInputChange(e)} placeholder=" "/>
                </div>
                <div className="uploadfile">
                    <label className="form__label" for="uploadfile">Upload Document: </label>
                    <input className="form__input" type="file" id="uploadfile" value={uploadFile} onChange = {(e) => handleInputChange(e)} placeholder=" "/>
                    
                </div>
                <h3 class="text-primary">Contact Information</h3>
                <div className='phonenumber'>
                    <label className='form__label' for="phoneNumber">Mobile Number: </label>
                    <input type='text'value={phoneNumber}onChange={(e) => setPhoneNumber(e.target.value)} required/>
                </div>
                <div className='alternatenumber'>
                    <label className='form__label' for="alternateNumber">Alternate Mobile Number: </label>
                    <input  type="text" name="" id="alternateNumber" value={alternateNumber}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder=""/>
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email: </label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password: </label>
                    <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">Confirm Password: </label>
                    <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
                </div>
                <h3 class="text-primary">Permanent Address</h3>
                <div className="addressline1">
                <label className="form__label" for="addressLine1">Address Line1: </label>
                    <input className="form__input" type="text" id="addressLine1" value={addressLine1} onChange = {(e) => handleInputChange(e)} placeholder=" "/>
                </div>
                <div className="addressline2">
                <label className="form__label" for="addressLine2">Address Line2: </label>
                    <input className="form__input" type="text" id="addressLine2" value={addressLine2} onChange = {(e) => handleInputChange(e)} placeholder=" "/>
                </div>
                
                <h3 class="text-primary">Correspondance Address</h3>
                <div className="correspondanceline1">
                <label className="form__label" for="correspondanceLine1">Address Line1: </label>
                    <input className="form__input" type="text" id="correspondanceLine1" value={correspondanceLine1} onChange = {(e) => handleInputChange(e)} placeholder=" "/>
                </div>
                <div className="correspondanceline2">
                <label className="form__label" for="correspondanceLine2">Address Line2: </label>
                    <input className="form__input" type="text" id="correspondanceLine2" value={correspondanceLine2} onChange = {(e) => handleInputChange(e)} placeholder=" "/>
                </div>
            </div>
            <div class="footer">
                <button id="button" onClick={()=>handleSubmit()} type="submit" class="btn">Register Here</button>
            </div>
        </div>
       
    )       
}

export default TeacherRegistration