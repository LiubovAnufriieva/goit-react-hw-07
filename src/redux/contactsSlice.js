import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchContacts,addContact, deleteContact } from "./contactsOps";
import { selectNameFilter } from "./filtersSlice";

const handlePending = state => {
  state.error = null;
  state.loading = true;
}

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.error.message;
}

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending,handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        // const index = state.items.findIndex(
        //   (task) => task.id === action.payload.id
        // );
        // state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    
  }
);
export const contactsReducer = contactsSlice.reducer;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;