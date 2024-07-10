// src/store/modules/auth.ts
import { Commit } from 'vuex';

interface AuthState {
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
};

const state = {
  token: null,
  user: null,
  id: null
};

const mutations = {
  SET_TOKEN(state: { token: any; }, token: any) {
    state.token = token;
    localStorage.setItem('token', token); // Store the token in localStorage
  },
  SET_AUTHENTICATION(state: { authenticated: any; }, isAuthenticated: any) {
    state.authenticated = isAuthenticated;
  },
  SET_USER(state: { user: any }, user: any) {
    state.user = user;
  },
  SET_ID(state: { id: any }, id: any) {
    state.id = id;
  },
  CLEAR_USER_DATA(state: { token: any; user: any; authenticated: any; id: any; }) {
    state.token = null;
    state.user = null;
    state.id = null;
    state.authenticated = false;
  },
};
const actions = {
  setToken({ commit }: { commit: Commit }, token: string | null) {
    commit('SET_TOKEN', token);
  },
  setUser({ commit }: { commit: Commit }, user: string | null) {
    commit('SET_USER', user);
  },
  setId({ commit }: { commit: Commit }, id: string | null) {
    commit('SET_ID', id);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};