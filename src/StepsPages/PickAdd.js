import classes from "./PickAdd.module.scss"
import Layout from "../Layout/Layout";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addOnsActions} from "../store";
import {useNavigate} from "react-router-dom";

function PickAdd() {

    const pickAddData = useSelector(state => state.addOns);
    const monthly = useSelector(state => state.plan.monthly);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [addOnsState, setAddOnsState] = useState([
        {id: "pickcard1", isClicked: false},
        {id: "pickcard2", isClicked: false},
        {id: "pickcard3", isClicked: false}
    ])

    const dataHandler = (id, type, price, description) => {

        const updateState = addOnsState.map(item => {
            if (item.id === id && !item.isClicked) {
                return {...item, isClicked: true, type: type, price: price, description: description}
            } else if (item.id === id && item.isClicked) {
                return {...item, isClicked: false}
            } else {
                return {...item}
            }
        })
        setAddOnsState(updateState);
    }

    const sendDataHandler = () => {
        const findAll = addOnsState.filter(item => item.isClicked)
        if (findAll) {
            let data = findAll.map(item => {
                return {
                    type: item.type,
                    price: item.price,
                    id: item.id,
                    isClicked: item.isClicked,
                }
            })
            dispatch(addOnsActions.updateOns(data));
            navigate("/summary")
        } else {
            console.log("Choose your options!")
        }
    }

    useEffect(() => {
        if (pickAddData[pickAddData.length - 1]) {
            let addedOns = pickAddData[pickAddData.length - 1].map(item => item.id)

            let latestStates = addOnsState.map((item) => {
                if (item.id === addedOns[0]) {
                    return {
                        ...item,
                        isClicked: true,
                        type: "Online service",
                        price: monthly ? 1 : 10
                    }
                } else if (item.id === addedOns[1]) {
                    return {
                        ...item,
                        isClicked: true,
                        type: "Larger storage",
                        price: monthly ? 2 : 20
                    }
                } else if (item.id === addedOns[2]) {
                    return {
                        ...item,
                        isClicked: true,
                        type: "Customizable profile",
                        price: monthly ? 2 : 10
                    }
                } else {
                    return {...item}
                }
            })

            setAddOnsState(latestStates);

        }//eslint-disable-next-line
    }, [])

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
                onClick={() => {
                    dataHandler("pickcard1", "Online service", `${monthly ? 1 : 10}`, "Access to multiplayer games")
                }}>
                <div
                    className={`${addOnsState[0].isClicked ? classes.select + " " + classes.select__active : classes.select}`}></div>
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
                onClick={() => {
                    dataHandler("pickcard2", "Larger storage", `${monthly ? 2 : 20}`, "Extra 1TB of cloud save")
                }}>
                <div
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
                onClick={() => {
                    dataHandler("pickcard3", "Customizable profile", `${monthly ? 2 : 20}`, "Custom theme on your profile")
                }}>
                <div
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