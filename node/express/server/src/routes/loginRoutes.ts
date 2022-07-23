import { Router, Request, Response, NextFunction } from "express";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function auth(req: RequestWithBody, res: Response, next: NextFunction): void {
  if (req.session && req.session.signedIn) next();
  res.status(403).send("unauthorized");
}

const router = Router();

router.get("/login", (req: Request, res: Response): void => {
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

router.post("/login", (req: RequestWithBody, res: Response): void => {
  const { email, password } = req.body;
  if (
    email &&
    password &&
    password === "hound" &&
    email === "pookie@hounds.com"
  ) {
    req.session = { signedIn: true };
    res.status(200).redirect("/");
  } else res.status(422).send("Invalid email or password");
});

router.get("/", (req: RequestWithBody, res: Response): void => {
  if (req.session && req.session.signedIn) {
    res.send(`
    <div>
      <div>You are logged In</div>
      <a href="/logout">Logout</a>
    </div>
`);
  } else {
    res.send(`
    <div>
      <div>You are not logged In</div>
      <a href="/login">Login</a>
    </div>
`);
  }
});

router.get("/logout", (req: RequestWithBody, res: Response): void => {
  req.session = undefined;
  res.redirect("/");
});

router.get("/protected", auth, (req: RequestWithBody, res: Response): void => {
  res.status(200).send(`
  <div>
  Welcome to Protected route,<br />
  logged in user!
  </div>
  `);
});

export { router };
