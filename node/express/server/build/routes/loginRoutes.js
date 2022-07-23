"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
function auth(req, res, next) {
    if (req.session && req.session.signedIn)
        next();
    res.status(403).send("unauthorized");
}
const router = (0, express_1.Router)();
exports.router = router;
router.get("/login", (req, res) => {
    res.send(`
      <form method="POST">
        <div>
            <label>Email: </label>
            <input name="email" />
        </div>
        <div>
            <label>Password: </label>
            <input name="password" type="password" />
        </div>
        <button>Submit</button>
      </form>
      `);
});
router.post("/login", (req, res) => {
    const { email, password } = req.body;
    if (email &&
        password &&
        password === "hound" &&
        email === "pookie@hounds.com") {
        req.session = { signedIn: true };
        res.status(200).redirect("/");
    }
    else
        res.status(422).send("Invalid email or password");
});
router.get("/", (req, res) => {
    if (req.session && req.session.signedIn) {
        res.send(`
    <div>
      <div>You are logged In</div>
      <a href="/logout">Logout</a>
    </div>
`);
    }
    else {
        res.send(`
    <div>
      <div>You are not logged In</div>
      <a href="/login">Login</a>
    </div>
`);
    }
});
router.get("/logout", (req, res) => {
    req.session = undefined;
    res.redirect("/");
});
router.get("/protected", auth, (req, res) => {
    res.status(200).send(`
  <div>
  Welcome to Protected route,<br />
  logged in user!
  </div>
  `);
});
