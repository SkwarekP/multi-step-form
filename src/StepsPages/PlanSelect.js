import classes from "./PlanSelect.module.scss"
import arcade_logo from "../assets/images/icon-arcade.svg"
import advanced_logo from "../assets/images/icon-advanced.svg"
import pro_logo from "../assets/images/icon-pro.svg"
import Layout from "../Layout/Layout";
import { useState} from "react";
import {useDispatch} from "react-redux";
import {planActions} from "../store";
import {useNavigate} from "react-router-dom";

function PlanSelect() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isClickedState, setIsClickedState] = useState([
        {id:"plancard1", isClicked: false},
        {id:"plancard2", isClicked:false},
        {id:"plancard3", isClicked:false}
   ]);

    const [switcherToggle, setSwitcherToggle] = useState(false)
    const [isValidState, setIsValidState] = useState({isValid: false, message:""});

    const dataHandler = (id, type, price) => {
        const updateState = isClickedState.map(item => {
            if(item.id === id) {
                return {...item, isClicked: true, type:type, price:price, monthly:!switcherToggle}
            }
            else {
                return {...item, isClicked: false}
            }
        })
        setIsClickedState(updateState);

    }

    const sendDataHandler = () => {
        const findOne = isClickedState.find(item => item.isClicked);

        if(findOne) {
            setIsValidState({isValid: true, message:""})
            dispatch(planActions.updatePlan(findOne))
            navigate("/pickadd");
        }
        else {
            setIsValidState({isValid:false, message:"Choose your options!"})
        }

    }

    const monthlyOrYearlySwitcherHandler = (e) => {
        e.preventDefault();
        setSwitcherToggle(prev => !prev);

    }

    return (
        <Layout currentUrl={"http://localhost:3000/selectplan"} onSend={sendDataHandler}>
            <header>
                <h1>Select your plan</h1>
                <p>You have the option of monthly or yearly billing.</p>
            </header>
            <div className={`${isClickedState[0].isClicked ? classes.plan__card + " " + classes.plan__card__chosen : classes.plan__card }`}
                 onClick={(e) => {
                e.preventDefault();
                if(switcherToggle) {
                    dataHandler(e.target.id, "Arcade", 90);
                }
                else {
                    dataHandler(e.target.id,"Arcade", 9);
                }
            } } id="plancard1">
                <img src={arcade_logo} alt="arcade logo" />
                <div className={classes.plan__text}>
                    <h2>Arcade</h2>
                    {switcherToggle ? <p>$90/yr </p>:<p>$9/mo</p>}
                    {switcherToggle && <p style={{color:"hsl(213, 96%, 18%)", fontSize:".85rem", marginTop:".5rem"}}>2 months free</p>}
                </div>
            </div>
            <div className={`${isClickedState[1].isClicked ? classes.plan__card + " " + classes.plan__card__chosen : classes.plan__card }`} id="plancard2"
                 onClick={(e) => {
                     e.preventDefault();
                     if(switcherToggle) {
                         dataHandler(e.target.id, "Advanced", 120);
                     }
                     else {
                         dataHandler(e.target.id, "Advanced", 12);
                     }
                 } }>
                <img src={advanced_logo} alt="arcade logo" />
                <div className={classes.plan__text}>
                    <h2>Advanced</h2>
                    {switcherToggle ? <p>$120/yr </p> :<p>$12/mo</p>}
                    {switcherToggle && <p style={{color:"hsl(213, 96%, 18%)", fontSize:".85rem", marginTop:".5rem"}}>2 months free</p>}
                </div>
            </div>
            <div className={`${isClickedState[2].isClicked ? classes.plan__card + " " + classes.plan__card__chosen : classes.plan__card }`} id="plancard3"
                 onClick={(e) => {
                e.preventDefault();
                if(switcherToggle) {
                    dataHandler(e.target.id, "Pro", 150);
                }
                else {
                    dataHandler(e.target.id, "Pro", 15);
                }
            } }>
                <img src={pro_logo} alt="arcade logo" />
                <div className={classes.plan__text}>
                    <h2>Pro</h2>
                    {switcherToggle ? <p>$150/yr </p> :<p>$15/mo</p>}
                    {switcherToggle && <p style={{color:"hsl(213, 96%, 18%)", fontSize:".85rem", marginTop:".5rem"}}>2 months free</p>}
                </div>
            </div>
            <div className={classes.month__or__year}>
                <p className={switcherToggle ? classes.monthly_or_yearly : classes.monthly_or_yearly__p__chosen}>Monthly</p>
                <button className={classes.switcher__btn} onClick={monthlyOrYearlySwitcherHandler}>
                    <div className={switcherToggle ? classes.switcher__toggle : classes.switcher}></div>
                </button>
                <p className={switcherToggle ? classes.monthly_or_yearly__p__chosen :  classes.monthly_or_yearly}>Yearly</p>
            </div>
            {isValidState.isValid ? "" : ""}
        </Layout>
    )
}
export default PlanSelect;