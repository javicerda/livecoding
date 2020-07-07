import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const baseURL = 'https://us-central1-livecoding-school.cloudfunctions.net/courses'

function emptyCourse() {
  return {
    id: null,
    data: {
      name: '',
      description: '',
      imagen: '',
      example: { }
      }
    }
  }
export default new Vuex.Store({
  state: {
    courses: [],
    currentCourse: emptyCourse(),
    showForm: false,
  },
  mutations: {
    SET_EMPTY_COURSE(state) {
      state.currentCourse.id = null;
      const empty = emptyCourse()
      Object.keys(empty.data).forEach(key => {
        state.currentCourse.data[key] = empty.data[key]
      })
    },
    SET_COURSES(state, data) { state.courses = data },
    DISPLAY_COURSE_FORM(state) { state.showForm = true },
    UPDATE_NAME(state, name) { state.currentCourse.data.name = name},
    UPDATE_DESCRIPTION(state, description) { state.currentCourse.data.description = description},
    UPDATE_IMAGEN(state, imagen) { state.currentCourse.data.imagen = imagen},
    SET_CURRENT_COURSE(state, course){ state.currentCourse = course },
    
  },
  actions: {
    setCourses ({ commit}){
      axios.get(`${baseURL}/courses`)
      .then(response =>{
        commit('SET_EMPTY_COURSE')
        commit('SET_COURSES', response.data)
      })
    },
    postCourse({ dispatch, state }){
      axios.post(`${baseURL}/course` , state.currentCourse.data)
      .then(() =>{
      dispatch('setCourses')
      })
    },
    deleteCourse({ dispatch }, id){
      axios.delete(`${baseURL}/course/${id}`)
      .then(() => {
        dispatch('setCourses')
      })
    },
    setCurrentCourse({ commit }, id){
      axios.get(`${baseURL}/course/${id}`)
      .then((response) => {
        commit('SET_CURRENT_COURSE', response.data)
      })
    },
    updateCourse({ state, dispatch }, id) {
      axios.put(`${baseURL}/course/${id}`, state.currentCourse.data)
      .then(() => {
        dispatch('setCourses')
      })
    },
    updateName ({ commit }, name) { commit('UPDATE_NAME', name)},
    updateDescription ({ commit }, description) { commit('UPDATE_DESCRIPTION', description)},
    updateImagen ({ commit }, imagen) { commit('UPDATE_IMAGEN', imagen)},
    displayCourseForm ({ commit }) { commit('DISPLAY_COURSE_FORM')},
  },
  modules: {
  }
})
