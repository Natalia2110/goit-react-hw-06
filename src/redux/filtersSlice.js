import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  name: "nata",
};
const filtersSlice = createSlice({
  name: "filter",
  initialState: INITIAL_STATE,
  redusers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});
console.log(filtersSlice.actions);
export const filtersReduser = filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;
// console.log(changeFilter);
export const selectNameFilter = (state) => state.filter.name;

// export const filterReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case "filter/setFilterValue": {
//       return {
//         ...state,
//         filterValue: action.payload,
//       };
//     }
//     default:
//       return state;
//   }
// };

// export const setFilterValue = (payload) => {
//   return {
//     type: "filter/setFilterValue",
//     payload,
//   };
// };
