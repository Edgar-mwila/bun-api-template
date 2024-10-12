import configureOpenAPI from "../configure-open-api";
import createApp from "./libs/create-app";
import authRouter from "./routes/auth";
const app = createApp();

configureOpenAPI(app);

const routes = [
    //Routes go here
    authRouter
] as const;

routes.forEach((route) => {
  app.route("/", route);
});

export type AppType = typeof routes[number];

export default app;