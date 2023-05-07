import React from 'react'
import { Provider } from 'react-redux'
import { store as storeSetup } from '../../../src/app/store'

export function providersWrapper(
  ui: React.ReactElement,
  store = storeSetup,) {
  return <Provider store={store}>{ui}</Provider>
}
