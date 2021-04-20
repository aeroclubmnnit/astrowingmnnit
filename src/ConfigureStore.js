import { routerMiddleware } from 'connected-react-router'
import { createHashHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import Reducer from './Reducers/index'

const persistConfig = {
    key: 'root',
    storage,
}

export const history = createHashHistory()
const rootReducer = Reducer.rootReducer
const saga = Reducer.saga
const sagaMiddleware = Reducer.sagaMiddleware
const persistedReducer = persistReducer(persistConfig, rootReducer(history))


export default function configureStore() {
    const store = createStore(
        persistedReducer,
        compose(
            applyMiddleware(
                sagaMiddleware,
                routerMiddleware(history),
            ),
            // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    )
    sagaMiddleware.run(saga)
    const persistor = persistStore(store)

    return { store, persistor }
}