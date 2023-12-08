const routes = require("express").Router()

routes.use("/api", require("../controllers/CityController") )
routes.use("/api/user", require("../controllers/UserController"))
routes.use("/api/user/auth", require("../controllers/UserAuthController"))
routes.use("/api/user/profile", require("../controllers/UserProfileController"))
routes.use("/api/admin", require("../controllers/AdminLoginController"))
routes.use("/api/category", require("../controllers/CategoryController"))

module.exports = routes