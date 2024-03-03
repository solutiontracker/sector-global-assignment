import { SagaIterator } from '@redux-saga/core'

import { call, put, takeEvery } from 'redux-saga/effects'

import { getActivityApi, submitActivityApi } from '@/store/api/Company.Api';

import { CompanyActions } from '@/store/slices/Company.Slice'

import { ResponseActions } from '@/store/slices/Response.slice'

import { ErrorActions } from '@/store/slices/Error.slice'

import { GeneralResponse } from '@/models/GeneralResponse'

// Worker Sagas handlers
function* callActivityApi({
    payload,
}: {
    type: any
    payload: any
}): SagaIterator {
    const response: GeneralResponse = yield call(getActivityApi, payload)
    yield put(CompanyActions.update(response.data!))
    yield put(ResponseActions.response(response))
}

function* callCreateActivityApi({
    payload,
}: {
    type: any
    payload: any
}): SagaIterator {
    const response: GeneralResponse = yield call(submitActivityApi, payload);
    if (response.status !== undefined && response.status !== 200 && response.status !== 201) {
        yield put(ErrorActions.errors(response?.data?.errors))
    } else {
        yield put(ResponseActions.response({}))
    }
}


function* callIds({
    payload,
}: {
    type: any
    payload: any
}): SagaIterator {
    yield put(CompanyActions.ids(payload.ids))
}

function* callCollapsedIds({
    payload,
}: {
    type: any
    payload: any
}): SagaIterator {
    yield put(CompanyActions.collapsed(payload))
}

// Watcher Saga
export function* CompanyWatcherSaga(): SagaIterator {
    yield takeEvery(CompanyActions.dispatchActivityAction.type, callActivityApi)
    yield takeEvery(CompanyActions.dispatchCreateActivityAction.type, callCreateActivityApi)
    yield takeEvery(CompanyActions.dispatchIdsAction.type, callIds)
    yield takeEvery(CompanyActions.dispatchCollapsedAction.type, callCollapsedIds)
}

export default CompanyWatcherSaga