import classes from "./Layout.module.scss";
import {useNavigate} from "react-router-dom";


function Layout(props) {


    const navigate = useNavigate();


    const navigateHandler = () => {
        let currentUrl = props.currentUrl;

        if (currentUrl === "http://localhost:3000") {
            props.onSend()
        } else if (currentUrl === "http://localhost:3000/selectplan") {
            props.onSend()
        } else if (currentUrl === "http://localhost:3000/pickadd") {
            props.onSend()
        } else if (currentUrl === "http://localhost:3000/summary") {
            props.onSend()
        }
    }

    const backNavigateHandler = () => {
        let backBtn = document.getElementById("backBtn");

        if (props.currentUrl === "http://localhost:3000") {
            backBtn.classList.remove(classes.back__btn);
            backBtn.classList.add(classes.back__btn__display__none);
        }
        navigate(-1);
    }

    return (
        <div>
            <div className={classes.header}>
                <header>
                    <ul className={classes.flex__nav}>
                        <li>
                            <div
                                className={`${props.currentUrl === "http://localhost:3000" ? classes.steps__number__active : classes.steps__number__mobile}`}
                                id="step1_mobile">1
                            </div>
                        </li>
                        <li>
                            <div
                                className={`${props.currentUrl === "http://localhost:3000/selectplan" ? classes.steps__number__active : classes.steps__number__mobile}`}
                                id="step2_mobile">2
                            </div>
                        </li>
                        <li>
                            <div
                                className={`${props.currentUrl === "http://localhost:3000/pickadd" ? classes.steps__number__active : classes.steps__number__mobile}`}
                                id="step3_mobile">3
                            </div>
                        </li>
                        <li>
                            <div
                                className={`${props.currentUrl === "http://localhost:3000/summary" ? classes.steps__number__active : classes.steps__number__mobile}`}
                                id="step4_mobile">4
                            </div>
                        </li>
                    </ul>
                </header>
            </div>
            <div className={classes.card__container}>
                {props.children}
            </div>


            <div className={classes.desktop__layout__container}>
                <div className={classes.header__desktop}>
                    <div className={classes.header__desktop__flex__row}>
                        <div
                            className={`${props.currentUrl === "http://localhost:3000" ? classes.steps__number__active : classes.steps__number}`}
                            id="step1"
                            onClick={() => navigate("/")} style={{cursor: "pointer"}}>1
                        </div>
                        <div className={classes.header__desktop__step__info}>
                            <span>step 1</span>
                            <p>your info</p>
                        </div>
                    </div>
                    <div className={classes.header__desktop__flex__row}>
                        <div
                            className={`${props.currentUrl === "http://localhost:3000/selectplan" ? classes.steps__number__active : classes.steps__number}`}
                            id="step2">2
                        </div>
                        <div className={classes.header__desktop__step__info}>
                            <span>step 2</span>
                            <p>select plan</p>
                        </div>
                    </div>
                    <div className={classes.header__desktop__flex__row}>
                        <div
                            className={`${props.currentUrl === "http://localhost:3000/pickadd" ? classes.steps__number__active : classes.steps__number}`}
                            id="step3">3
                        </div>
                        <div className={classes.header__desktop__step__info}>
                            <span>step 3</span>
                            <p>add-ons</p>
                        </div>
                    </div>
                    <div className={classes.header__desktop__flex__row}>
                        <div
                            className={`${props.currentUrl === "http://localhost:3000/summary" ? classes.steps__number__active : classes.steps__number}`}
                            id="step4">4
                        </div>
                        <div className={classes.header__desktop__step__info}>
                            <span>step 4</span>
                            <p>summary</p>
                        </div>
                    </div>
                </div>
                <div className={classes.card__container__desktop}>
                    {props.children}
                    <footer className={classes.desktop__buttons}>
                        <button
                            className={`${props.currentUrl === "http://localhost:3000" || props.currentUrl === "http://localhost:3000/finishinfo" ?
                                classes.back__btn__display__none : classes.back__btn}`}
                            onClick={backNavigateHandler} id="backBtn">Go back
                        </button>
                        <button
                            className={`${props.currentUrl === "http://localhost:3000/finishinfo" ? classes.next__btn__display__none : classes.nextStep__btn}`}
                            onClick={navigateHandler}
                            id="nextBtn">{props.currentUrl === "http://localhost:3000/summary" ? "Confirm" : "Next step"}
                        </button>
                    </footer>
                </div>
            </div>


            <div className={classes.footer__mobile__container}>
                <footer
                    className={`${props.currentUrl === "http://localhost:3000" ? classes.footer__flex__end : classes.footer}`}
                    id="footer_m">
                    <button
                        className={`${props.currentUrl === "http://localhost:3000" ? classes.back__btn__display__none : classes.back__btn}`}
                        onClick={backNavigateHandler} id="backBtn_m">Go back
                    </button>
                    <button
                        className={`${props.currentUrl === "http://localhost:3000/finishinfo" ? classes.next__btn__display__none : classes.nextStep__btn}`}
                        onClick={navigateHandler}
                        id="nextBtn_m">{props.currentUrl === "http://localhost:3000/summary" ? "Confirm" : "Next step"}
                    </button>
                </footer>
            </div>
        </div>
    )
}

export default Layout;