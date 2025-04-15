const express = require("express");
const { LOGOUT_LINKS } = require("../constants/navigation");
const logoutController = require("../controllers/logoutController");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("logout.ejs", {
    headTitle: "Shop - Logout",
    path: "/logout",
    activeLinkPath: "/logout",
    menuLinks: LOGOUT_LINKS,
  });
});

router.get("/kill", logoutController.killApplication);

module.exports = router;
