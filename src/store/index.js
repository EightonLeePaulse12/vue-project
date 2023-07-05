import { createStore } from "vuex";

const data =
  "https://eightonleepaulse12.github.io/vue-eomp-data/database/index.json";

export default createStore({
  state: {
    skills: null,
    tools: null,
    testimonials: null,
    projects: null,
    education: null,
  },
  getters: {},
  mutations: {
    setSkills(state, skills) {
      state.skills = skills;
      console.log(skills);
    },
    setTools(state, tools) {
      state.tools = tools;
      console.log(tools);
    },
    setTestimonials(state, testimonials) {
      state.testimonials = testimonials;
      console.log(testimonials);
    },
    setProjects(state, projects) {
      state.projects = projects;
      console.log(projects);
    },
    setEducation(state, education) {
      state.education = education;
      console.log(education);
    },
  },
  actions: {
    async displaySkills(context) {
      try {
        let results = await fetch(data);
        console.log(results);
        let database = await results.json();
        let skills = await database.skills;
        if (skills) {
          context.commit("setSkills", skills);
          console.log(skills);
        } else {
          console.log("YOUR FETCH FOR SKILLS HAS FAILED");
        }
        console.log(database);
      } catch (e) {
        console.log(e, "THIS IS YOUR ERROR");
      }
    },
    async displayTools(context) {
      try {
        let results = await fetch(data);
        let database = await results.json();
        let tools = database.tools;
        if (tools) {
          context.commit("setTools", tools);
        } else {
          console.log("YOUR FETCH FOR TOOLS HAS FAILED");
        }
      } catch (e) {
        console.log(e, "IS YOUR ERROR");
      }
    },
    async displayTestimonials(context) {
      try {
        let results = await fetch(data);
        let database = await results.json();
        let testimonials = database.testimonials;
        if (testimonials) {
          context.commit("setTestimonials", testimonials);
        } else {
          console.log("YOUR FETCH FOR TESTIMONIALS HAS FAILED");
        }
      } catch (e) {
        console.log(e, "IS YOUR ERROR");
      }
    },
    async displayProjects(context) {
      try {
        let results = await fetch(data);
        let database = await results.json();
        let projects = database.projects;
        if (projects) {
          context.commit("setProjects", projects);
        } else {
          console.log("YOUR FETCH FOR PROJECTS HAS FAILED");
        }
      } catch (e) {
        console.log(e, "IS YOUR ERROR");
      }
    },
    async displayEducation(context) {
      try {
        let results = await fetch(data);
        let database = await results.json();
        let education = database.education;
        console.log(database);
        if (education) {
          context.commit("setEducation", education);
        } else {
          console.log("YOUR FETCH FOR EDUCATION HAS FAILED");
        }
      } catch (e) {
        console.log(e, "IS YOUR ERROR");
      }
    },
  },
  modules: {},
});
