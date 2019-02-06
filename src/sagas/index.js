import { takeLatest } from 'redux-saga/effects' 
import getIp from './ipSagas'
import getUA from './uaSagas'

function *index(){
    yield takeLatest('LOAD_DATA_REQUEST', getIp)
    yield takeLatest('LOAD_DATA_UA_REQUEST', getUA)
}

  export default index