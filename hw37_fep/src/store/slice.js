import { createSlice } from '@reduxjs/toolkit'

const initialListState = {
    value: []
}

export const listSlice = createSlice({
    name: 'list',
    initialState: initialListState,
    reducers: {
        SET_LIST: (state, action) => {
            state.value = action.payload
        },
        ADD_ENTRY: (state, action) => {
            state.value = action.payload
        },
        DELETE_ENTRY: (state, action) => {
            state.value = action.payload
        },
        UPDATE_ENTRY: (state, action) => {
            state.value = action.payload
        },
    }
})

export const { SET_LIST, ADD_ENTRY, DELETE_ENTRY, UPDATE_ENTRY } = listSlice.actions

export default listSlice.reducer