const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "get standards" });
});

router.post("/", (req, res) => {
  res.json({ message: "set standard" });
});

router.put("/:id", (req, res) => {
  res.json({ message: `update standard ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.json({ message: `delete standard ${req.params.id}` });
});

module.exports = router;
