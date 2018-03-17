module.exports = {
  apps : [{
    name   : "Tg_bot_House",
    script : "./src/app.js",
    watch: true,
    // instances  : 2,
    // exec_mode  : "cluster",
    env: {
      "NODE_ENV": "development",
    },
    env_production : {
       "NODE_ENV": "production"
    }
  }]
}
