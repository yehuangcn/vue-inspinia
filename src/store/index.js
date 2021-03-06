import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
import { errors } from './errors'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const state = {
    token: '',
    authenticated: false,
    accountInfo: {},
    errors: errors
};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    strict: debug,
    plugins: debug ? [createLogger()] : []
})
