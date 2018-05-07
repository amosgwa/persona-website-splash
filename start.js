const serve = require("serve")

const server = serve("./app", {
  port: process.env.PORT || 80,
  ignore: ['node_modules']
})