import { create } from "zustand"
import axios from "axios"

const API_URL = "http://localhost:5001/api/projects"

const useProjectStore = create((set) => ({
  projects: [],
  fetchProjects: async () => {
    const res = await axios.get(API_URL)
    set({ projects: res.data })
  },
  createProject: async (newProject) => {
    const res = await axios.post(API_URL, newProject)
    set((state) => ({
      projects: [res.data, ...state.projects],
    }))
  },
  updateProject: async (projectID, projectData) => {
    const res = await axios.put(`${API_URL}/${projectID}`, projectData)
    set((state) => ({
      projects: state.projects.map((project) => {
        project._id === projectID ? res.data : project
      }),
    }))
  },
  deleteProject: async (projectID) => {
    const res = await axios.delete(`${API_URL}/${projectID}`)
    set((state) => ({
      projects: state.projects.filter((project) => {
        project._id != projectID
      }),
    }))
  },
}))

export default useProjectStore
