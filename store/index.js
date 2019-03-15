import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = () => new Vuex.Store({
    state: {
      isLogined: false,
      token: "",
        userInfo: {
            name: ""
        },
        loginBoxVisible: false
    },
    mutations: {

      saveToken(state, data) {
        state.token = data;
        window.localStorage.setItem("Token", data);
      },
        changeLoginState (state, isLogined) {
            state.isLogined = isLogined;
        },
        changeLoginBoxVisible (state, visible) {
            state.loginBoxVisible = visible;
        },
        updateUserInfo (state, userInfo) {
            state.userInfo = userInfo;
        }
    },
    actions: {
        initUser ({ state, commit }) {
            const user = JSON.parse(localStorage.getItem("userInfo"));
            if (user) {
                state.userInfo = user;
                commit("changeLoginState", true);
            }
        },
        weiboLogin () {

        },
        qqLogin () {

        }
    }
});

export default store;
