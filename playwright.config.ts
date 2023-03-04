import { PlaywrightTestConfig, devices } from '@playwright/test'
import path from 'path'

const PORT = process.env.PORT || 3000

const baseUrl = `http://localhost:${PORT}`

const config: PlaywrightTestConfig = {
  testDir: path.join(__dirname, 'tests'),
  fullyParallel: true,
  webServer: {
    command: 'npm run dev',
    url: baseUrl,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: baseUrl,
  },
  projects: [
    {
      name: 'Desktop',
      use: devices['Desktop Chrome'],
    },
    {
      name: 'Android',
      use: devices['Pixel 5'],
    },
    {
      name: 'iPhone',
      use: devices['iPhone 13 Pro'],
    }
  ],
}
export default config
