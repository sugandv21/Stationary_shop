import noteImg from "../assets/images/notebookset.jpg";
import pinkStationery from "../assets/images/exampad.jpg";
import redSet from "../assets/images/diary.jpg";
import redSet2 from "../assets/images/diary.jpg";
import painting from "../assets/images/drawing-material.jpg";
import scissors from "../assets/images/scissors.jpg";

export const trendingProducts = [
  {
    id: 701,
    name: "Notebook Set",
    price: 120,
    img: noteImg,
    alt: "Notebook Set",
    title: "Premium Notebook Set",
    description: "Set of high-quality notebooks for school and office use.",
    features: ["Durable cover", "Smooth pages", "Compact design"],
    reviews: [
      {
        id: 1,
        title: "Student Review",
        rating: 5,
        comment: "Excellent quality notebooks, very smooth pages and durable cover.",
      },
      {
        id: 2,
        title: "Teacher Review",
        rating: 4,
        comment: "Great for classroom use. Pages are thick and long-lasting.",
      },
    ],
    rating: 4,
    bulkOffer: "Buy 3 or more @ Rs. 110 each",
  },
  {
    id: 702,
    name: "Pink Stationery",
    price: 90,
    img: pinkStationery,
    alt: "Pink Stationery",
    title: "Complete Pink Stationery Set",
    description: "All-in-one stationery kit in pink color, perfect for students.",
    features: ["Eraser included", "Colorful pens", "Portable case"],
    reviews: [
      {
        id: 1,
        title: "Student Review",
        rating: 5,
        comment: "Lovely pink set with everything I need for school.",
      },
    ],
    rating: 5,
    bulkOffer: "Buy 2 or more @ Rs. 85 each",
  },
  {
    id: 703,
    name: "Red Set 1",
    price: 150,
    img: redSet,
    alt: "Red Set 1",
    title: "Red Stationery Set",
    description: "Complete red-themed stationery kit for creative students.",
    features: ["Durable materials", "Variety of tools", "Compact design"],
    reviews: [
      {
        id: 1,
        title: "Student Review",
        rating: 4,
        comment: "Good quality stationery with all necessary tools included.",
      },
    ],
    rating: 4,
    bulkOffer: "Buy 2 or more @ Rs. 140 each",
  },
  {
    id: 704,
    name: "Red Set 2",
    price: 150,
    img: redSet2,
    alt: "Red Set 2",
    title: "Advanced Red Stationery Set",
    description: "Enhanced red stationery set with extra tools for school.",
    features: ["High-quality pens", "Durable case", "Variety of items"],
    reviews: [
      {
        id: 1,
        title: "Student Review",
        rating: 5,
        comment: "Nice upgraded set, perfect for advanced projects.",
      },
    ],
    rating: 4,
    bulkOffer: "Buy 2 or more @ Rs. 140 each",
  },
  {
    id: 705,
    name: "Painting Tools",
    price: 200,
    img: painting,
    alt: "Painting Tools",
    title: "Complete Painting Kit",
    description: "A professional painting kit with brushes, colors, and palette.",
    features: ["High-quality brushes", "Vibrant colors", "Portable case"],
    reviews: [
      {
        id: 1,
        title: "Artist Review",
        rating: 5,
        comment: "Great painting set. Colors are vibrant and brushes are durable.",
      },
    ],
    rating: 5,
    bulkOffer: "Buy 2 or more @ Rs. 190 each",
  },
  {
    id: 706,
    name: "Scissors Set",
    price: 75,
    img: scissors,
    alt: "Scissors Set",
    title: "Durable Scissors Set",
    description: "Set of sharp and durable scissors for school and craft use.",
    features: ["Ergonomic handle", "Sharp blades", "Safe design"],
    reviews: [
      {
        id: 1,
        title: "Parent Review",
        rating: 4,
        comment: "Scissors are sharp and safe for kids. Ergonomic handles are nice.",
      },
    ],
    rating: 4,
    bulkOffer: "Buy 3 or more @ Rs. 70 each",
  },
];
