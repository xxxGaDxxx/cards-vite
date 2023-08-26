import { defineConfig } from 'cypress'

export default defineConfig({
  experimentalStudio: true,

  env: {
    API_BASE_URL: 'http://localhost:5173',
  },

  component: {
    supportFile: false,
  },

  e2e: {
    baseUrl: 'http://localhost:5173/',
  },
})
