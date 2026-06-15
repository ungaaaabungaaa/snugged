import { defineConfig, loadEnv } from "@medusajs/framework/utils";

loadEnv(process.env.NODE_ENV || "development", process.cwd());

const storeCors = process.env.STORE_CORS || "http://localhost:3000";
const adminCors = process.env.ADMIN_CORS || "http://localhost:9000,http://localhost:7001";
const authCors = process.env.AUTH_CORS || "http://localhost:3000,http://localhost:9000";

export default defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    redisUrl: process.env.REDIS_URL,
    http: {
      storeCors,
      adminCors,
      authCors,
      jwtSecret: process.env.JWT_SECRET || "dev-jwt-secret",
      cookieSecret: process.env.COOKIE_SECRET || "dev-cookie-secret"
    }
  },
  modules: [
    {
      resolve: "./src/modules/wishlist"
    }
  ],
  plugins: []
});
