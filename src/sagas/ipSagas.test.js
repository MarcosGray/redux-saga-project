import ipSagas from './ipSagas'
import { call, put } from 'redux-saga/effects'
import sagaHelper from 'redux-saga-testing'
import { loadDataSuccess } from '../actions';

describe('shoud test ipSagas', () => {
    const axiosMock = {
        get: jest.fn()
    }
    const it = sagaHelper(ipSagas(axiosMock))
    it('should call api get', result => {
        expect(result).toEqual(call(axiosMock.get, 'http://httpbin.org/ip'))
        return {
            data: {
                origin: 'Ip retornado'
            }
        }
    })
    it('should put loadDataSuccess', result => {
        expect(result).toEqual(put(loadDataSuccess('Ip retornado')))
    })
})