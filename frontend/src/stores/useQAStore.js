import { create } from "zustand"
import axios from "axios"

const API_URL = "http://localhost:5001/api/qa"

const useQAStore = create((set) => ({
  qas: [],
  fetchQAs: async (projectID) => {
    const res = await axios.get(API_URL, {
      params: projectID ? { projectID } : {},
    })
    set({ qas: res.data })
  },
  createQA: async (newQA) => {
    const res = await axios.post(API_URL, newQA)
    set((state) => ({
      qas: [res.data, ...state.qas],
    }))
  },
  updateQA: async (qaID, qaData) => {
    const res = await axios.put(`${API_URL}/${qaID}`, qaData)
    set((state) => ({
      qas: state.qas.map((qa) => {
        qa._id === qaID ? res.data : qa
      }),
    }))
  },
  deleteQA: async (qaID) => {
    const res = await axios.delete(`${API_URL}/${qaID}`)
    set((state) => ({
      qas: state.qas.filter((qa) => {
        qa._id != qaID
      }),
    }))
  },
}))

export default useQAStore
