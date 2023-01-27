import  classes from "./PersonalInfo.module.scss";
import Layout from "../Layout/Layout";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {personalInfoActions} from "../store";

function PersonalInfo(props) {

    const [nameState, setNameState] = useState({name: "", isValid:false, message: ""})
    const [emailState, setEmailState] = useState({email:"", isValid:false, message: ""})
    const [phoneNumberState, setPhoneNumberState] = useState({phoneNumber:"", isValid:false, message: ""})
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function walidateForm() {
        let data = {};
        let arrayOfValidates = [];

        if(nameState.name === "") {
            setNameState({...nameState, isValid: false, message: "Name can't be blank!"})
            arrayOfValidates.push(false);

        }
        else if(/\d/.test(nameState.name)) {
            setNameState({...nameState, isValid:false, message: "Name field should not contains numbers!"})
            arrayOfValidates.push(false);
        }
        else {
            setNameState({...nameState, isValid:true, message:""})
            data = {...data, name: nameState.name}
            arrayOfValidates.push(true);
        }

        if(emailState.email === "") {
            setEmailState({...emailState, isValid: false, message: "Email can't be blank!"})
            arrayOfValidates.push(false);

        }
        else if(!emailState.email.includes("@") || !emailState.email.includes(".")) {
            setEmailState({...emailState, isValid:false, message: "Email must includes @ and ."})
            arrayOfValidates.push(false);
        }
        else {
            setEmailState({...emailState, isValid:true, message: ""})
            data = {...data, email: emailState.email}
            arrayOfValidates.push(true);
        }

        if(phoneNumberState.phoneNumber === "") {
            setPhoneNumberState({...phoneNumberState, isValid: false, message: "phone number can't be blank!"})
            arrayOfValidates.push(false);
        }
        else if(!/^[0-9]+$/.test(phoneNumberState.phoneNumber)) {
            setPhoneNumberState({...phoneNumberState, isValid:false, message: "phone number must contains only digits"})
            arrayOfValidates.push(false);
        }
        else if(phoneNumberState.phoneNumber.length!==9) {
            setPhoneNumberState({...phoneNumberState, isValid:false, message: "phone number must contains exactly 9 digits"})
            arrayOfValidates.push(false);
        }
        else {
            setPhoneNumberState({...phoneNumberState, isValid:true, message: ""})
            data = {...data, phoneNumber:phoneNumberState.phoneNumber}
            arrayOfValidates.push(true);
        }

            return {data, arrayOfValidates};
    }



    const submitFormHandler = () => {
        let checkWalidate = walidateForm();
        if(checkWalidate.arrayOfValidates.includes(false)) {
            console.log("The form is not validated")
        }
        else {
            dispatch(personalInfoActions.updatePersonalInfo(checkWalidate.data))
            navigate("/selectplan")
        }
    }


    return (
        <Layout currentUrl={"http://localhost:3000"} onSend={submitFormHandler}>
            <header>
                <h1>Personal Info</h1>
                <p>Please provide your name, email address, and phone number.</p>
            </header>
            <form className={classes.form} onSubmit={submitFormHandler}>
                <div className={classes.eachField__container}>
                    <label>Name</label>
                    <input type="text" placeholder="e.g. Stephen King"
                    onChange={(e) => setNameState({...nameState, name: e.target.value })}/>
                    {nameState.isValid ? "" : <p style={{color:"red", marginTop:".2rem", fontSize:".9rem"}}>{nameState.message}</p>}
                </div>
                <div className={classes.eachField__container}>
                    <label>Email Address</label>
                    <input type="text" placeholder="e.g. stephenking@lorem.com"
                    onChange={(e) => setEmailState({...emailState, email: e.target.value})}/>
                    {emailState.isValid ? "" : <p style={{color:"red", marginTop:".2rem", fontSize:".9rem"}}>{emailState.message}</p>}
                </div>
                <div className={classes.eachField__container}>
                    <label>Phone Number</label>
                    <input type="text" placeholder="e.g. 234 567 890"
                    onChange={(e) => setPhoneNumberState({...phoneNumberState, phoneNumber: e.target.value})}/>
                    {phoneNumberState.isValid ? "" : <p style={{color:"red", marginTop:".2rem", fontSize:".9rem"}}>{phoneNumberState.message}</p>}
                </div>

            </form>
        </Layout>
    )
}
export default PersonalInfo;