import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialContactsState = {
  items: [
    { id: "id-1", name: "Ron Weasley", number: "555-44-55" },
    { id: "id-2", name: "Hermione Granger", number: "444-88-11" },
    { id: "id-3", name: "Neville Longbottom", number: "333-22-11" },
    { id: "id-4", name: "Luna Lovegood", number: "765-43-21" },
  ],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialContactsState,
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    prepare(name, number) {
      return {
        payload: {
          id: nanoid(),
          name,
          number,
        },
      };
    },

    deleteContact: (state, action) => {
      // const index = state.items.findIndex(
      //   (contact) => contact.id === action.payload
      // );
      // state.items.splice(index, 1);
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const selectContacts = (state) => state.contacts.items;
