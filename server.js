// backend/server.js
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import { nanoid } from "nanoid";

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());

// setup DB
const adapter = new JSONFile("db.json");
const db = new Low(adapter, { users: [], rails: [] });
await db.read();

// login route
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = db.data.users.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    res.json({ success: true, userId: user.id });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

// get rail info by id
app.get("/rail/:id", async (req, res) => {
  const rail = db.data.rails.find((r) => r.id === req.params.id);
  if (rail) {
    res.json(rail);
  } else {
    res.status(404).json({ message: "Rail not found" });
  }
});

// add new rail (for testing)
app.post("/rail", async (req, res) => {
  const rail = { id: nanoid(), ...req.body };
  db.data.rails.push(rail);
  await db.write();
  res.json(rail);
});

app.listen(port, () => {
  console.log(`✅ API listening on http://localhost:${port}`);
});
