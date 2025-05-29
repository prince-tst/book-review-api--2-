const Review = require("../models/reviewModel");

exports.createReview = async (req, res) => {
  try {
    const existing = await Review.findOne({
      user: req.user.id,
      book: req.params.id,
    });
    if (existing) return res.status(400).json({ error: "Review already exists" });

    const review = await Review.create({
      user: req.user.id,
      book: req.params.id,
      rating: req.body.rating,
      comment: req.body.comment,
    });
    res.status(201).json(review);
  } catch {
    res.status(400).json({ error: "Invalid review data" });
  }
};

exports.updateReview = async (req, res) => {
  const review = await Review.findById(req.params.id);
  if (!review || review.user.toString() !== req.user.id)
    return res.status(403).json({ error: "Not authorized" });

  review.rating = req.body.rating;
  review.comment = req.body.comment;
  await review.save();
  res.json(review);
};

exports.deleteReview = async (req, res) => {
  const review = await Review.findById(req.params.id);
  if (!review || review.user.toString() !== req.user.id)
    return res.status(403).json({ error: "Not authorized" });

  await review.deleteOne();
  res.json({ message: "Review deleted" });
};
