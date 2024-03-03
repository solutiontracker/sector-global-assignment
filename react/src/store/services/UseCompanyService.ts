import { useCallback } from 'react'

import { CompanyActions, SelectActivity, SelectIDS, SelectCollapsedIDS } from '@/store/slices/Company.Slice'

import { Activity } from '@/models/Activity'

import { useAppDispatch, useAppSelector } from '@/store/Hooks'

export type EventServiceOperators = {
    activities: Activity[]
    ids: number[]
    collapsed: number[]
    dispatchActivityAction: () => void
    dispatchCreateActivityAction: (ids: number[]) => void
    dispatchIdsAction: (object: { ids: number[] }) => void
    dispatchCollapsedAction: (ids: number[]) => void
}

/**
 * EventService custom-hooks
 * @see https://reactjs.org/docs/hooks-custom.html
 */
export const UseCompanyService = (): Readonly<EventServiceOperators> => {
    const dispatch = useAppDispatch()

    return {
        activities: useAppSelector(SelectActivity),
        ids: useAppSelector(SelectIDS),
        collapsed: useAppSelector(SelectCollapsedIDS),
        dispatchActivityAction: useCallback(
            () => {
                dispatch(CompanyActions.dispatchActivityAction())
            },
            [dispatch],
        ),
        dispatchCreateActivityAction: useCallback(
            (ids: number[]) => {
                dispatch(CompanyActions.dispatchCreateActivityAction(ids))
            },
            [dispatch],
        ),
        dispatchIdsAction: useCallback(
            (object: { ids: number[] }) => {
                dispatch(CompanyActions.dispatchIdsAction(object))
            },
            [dispatch],
        ),
        dispatchCollapsedAction: useCallback(
            (ids: number[]) => {
                dispatch(CompanyActions.dispatchCollapsedAction(ids))
            },
            [dispatch],
        )
    }
}

export default UseCompanyService