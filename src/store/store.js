import { createStore } from "vuex";
import authModule from "./modules/auth/authModule"


const store = createStore({
    modules: {
        auth:authModule
    },
  });
  
export default store;