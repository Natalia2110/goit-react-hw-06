import { createSlice } from "@reduxjs/toolkit";

// import dataContacts from "../contacts.json";

const INITIAL_STATE = {
  items: [],
};
const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,
  reducers: {
    addContacts: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContacts: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const contactsReduser = contactsSlice.reducer;
export const { addContacts, deleteContacts } = contactsSlice.actions;
export const selectContacts = (state) => state.contacts.items;

// export const contactsReduser = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case "contacts/add": {
//       return {
//         ...state,
//         contacts: [...state.contacts, action.playload],
//       };
//     }
//     case "contacts/delete": {
//       return {
//         ...state,
//         contacts: state.contacts.items.filter(
//           (contact) => contact.id !== action.playload
//         ),
//       };
//     }
//     default:
//       return state;
//   }
// };

// export const addContact = (playload) => {
//   return {
//     type: "contacts/add",
//     playload: playload,
//   };
// };

// export const deleteContacts = (contactId) => {
//   return {
//     type: "contacts/delete",
//     playload: contactId,
//   };
// };
