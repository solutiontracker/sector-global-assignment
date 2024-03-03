import { all, fork } from 'redux-saga/effects'

import { CompanyWatcherSaga } from '@/store/sagas/Company.Saga'

export function* RootSaga() {
    yield all([fork(CompanyWatcherSaga)])
}

export default RootSaga