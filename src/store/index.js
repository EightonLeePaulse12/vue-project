import { createStore } from 'vuex'

const data = 'https://eightonleepaulse12.github.io/vue-eomp-data/database/index.json'

export default createStore({
  state: {
    data:null
  },
  getters: {
  },
  mutations: {
    setData(state,data){
      state.data = database
    }
    // setSkills(state, skills){
    //   state.skills = myData.skills
    // },
    // setTools(){

    // }
  },
  actions: {
    async displayData(context){
      try{
        let results = await fetch(data)
        let database = await results.json()
        console.log(database + 'reached')
        console.log(results.json())
        if(database){
          context.commit("setData",data)
        } else{
          console.log('Your fetch has failed')
        }
      } catch(e){
        console.log("An error has occured", e)
      }
    }
  },
  modules: {
  }
})
