import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSaga'
import { loadState, saveState } from './modules/localStorage'

const sagaMonitor =
  process.env.NODE_ENV === 'development' && console.tron.createSagaMonitor()

const sagaMiddleware = createSagaMiddleware({
  sagaMonitor,
})

const enhancer =
  process.env.NODE_ENV === 'development'
    ? compose(console.tron.createEnhancer(), applyMiddleware(sagaMiddleware))
    : applyMiddleware(sagaMiddleware)

const persistedState = loadState()
const store = createStore(rootReducer, persistedState, enhancer)

sagaMiddleware.run(rootSaga)

store.subscribe(() => {
  saveState({ cart: store.getState().cart })
})

export default store
