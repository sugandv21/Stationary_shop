import calcImg from "../assets/images/scientific_calculator.jpg";
import scaleImg from "../assets/images/set_square.jpg";
import notebookImg from "../assets/images/notebookset.jpg";

export const featuredProducts = [
  {id: 104,
      name: "Scientific Calculator",
      price: 50,
      bulkOffer: "Buy 3 or more @ Rs. 101.20",
      img: calcImg,
      rating: 4,
      title: " Durable and Ergonomic Pencil",
      description: " Strong and durable pencil for everyday school use. ",
      features: [" Durable build", "Easy to reload", "Compact design"],
      reviews: [],
  },
  {
    id: 105,
    name: "Set Square",
    price: 1200,
    bulkOffer: "Buy 2 or more @ Rs. 1150 each",
    img: scaleImg,
    title: "Advanced Scientific Calculator",
    description: "Professional-grade scientific calculator with advanced features.",
    features: ["High precision", "Durable build", "Easy to use"],
    reviews: [],
    rating: 4,
  },
  {
    id: 106,
    name: "Notebook",
    price: 80,
    bulkOffer: "Buy 5 or more @ Rs. 70 each",
    img: notebookImg,
    rating: 5,
  },
];
