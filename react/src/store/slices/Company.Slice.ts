import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Activity } from '@/models/Activity'

import type { RootState } from '@/store/Index'

export interface EventState {
    activities: Activity[],
    ids: number[],
    collapsed: number[],
}

const initialState: EventState = {
    activities: [],
    ids: [],
    collapsed: [],
}

// Slice
export const CompanySlice = createSlice({
    name: 'company',
    initialState,
    reducers: {
        update(state, action: PayloadAction<Activity[]>) {
            state.activities = action.payload
        },
        ids(state, action: PayloadAction<number[]>) {
            state.ids = action.payload
        },
        collapsed(state, action: PayloadAction<number[]>) {
            state.collapsed = action.payload
        }
    },
})

// Actions
export const CompanyActions = {
    dispatchActivityAction: createAction(`${CompanySlice.name}/dispatchActivityAction`),
    dispatchCreateActivityAction: createAction(`${CompanySlice.name}/dispatchCreateActivityAction`, (payload: number[]) => ({
        payload: payload,
    })),
    dispatchIdsAction: createAction(`${CompanySlice.name}/dispatchIdsAction`, (payload: { ids: number[] }) => ({
        payload: payload,
    })),
    dispatchCollapsedAction: createAction(`${CompanySlice.name}/dispatchCollapsedAction`, (payload: number[]) => ({
        payload: payload,
    })),
    update: CompanySlice.actions.update,
    ids: CompanySlice.actions.ids,
    collapsed: CompanySlice.actions.collapsed,
}

// Selectors
export const SelectActivity = (state: RootState) => state.company.activities

export const SelectIDS = (state: RootState) => state.company.ids

export const SelectCollapsedIDS = (state: RootState) => state.company.collapsed

// Reducer
export default CompanySlice.reducer