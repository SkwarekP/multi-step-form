
import classes from "./PickAdd.module.scss"
import Layout from "../Layout/Layout";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addOnsActions} from "../store";
import {useNavigate} from "react-router-dom";

function PickAdd() {

    const monthly = useSelector(state => state.plan.monthly);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [addOnsState, setAddOnsState] = useState([
        {id:"pickcard1", isClicked: false},
        {id:"pickcard2", isClicked: false},
        {id:"pickcard3", isClicked: false}
    ])

    const dataHandler = (id, type, price, description) => {

        const updateState = addOnsState.map(item => {
            if(item.id === id) {
                return {...item, isClicked:true, type:type, price:price, description:description}
            }
            else {
                return {...item}
            }
        })
        setAddOnsState(updateState);
    }

    const sendDataHandler = () => {
        const findAll = addOnsState.filter(item => item.isClicked)

        if(findAll) {
            const data = findAll.map(item => {
                return {type: item.type, price: item.price}
            })
            console.log(data);
            dispatch(addOnsActions.updateOns(data));
            navigate("/summary")
        }

        else {
            console.log("Choose your options!")
        }
    }

    return (
        <Layout currentUrl={"http://localhost:3000/pickadd"} onSend={sendDataHandler}>
            <header>
                <h1>Pick add-ons</h1>
                <p>Add-ons help enhance your gaming experience</p>
            </header>
            <div
                id="pickcard1"
                className={`${addOnsState[0].isClicked ? 
                    classes.pick_add_card__container + " " + classes.pick_add_card__container__active : classes.pick_add_card__container}`}
                    onClick={(e) => {
                     e.preventDefault()
                     dataHandler(e.target.id, "Online service", `${monthly ? 1 : 10}`, "Access to multiplayer games")
            }}>
                <div
                    id="select1"
                    className={`${addOnsState[0].isClicked ? classes.select + " " + classes.select__active : classes.select}`}>
                </div>
                <div className={classes.pick__text}>
                    <h2>Online service</h2>
                    <p>Access to multiplayer games</p>
                </div>
                {monthly ? <p>+$1/mo</p> : <p>+$10/yr</p>}
            </div>
            <div
                id="pickcard2"
                className={`${addOnsState[1].isClicked ?
                classes.pick_add_card__container + " " + classes.pick_add_card__container__active : classes.pick_add_card__container}`}
                 onClick={(e) => {
                     dataHandler(e.target.id, "Larger storage", `${monthly ? 2 : 20}`, "Extra 1TB of cloud save")
                 }}>
                <div
                    id="select2"
                    className={`${addOnsState[1].isClicked ? classes.select + " " + classes.select__active : classes.select}`}>
                </div>
                <div className={classes.pick__text}>
                    <h2>Larger storage</h2>
                    <p>Extra 1TB of cloud save</p>
                </div>
                {monthly ? <p>+$2/mo</p> : <p>+$20/yr</p>}
            </div>
            <div
                id="pickcard3"
                className={`${addOnsState[2].isClicked ?
                classes.pick_add_card__container + " " + classes.pick_add_card__container__active : classes.pick_add_card__container}`}
                 onClick={(e) => {
                dataHandler(e.target.id, "Customizable profile", `${monthly ? 2 : 20}`, "Custom theme on your profile")
            }}>
                <div
                    id="select3"
                    className={`${addOnsState[2].isClicked ? classes.select + " " + classes.select__active : classes.select}`}>
                </div>
                <div className={classes.pick__text}>
                    <h2>Customizable profile</h2>
                    <p>Custom theme on your profile</p>
                </div>
                {monthly ? <p>+$2/mo</p> : <p>+$20/yr</p>}
            </div>
        </Layout>
    )
}
export default PickAdd;