import express from "express"
import swaggerJsdoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"
import { swaggerDef } from "../../docs/swaggerDef"

export const docsRoute = express.Router()

const specs = swaggerJsdoc({
  swaggerDef,
  apis: ["src/docs/*.yml", "src/routes/v1/*.js"],
})

swaggerJsdoc.use("/", swaggerUi.serve)
swaggerJsdoc.get(
  "/",
  swaggerUi.setup(specs, {
    explorer: true,
  })
)
