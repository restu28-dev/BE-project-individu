module.exports = (app) => {

    const biodata = require("../controllers/biodata.controller")
    let router = require("express").Router() 

    router.post("/create", biodata.create)
    router.get("/readall", biodata.readAll)
    router.get("/readid/:id", biodata.readById)
    router.put("/update/:id", biodata.update)
    router.delete("/delete/:id", biodata.delete)

    app.use("/api/biodata" , router)
  }