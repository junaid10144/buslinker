import express from "express"
// import authRoute from "./auth.route"
// import userRoute from "./user.route"
import { cityRoute } from "./city"
import { tripRoute } from "./trip"
// import { docsRoute } from "./docs"
import { env } from "../../config"

const router = express.Router()

const defaultRoutes = [
  // {
  //   path: "/auth",
  //   route: authRoute,
  // },
  // {
  //   path: "/users",
  //   route: userRoute,
  // },
  {
    path: "/city",
    route: cityRoute,
  },
  {
    path: "/trip",
    route: tripRoute,
  },
]

const devRoutes = [
  // routes available only in development mode
  // {
  //   path: "/docs",
  //   route: docsRoute,
  // },
]

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route)
})

/* istanbul ignore next */
if (env.env === "development") {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route)
  })
}

export { router }
