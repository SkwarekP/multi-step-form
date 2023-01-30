import PersonalInfo from "./StepsPages/PersonalInfo";
import PlanSelect from "./StepsPages/PlanSelect";
import PickAdd from "./StepsPages/PickAdd";
import Summary from "./StepsPages/Summary";
import FinishInfo from "./StepsPages/FinishInfo";
import "../src/assets/style.scss";
import {Routes, Route, useNavigate} from "react-router-dom";
import {useEffect} from "react";

function App() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/");
        //eslint-disable-next-line
    }, [])

    return (
        <Routes>
            <Route path="/" element={<PersonalInfo/>}/>
            <Route path="selectplan" element={<PlanSelect/>}/>
            <Route path="pickadd" element={<PickAdd/>}/>
            <Route path="summary" element={<Summary/>}/>
            <Route path="finishinfo" element={<FinishInfo/>}/>
        </Routes>
    );
}

export default App;
