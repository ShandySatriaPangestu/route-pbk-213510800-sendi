import { defineStore } from 'pinia'


export const useTaskStore = defineStore('taskStore',{
    state: () => ({
        tasks: [
            
        ]
    }),
    getters: {
        favs(){
            return this.tasks.filter(t => t.isFav)
        },
    },
    actions: {
        addTask(task) {
            this.tasks.push(task)
        },
        deleteTask(id){
            this.tasks = this.tasks.filter(t => {
                return t.id !== id
            })
        },
        toggleFav(id){
            const task = this.tasks.find(t => t.id === id)
            task.isFav = !task.isFav
        }
    }
})