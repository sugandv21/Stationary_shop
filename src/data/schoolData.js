import pencilImg from "../assets/images/color_pencil.jpg";
import calcImg from "../assets/images/dairy_pen.jpg";
import notebookImg from "../assets/images/notepad.jpg";

export const backToSchoolProducts = [
  {
    id: 101,
    name: "Pencil",
    price: 50,
    bulkOffer: "Buy 3 or more @ Rs. 101.20",
    img: pencilImg,
    rating: 4,
    title: "Durable and Ergonomic Pencil",
    description: "Strong and durable pencil for everyday school use.",
    features: ["Durable build", "Comfortable grip", "Compact design"],
    reviews: [
      {
        id: 1,
        title: "Student Review",
        rating: 5,
        comment: "Very comfortable to write with, and lasts long.",
      },
      {
        id: 2,
        title: "Parent Review",
        rating: 4,
        comment: "Good quality pencils for schoolwork.",
      },
    ],
  },
  {
    id: 102,
    name: "Scientific Calculator",
    price: 1200,
    bulkOffer: "Buy 2 or more @ Rs. 1150 each",
    img: calcImg,
    rating: 4,
    title: "Advanced Scientific Calculator",
    description: "Professional-grade scientific calculator with advanced features.",
    features: ["High precision", "Durable build", "Easy to use"],
    reviews: [
      {
        id: 1,
        title: "Student Review",
        rating: 5,
        comment: "Perfect for math and science classes. Very reliable.",
      },
      {
        id: 2,
        title: "Teacher Review",
        rating: 4,
        comment: "Accurate and durable. Great for classroom use.",
      },
    ],
  },
  {
    id: 103,
    name: "Notebook",
    price: 80,
    bulkOffer: "Buy 5 or more @ Rs. 70 each",
    img: notebookImg,
    rating: 5,
    title: "Premium Notebook for Students",
    description: "High-quality notebook ideal for notes, homework, and study.",
    features: ["Durable cover", "Smooth pages", "Portable size"],
    reviews: [
      {
        id: 1,
        title: "Student Review",
        rating: 5,
        comment: "Pages are smooth and the cover is sturdy. Great for school.",
      },
      {
        id: 2,
        title: "Teacher Review",
        rating: 4,
        comment: "Good quality notebooks for classroom and homework use.",
      },
    ],
  },
];
