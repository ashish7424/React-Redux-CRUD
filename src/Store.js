import { createStore } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import rootReducer from "./reducer/rootreducer";
import storage from "redux-persist/lib/storage";


const persistconfig = {
    key: "root",
    storage,
}
const persist = persistReducer(persistconfig, rootReducer)
const store = createStore(persist)

export default store;