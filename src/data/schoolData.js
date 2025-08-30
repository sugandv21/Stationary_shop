import pencilImg from "../assets/images/color_pencil.jpg";
import calcImg from "../assets/images/dairy_pen.jpg";
import notebookImg from "../assets/images/notepad.jpg";

export const backToSchoolProducts = [
  {id: 101,
      name: "Pencil",
      price: 50,
      bulkOffer: "Buy 3 or more @ Rs. 101.20",
      img: pencilImg,
      rating: 4,
      title: " Durable and Ergonomic Pencil",
      description: " Strong and durable pencil for everyday school use. ",
      features: [" Durable build", "Easy to reload", "Compact design"],
      reviews: [],
  },
  {
    id: 102,
    name: "Scientific Calculator",
    price: 1200,
    bulkOffer: "Buy 2 or more @ Rs. 1150 each",
    img: calcImg,
    title: "Advanced Scientific Calculator",
    description: "Professional-grade scientific calculator with advanced features.",
    features: ["High precision", "Durable build", "Easy to use"],
    reviews: [],
    rating: 4,
  },
  {
    id: 103,
    name: "Notebook",
    price: 80,
    bulkOffer: "Buy 5 or more @ Rs. 70 each",
    img: notebookImg,
    rating: 5,
  },
];
