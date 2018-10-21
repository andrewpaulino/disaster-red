module.exports = {
    db: {
        name: "db",
        connector: "memory"
      },
        disaster-red: {
            host: "mLab",
            port: 35233,
            url:process.env.DB_URL,
            database: "disaster-red",
            password: process.env.password,
            name: "disaster-red",
            user: process.env.user,
            connector: "mongodb"
        }
}