const express = require("express");
const {
  createBook,
  getBooks,
  getBookById,
  searchBooks,
} = require("../controllers/bookController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", getBooks);
router.post("/", protect, createBook);
router.get("/search", searchBooks);
router.get("/:id", getBookById);

module.exports = router;
