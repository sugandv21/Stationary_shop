import calcImg from "../assets/images/scientific_calculator.jpg";
import scaleImg from "../assets/images/set_square.jpg";
import notebookImg from "../assets/images/notebookset.jpg";

export const featuredProducts = [
  {
    id: 104,
    name: "Scientific Calculator",
    price: 50,
    bulkOffer: "Buy 3 or more @ Rs. 101.20",
    img: calcImg,
    rating: 4,
    title: "Advanced Scientific Calculator for Students",
    description: `This calculator supports algebraic, trigonometric, statistical, and complex calculations. Ideal for high school, college, and professional use.`,
    features: [
      "Supports fractions, exponents, and logarithms",
      "High-contrast display for easy reading",
      "Lightweight and portable design",
      "Battery-powered with auto power-off",
    ],
    reviews: [
      {
        id: 1,
        title: "Student Review",
        rating: 5,
        comment: "Very useful for math and science classes. Functions are easy to access.",
      },
      {
        id: 2,
        title: "Professional Review",
        rating: 4,
        comment: "Accurate and reliable for quick calculations. Compact and durable.",
      },
    ],
  },
  {
    id: 105,
    name: "Set Square",
    price: 1200,
    bulkOffer: "Buy 2 or more @ Rs. 1150 each",
    img: scaleImg,
    rating: 4,
    title: "Precision Set Square for Drawing and Drafting",
    description: `A high-quality set square perfect for students, engineers, and designers. Ensures precise measurements and angles.`,
    features: [
      "Made from durable acrylic material",
      "Clear markings for accurate measurements",
      "Lightweight and portable",
      "Suitable for drawing, drafting, and geometry work",
    ],
    reviews: [
      {
        id: 1,
        title: "Student Review",
        rating: 5,
        comment: "Helps me draw perfect angles in my projects. Very clear markings.",
      },
      {
        id: 2,
        title: "Designer Review",
        rating: 4,
        comment: "Good quality and accurate. Slightly heavier than expected but very durable.",
      },
    ],
  },
  {
    id: 106,
    name: "Notebook",
    price: 80,
    bulkOffer: "Buy 5 or more @ Rs. 70 each",
    img: notebookImg,
    rating: 4,
    title: "Premium Notebook for Study and Work",
    description: `This notebook is perfect for students and professionals. Features high-quality paper and a sturdy cover for long-lasting use.`,
    features: [
      "Durable hardcover for protection",
      "High-quality smooth paper",
      "Ideal for notes, sketches, and journaling",
      "Compact and lightweight for portability",
    ],
    reviews: [
      {
        id: 1,
        title: "Student Review",
        rating: 5,
        comment: "Paper quality is great. Perfect for taking notes in class.",
      },
      {
        id: 2,
        title: "Office Review",
        rating: 4,
        comment: "Nice and sturdy. Pages don't tear easily and good for everyday use.",
      },
    ],
  },
];
