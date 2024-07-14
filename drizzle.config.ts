import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/database/schemas",
  out: "./drizzle/migrations",
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.POSTGRES_URL
  },
  verbose: true,
  strict: true,
})