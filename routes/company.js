const express = require("express");
const router = express.Router();

// const DELAY = 1000;

router.get("/companys", (req, res) => {
  const comp = req.app.db.get("company");

  setTimeout(() => {
    res.send(comp);
  });
});

router.get("/company", (req, res) => {
  const company = req.app.db
    .get("company")
    .find({ companyId: req.query.companyId })
    .value();

  setTimeout(() => {
    res.send(company);
  });
});

module.exports = router;



