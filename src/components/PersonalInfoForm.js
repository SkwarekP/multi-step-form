// import classes from "./PersonalInfoForm.module.scss";
//
// function PersonalInfoForm(props) {
//
//     const submitFormHandler = (e) => {
//         e.preventDefault();
//         props.onSend({name: "Stephen King", email: "stephenking@lorem.com", phoneNr: 121212121});
//         console.log("CHUJ");
//
//     }
//
//     return (
//         <form className={classes.form} onSubmit={submitFormHandler}>
//             <div className={classes.eachField__container}>
//                 <label>Name</label>
//                     <input type="text" placeholder="e.g. Stephen King" />
//             </div>
//             <div className={classes.eachField__container}>
//                 <label>Email Address</label>
//                     <input type="text" placeholder="e.g. stephenking@lorem.com" />
//             </div>
//             <div className={classes.eachField__container}>
//                 <label>Phone Number</label>
//                     <input type="text" placeholder="e.g. +1 234 567 890" />
//             </div>
//             {/*<div className={classes.buttons__form}>*/}
//             {/*    <button type="submit" className={classes.nextStep__btn}>Next step</button>*/}
//             {/*</div>*/}
//         </form>
//     )
// }
//
// export default PersonalInfoForm;