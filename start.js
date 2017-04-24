const serve = require("serve")

const server = serve("./app", {
  port: process.env.PORT || 8000,
  ignore: ['node_modules']
})