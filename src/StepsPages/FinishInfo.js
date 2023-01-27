import checked_icon from "../assets/images/icon-thank-you.svg"
import classes from "./FinishInfo.module.scss"
import Layout from "../Layout/Layout";
function FinishInfo() {

    return (
        <Layout currentUrl={"http://localhost:3000/finishinfo"}>
        <div className={classes.center__flex}>
            <img src={checked_icon} alt="checked icon" />
            <header>
                <h1>Thank you!</h1>
                <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support,
                please feel free to email us at support@loremgaming.com.</p>
            </header>
        </div>
            </Layout>
    )
}

export default FinishInfo;