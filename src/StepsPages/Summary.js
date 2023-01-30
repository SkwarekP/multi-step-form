import classes from "./Summary.module.scss"
import Layout from "../Layout/Layout";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

function Summary() {
    const plan = useSelector(state => state.plan);
    const addOns = useSelector(state => state.addOns);
    const navigate = useNavigate();

    let findPrice = addOns[addOns.length - 1].map(item => item.price);
    let sum = findPrice.reduce((a, b) => a + b, 0);

    const sendDataHandler = () => {
        navigate("/finishinfo");
    }

    return (
        <Layout currentUrl={"http://localhost:3000/summary"} onSend={sendDataHandler}>
            <header>
                <h1>Finishing up</h1>
                <p>Double-check everything looks OK before confirming</p>
            </header>
            <div className={classes.summary__container}>
                <div className={classes.row}>
                    <div className={classes.summary__text}>
                        <h2>{plan.type} {plan.monthly ? <span>(Monthly)</span> : <span>(Yearly)</span>}</h2>
                        <p>Change</p>
                    </div>
                    <p>${plan.price}/{plan.monthly ? <span>mo</span> : <span>yr</span>}</p>
                </div>
                <hr/>
                {addOns[addOns.length - 1].map(item => (
                    <div className={classes.row} key={item.type}>
                        <div className={classes.summary__text}>
                            <p>{item.type}</p>
                        </div>
                        <p>+${item.price}/{plan.monthly ? <span>mo</span> : <span>yr</span>}</p>
                    </div>
                ))}
            </div>

            <div className={`${classes.row} ${classes.total}`}>
                <div className={classes.summary__text}>
                    <p>Total (per year)</p>
                </div>
                <p>${plan.price + sum} /{plan.monthly ? <span>mo</span> : <span>yr</span>}</p>
            </div>
        </Layout>
    )
}

export default Summary;