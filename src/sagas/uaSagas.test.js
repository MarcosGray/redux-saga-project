import uaSagas from './uaSagas'
import { call, put } from 'redux-saga/effects'
import sagaHelper from 'redux-saga-testing'
import { loadDataUASuccess } from './../actions'

describe('should test uaSagas', () => {
    const axiosMock = {
        get: jest.fn()
    }
    const it = sagaHelper(uaSagas(axiosMock))
    it('should call api get', result => {
        expect(result).toEqual(call(axiosMock.get, 'http://httpbin.org/user-agent'))
        return {
            data: {
                'user-agent': 'user agent'
            }
        }
    })
    it('should put loadDataUaSuccess', result => {
        expect(result).toEqual(put(loadDataUASuccess('user agent')))
    })
})