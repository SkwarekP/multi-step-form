import {configureStore, createSlice} from "@reduxjs/toolkit";


const personalInfo = {
    name: "",
    email: "",
    phoneNumber: 0,
}

const plan = {
    type: "",
    price: "",
    monthly: true,
    id: "",
    isClicked: false
}


const personalInfoSlice = createSlice({
    name: "personalInfo",
    initialState: personalInfo,
    reducers: {
        updatePersonalInfo(state, action) {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.phoneNumber = action.payload.phoneNumber;
        }
    }
})

const planSlice = createSlice({
    name: "plan",
    initialState: plan,
    reducers: {
        updatePlan(state, action) {
            state.type = action.payload.type;
            state.price = parseInt(action.payload.price);
            state.monthly = action.payload.monthly;
            state.isClicked = action.payload.isClicked;
            state.id = action.payload.id;
        }

    }
})

const addOnsSlice = createSlice({
    name: "addOns",
    initialState: [],
    reducers: {
        updateOns(state, action) {
            state.push(action.payload.map(item => {
                return {
                    type: item.type,
                    price: parseInt(item.price),
                    id: item.id,
                    isClicked: item.isClicked,
                }
            }))
        }
    }
})


const store = configureStore({
    reducer: {personalInfo: personalInfoSlice.reducer, plan: planSlice.reducer, addOns: addOnsSlice.reducer}
})


export const personalInfoActions = personalInfoSlice.actions;
export const planActions = planSlice.actions;
export const addOnsActions = addOnsSlice.actions;

export default store;