import { createStore } from 'redux'
import rootReducer from '../Redux/reducer'
let store = createStore(rootReducer)
export default store