import { createMemoryHistory, createRouter } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'

// Define routes
const routes = [
  { 
    path: '/',
    name: 'Home',
    component: HomeView 
  },
  {
    path: '/detail',
    component: DetailView
  }
];

// Create router instance with memory history
const router = createRouter({
  history: createMemoryHistory(), // Use createMemoryHistory for non-browser environments
  routes,
});

export default router;