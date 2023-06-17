<template>
  <div class="container">
    <div class="button-group">
      <button class="btn btn-primary" @click="redirect">Redirect</button>
      <button class="btn btn-primary" @click="back">Go Back</button>
      <button class="btn btn-primary" @click="forward">Go Forward</button>
    </div>
    <nav class="mt-3">
      <router-link class="mr-2" to="/">Home</router-link>
      <router-link class="mr-2" :to="{ name: 'About' }">About</router-link>
      <router-link :to="{ name: 'ToDo' }">Kegiatan</router-link>
    </nav>

    <router-view/>
    <header class="mt-3">
      <h1 class="text-white">Shandy Mart</h1>
    </header>

    <div class="new-task-form mt-3">
      <TaskForm/>
    </div>

    <nav class="filter mt-3">
      <button class="btn btn-primary" @click="filter = 'all'">Semua</button>
      <button class="btn btn-primary" @click="filter = 'favs'">Kesukaan</button>
    </nav>
    
    <div class="task-list mt-3" v-if="filter === 'all'">
      <p>Kamu mempunyai {{ taskStore.tasks.length }} Belanjaan</p>
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetails :task="task"/>
      </div>
    </div>
    <div class="task-list mt-3" v-if="filter === 'favs'">
      <p>Kamu mempunyai {{ taskStore.favs.length }} belanja kesukaan</p>
      <div v-for="task in taskStore.favs" :key="task.id">
        <TaskDetails :task="task"/>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import TaskDetails from './components/TaskDetails.vue';
import TaskForm from './components/TaskForm.vue';
import { useTaskStore } from './stores/TaskStore';

export default {
  components: { TaskDetails, TaskForm },
  setup() {
    const taskStore = useTaskStore();
    const filter = ref('all');
    const router = useRouter();

    const redirect = () => {
      router.push({ name: 'Home' });
    };

    const back = () => {
      router.go(-1);
    };

    const forward = () => {
      router.go(1);
    };

    return { taskStore, filter, redirect, back, forward };
  },
}
</script>

<style>
.container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.button-group {
  display: flex;
  justify-content: flex-start;
  margin-left: 10px;
}

.filter {
  display: flex;
  justify-content: center;
}

.task-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.task-list p {
  margin-bottom: 10px;
}
</style>
