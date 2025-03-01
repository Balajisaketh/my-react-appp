import { createSlice } from "@reduxjs/toolkit";

// Define the state type
interface CounterState {
//   value: number;
  criteria:string,
  criteriaa:string

}

// Initial state
const initialState: CounterState = {
//   value: 0,
  criteria:"",
  criteriaa:""
};

// Create the slice
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    
    setcriteria:(state,action)=>{
        state.criteria=action.payload
    },
    setcriteriaa:(state,action)=>{
      state.criteriaa=action.payload

    }
  },
});

// Export actions and reducer
export const { setcriteria,setcriteriaa} = counterSlice.actions;
export default counterSlice.reducer;
