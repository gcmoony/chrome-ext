import { create } from "zustand"
import axios from "axios"

const API_URL = "http://localhost:5001/api/links"

const useLinkStore = create((set) => ({
  links: [],
  fetchLinks: async () => {
    const res = await axios.get(API_URL)
    set({ links: res.data })
  },
  createLink: async (newLink) => {
    const res = await axios.post(API_URL, newLink)
    set((state) => ({
      links: [res.data, ...state.links],
    }))
  },
  updateLink: async (linkID, linkData) => {
    const res = await axios.put(`${API_URL}/${linkID}`, linkData)
    set((state) => ({
      links: state.links.map((link) => {
        link._id === linkID ? res.data : link
      }),
    }))
  },
  deleteLink: async (linkID) => {
    const res = await axios.delete(`${API_URL}/${linkID}`)
    set((state) => ({
      links: state.links.filter((link) => {
        link._id != linkID
      }),
    }))
  },
}))

export default useLinkStore
