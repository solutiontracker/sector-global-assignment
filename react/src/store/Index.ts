import createSagaMiddleware from '@redux-saga/core'
import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import CompanySlice from '@/store/slices/Company.Slice'
import ResponseSlice from '@/store/slices/Response.slice'
import ErrorSlice from '@/store/slices/Error.slice'
import { RootSaga } from '@/store/sagas/Root'

const makeStore = () => {

    const sagaMiddleware = createSagaMiddleware()

    const store = configureStore({
        reducer: {
            company: CompanySlice,
            response: ResponseSlice,
            error: ErrorSlice
        },
        devTools: true,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({ thunk: false })
                .concat(sagaMiddleware)
                .concat(logger as any),
    })

    sagaMiddleware.run(RootSaga)

    return store
}

export const store = makeStore()

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>
