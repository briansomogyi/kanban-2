import { defineStore } from "pinia"

export const useKanban = defineStore("kanban", {
  state: () => {
    return {
      lists: []
    }
  },
  actions: {
    addNewList(columnName) {
      this.lists.push({ name: columnName, tasks: [] })
    },
    deleteList(id) {
      this.lists.splice(id, 1)
    }
  }
})
