import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetails from '../views/jobs/JobDetails.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/jobs/:id',
    name: 'jobDetails',
    component: JobDetails,
    props: true
  },

  // redirect
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },

  // catch all 404
  {
    path: '/:catchAll(.*)',
    namee: 'NotFound',
    component: NotFound
  }
]

// set up router instance, creates our router for the app
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
