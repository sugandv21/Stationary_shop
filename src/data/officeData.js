import calcImg from "../assets/images/scientific_calculator.jpg";
import staplerImg from "../assets/images/stapler.jpg";
import kitImg from "../assets/images/notebookset.jpg";
import pensImg from "../assets/images/pen_kit.jpg";
import scissorsImg from "../assets/images/scissors.jpg";
import highlighterImg from "../assets/images/banner_img2.jpg";

export const officeProducts = [
  {
    id: 1,
    name: "Scientific Calculator",
    price: 50,
    bulkOffer: "Buy pack of 10 @ Rs. 249",
    img: calcImg,
    rating: 5,
    title: "Advanced Functionality for Students and Professionals",
    description: `This scientific calculator is designed to meet the needs of students, engineers,
      and professionals. Equipped with a high-contrast display, it supports over 200 functions 
      including algebraic, trigonometric, statistical, and complex number calculations. 
      The ergonomic keyboard layout ensures ease of use during exams or fieldwork, and durable construction makes it ideal for daily use. 
      Whether you're solving equations, analyzing data, or exploring functions, this calculator delivers reliable and accurate performance every time`,
    features: [
      "Supports fractions, exponents, logarithms, and trigonometric functions",
      "Multi-line display for reviewing inputs and results",
      "Ideal for high school, college, and professional use",
      "Battery-powered with auto power-off for extended life",
      "Lightweight and compact design for portability",
    ],
    reviews: [
      {
        id: 1,
        title: "Positive Review – Student Perspective",
        rating: 5,
        comment:
          "This calculator has been a lifesaver for my high school math and physics classes. It's easy to use, has all the necessary functions, and the multi-line display makes checking work super simple. Definitely worth it for students!",
      },
      {
        id: 2,
        title: "Positive Review – Professional/Engineer",
        rating: 5,
        comment:
          "Excellent build quality and functionality. I use this for quick field calculations, and it's accurate and responsive. The layout is intuitive, and it handles complex equations with no trouble. Great value for engineers or technicians.",
      },
      {
        id: 3,
        title: "Neutral Review – General Use",
        rating: 4,
        comment:
          "Good calculator overall. It covers all the basic and advanced functions I need, though the user manual could be clearer for beginners. Once you get used to the button layout, it's a solid tool.",
      },
      {
        id: 4,
        title: "Critical Review – Beginner User",
        rating: 3,
        comment:
          "I found the calculator a bit overwhelming at first. It has a lot of functions, but the instructions weren’t very beginner-friendly. It works fine, but I had to look up tutorials online to figure it out.",
      },
    ],
  },
  {
    id: 2,
    name: "Stapler",
    price: 50,
    bulkOffer: "Buy 3 or more @ Rs. 101.20",
    img: staplerImg,
    rating: 4,
    title: "Durable and Ergonomic Stapler",
    description: `Strong and durable stapler for everyday office and school use. It's made from durable materials like glass and plastic, 
    which means it will last a long time. This stapler is made from durable materials like glass and plastic, 
    which means it will last a long time. The stapler comes with a strong handle for easy use and a strong grip for easy use. 
    The stapler comes with a strong handle for easy use and a strong grip for easy use.`,
    features: [
      "Durable build for office and school use",
      "Easy to reload for easy use",
      "Compact design for easy transportation",
      "Strong handle for easy use",
      "Strong grip for easy use",
    ],
    reviews: [
      {
        id: 1,
        title: "Positive Review – Student Perspective",
        rating: 5,
        comment:
          "This stapler has been a great addition to my stationery collection. It's durable and easy to use, and it's perfect for both office and school use. I highly recommend it!",
      },
      {
        id: 2,
        title: "Neutral Review – General Use",
        rating: 4,
        comment:
          "I like this stapler, but I think it could be better if it had a few more features. Maybe a longer handle or a way to store more papers.",
      },
      {
        id: 3,
        title: "Critical Review – Professional/Engineer",
        rating: 3,
        comment:
          "This stapler is solid, but I think it could be better if it had a longer handle. I also think it could be more durable to avoid breaking.",
      },
      {
        id: 4,
        title: "Critical Review – Beginner User",
        rating: 3,
        comment:
          "I found this stapler a bit overwhelming at first. It has a lot of features, but the instructions weren’t very beginner-friendly. It works fine, but I had to look up tutorials online to figure it out.",

      }
      
    ],
  },
  {
    id: 3,
    name: "Stationery Kit",
    price: 50,
    bulkOffer: "Buy 3 or more @ Rs. 101.20",
    img: kitImg,
    rating: 4,
    title: "Complete Stationery Kit for Students and Professionals",
    description: ` Complete stationery kit for students and professionals. It includes pens, pencils, ruler, eraser, 
    colored pens, highlighters, index cards, and a variety of notebooks and pads. The kit comes with a strong handle 
    for easy use and a strong grip for easy use. The kit comes with a strong handle for easy use and a strong grip 
    for easy use.`,
    features: [
      "Includes pens, pencils, ruler, eraser",
      "Portable case with built-in storage",
      "Smart case with built-in storage",
      "Ease of use instructions",
      "Durable build for office and school use",
    ],
    reviews: [
      {
        id: 1,
        title: "Positive Review – Student Perspective",
        rating: 5,
        comment:
          "This stationery kit has been a great addition to my stationery collection. It's easy to use, and it's perfect for both office and school use. I highly recommend it!",
      },
      {
        id: 2,
        title: "Neutral Review – General Use",
        rating: 4,
        comment:
          "I like this stationery kit, but I think it could be better if it had a few more features. Maybe a longer handle or a way to store more papers.",
      },
      {
        id: 3,
        title: "Critical Review – Professional/Engineer",
        rating: 3,
        comment:
          "This stationery kit is solid, but I think it could be better if it had a longer handle. I also think it could be more durable to avoid breaking.",
      },
      {
        id: 4,
        title: "Critical Review – Beginner User",
        rating: 3,
        comment:
          "I found this stationery kit a bit overwhelming at first. It has a lot of features, but the instructions weren’t very beginner-friendly. It works fine, but I had to look up tutorials online to figure it out.",
      },
    ],
  },
  {
    id: 4,
    name: "Pens Pack",
    price: 50,
    bulkOffer: "Buy 3 or more @ Rs. 101.20",
    img: pensImg,
    rating: 5,
    title: "Smooth Ink Flow Pens for Writing and Drawing",
    description: ` Smooth ink flow pens for writing and drawing. They come in various colors, including black, 
    blue, red, and yellow. These pens are perfect for beginners and professionals alike. The pens come with a strong 
    handle for easy use and a strong grip for easy use. The pens come with a strong handle for easy use and a strong grip `,
    features: [
      "Set of 10 pens for various colors",
      "Strong handle for easy use",
      "Strong grip for easy use",
      "Durable build for office and school use",
      "Ease of use instructions",
    ],
    reviews: [
      {
        id: 1,
        title: "Positive Review – Student Perspective",
        rating: 5,
        comment:
          "This smooth ink flow pens have been a great addition to my stationery collection. They're easy to use, and they're perfect for both office and school use. I highly recommend them!",
      },
    {
      id: 2,
        title: "Neutral Review – General Use",
        rating: 4,
        comment:
          "I like this smooth ink flow pens, but I think it could be better if it had a few more features. Maybe a longer handle or a way to store more papers.",
      },
      {
        id: 3,
        title: "Critical Review – Professional/Engineer",
        rating: 3,
        comment:
          "This smooth ink flow pens are solid, but I think it could be better if it had a longer handle. I also think it could be more durable to avoid breaking.",
    },
    {
      id: 4,
        title: "Critical Review – Beginner User",
        rating: 3,
        comment:
          "I found this smooth ink flow pens a bit overwhelming at first. It has a lot of features, but the instructions weren’t very beginner-friendly. It works fine, but I had to look up tutorials online to figure it out.",
  
    },
    ],
  },
  {
  id: 5,
  name: "Scissors Set",
  price: 50,
  bulkOffer: "Buy 3 or more @ Rs. 101.20",
  img: scissorsImg,
  rating: 4,
  title: "Durable and Easy-to-Use Scissors Set",
  description: "Sharp scissors set for home, school, and office use.",
  features: ["Stainless steel blades", "Ergonomic handle"],
  reviews: [
    {
      id: 1,
      title: "Positive Review – Student Perspective",
      rating: 5,
      comment:
        "These scissors are perfect for school projects. They cut smoothly and don’t hurt my hands even after extended use.",
    },
    {
      id: 2,
      title: "Positive Review – Professional/Office Use",
      rating: 5,
      comment:
        "High-quality scissors for office use. The stainless steel blades are sharp, and the ergonomic handle is comfortable for daily tasks.",
    },
    {
      id: 3,
      title: "Neutral Review – General Use",
      rating: 4,
      comment:
        "Good scissors overall. They cut well, but the handle could be slightly bigger for better comfort during long tasks.",
    },
    {
      id: 4,
      title: "Critical Review – Beginner User",
      rating: 3,
      comment:
        "The scissors work fine, but I had trouble cutting thick cardboard. They are fine for paper and light materials, though.",
    },
  ],
},

  {
    id: 6,
    name: "Stapler",
    price: 50,
    bulkOffer: "Buy 3 or more @ Rs. 101.20",
    img: staplerImg,
    rating: 4,
    title: "Durable and Ergonomic Stapler",
    description: `Strong and durable stapler for everyday office and school use. It's made from durable materials like glass and plastic, 
    which means it will last a long time. This stapler is made from durable materials like glass and plastic, 
    which means it will last a long time. The stapler comes with a strong handle for easy use and a strong grip for easy use. 
    The stapler comes with a strong handle for easy use and a strong grip for easy use.`,
    features: [
      "Durable build for office and school use",
      "Easy to reload for easy use",
      "Compact design for easy transportation",
      "Strong handle for easy use",
      "Strong grip for easy use",
    ],
    reviews: [
      {
        id: 1,
        title: "Positive Review – Student Perspective",
        rating: 5,
        comment:
          "This stapler has been a great addition to my stationery collection. It's durable and easy to use, and it's perfect for both office and school use. I highly recommend it!",
      },
      {
        id: 2,
        title: "Neutral Review – General Use",
        rating: 4,
        comment:
          "I like this stapler, but I think it could be better if it had a few more features. Maybe a longer handle or a way to store more papers.",
      },
      {
        id: 3,
        title: "Critical Review – Professional/Engineer",
        rating: 3,
        comment:
          "This stapler is solid, but I think it could be better if it had a longer handle. I also think it could be more durable to avoid breaking.",
      },
      {
        id: 4,
        title: "Critical Review – Beginner User",
        rating: 3,
        comment:
          "I found this stapler a bit overwhelming at first. It has a lot of features, but the instructions weren’t very beginner-friendly. It works fine, but I had to look up tutorials online to figure it out.",

      }
      
    ],
  },
 {
  id: 7,
  name: "Highlighter",
  price: 50,
  bulkOffer: "Buy 3 or more @ Rs. 101.20",
  img: highlighterImg,
  rating: 4,
  title: "Professional-Grade Highlighter for Office Use",
  description: "Bright and long-lasting highlighters for study and work.",
  features: ["Set of 5 colors", "Smudge proof"],
  reviews: [
    {
      id: 1,
      title: "Positive Review – Student Perspective",
      rating: 5,
      comment:
        "These highlighters are fantastic! The colors are vibrant, and they don’t smudge on my notes. Perfect for studying and marking important points.",
    },
    {
      id: 2,
      title: "Positive Review – Professional/Office Use",
      rating: 5,
      comment:
        "Great highlighters for office use. The ink dries quickly and stays bright for a long time. Makes organizing documents so much easier.",
    },
    {
      id: 3,
      title: "Neutral Review – General Use",
      rating: 4,
      comment:
        "The highlighters work well, but I wish the tips were a little more durable. Otherwise, they perform as expected.",
    },
    {
      id: 4,
      title: "Critical Review – Beginner User",
      rating: 3,
      comment:
        "I found some colors too light to be visible on printed pages. Works fine on notes, but not ideal for all paper types.",
    },
  ],
},

  {
    id: 8,
    name: "Stapler",
    price: 50,
    bulkOffer: "Buy 3 or more @ Rs. 101.20",
    img: staplerImg,
    rating: 4,
    title: "Durable and Ergonomic Stapler",
    description: `Strong and durable stapler for everyday office and school use. It's made from durable materials like glass and plastic, 
    which means it will last a long time. This stapler is made from durable materials like glass and plastic, 
    which means it will last a long time. The stapler comes with a strong handle for easy use and a strong grip for easy use. 
    The stapler comes with a strong handle for easy use and a strong grip for easy use.`,
    features: [
      "Durable build for office and school use",
      "Easy to reload for easy use",
      "Compact design for easy transportation",
      "Strong handle for easy use",
      "Strong grip for easy use",
    ],
    reviews: [
      {
        id: 1,
        title: "Positive Review – Student Perspective",
        rating: 5,
        comment:
          "This stapler has been a great addition to my stationery collection. It's durable and easy to use, and it's perfect for both office and school use. I highly recommend it!",
      },
      {
        id: 2,
        title: "Neutral Review – General Use",
        rating: 4,
        comment:
          "I like this stapler, but I think it could be better if it had a few more features. Maybe a longer handle or a way to store more papers.",
      },
      {
        id: 3,
        title: "Critical Review – Professional/Engineer",
        rating: 3,
        comment:
          "This stapler is solid, but I think it could be better if it had a longer handle. I also think it could be more durable to avoid breaking.",
      },
      {
        id: 4,
        title: "Critical Review – Beginner User",
        rating: 3,
        comment:
          "I found this stapler a bit overwhelming at first. It has a lot of features, but the instructions weren’t very beginner-friendly. It works fine, but I had to look up tutorials online to figure it out.",

      }
      
    ],
  },
  {
    id: 9,
    name: "Stationery Kit",
    price: 50,
    bulkOffer: "Buy 3 or more @ Rs. 101.20",
    img: kitImg,
    rating: 4,
   title: "Complete Stationery Kit for Students and Professionals",
    description: ` Complete stationery kit for students and professionals. It includes pens, pencils, ruler, eraser, 
    colored pens, highlighters, index cards, and a variety of notebooks and pads. The kit comes with a strong handle 
    for easy use and a strong grip for easy use. The kit comes with a strong handle for easy use and a strong grip 
    for easy use.`,
    features: [
      "Includes pens, pencils, ruler, eraser",
      "Portable case with built-in storage",
      "Smart case with built-in storage",
      "Ease of use instructions",
      "Durable build for office and school use",
    ],
    reviews: [
      {
        id: 1,
        title: "Positive Review – Student Perspective",
        rating: 5,
        comment:
          "This stationery kit has been a great addition to my stationery collection. It's easy to use, and it's perfect for both office and school use. I highly recommend it!",
      },
      {
        id: 2,
        title: "Neutral Review – General Use",
        rating: 4,
        comment:
          "I like this stationery kit, but I think it could be better if it had a few more features. Maybe a longer handle or a way to store more papers.",
      },
      {
        id: 3,
        title: "Critical Review – Professional/Engineer",
        rating: 3,
        comment:
          "This stationery kit is solid, but I think it could be better if it had a longer handle. I also think it could be more durable to avoid breaking.",
      },
      {
        id: 4,
        title: "Critical Review – Beginner User",
        rating: 3,
        comment:
          "I found this stationery kit a bit overwhelming at first. It has a lot of features, but the instructions weren’t very beginner-friendly. It works fine, but I had to look up tutorials online to figure it out.",
      },
    ],
  },
  {
    id: 10,
    name: "Scientific Calculator",
    price: 50,
    bulkOffer: "Buy pack of 10 @ Rs. 249",
    img: calcImg,
    rating: 5,
    title: "Advanced Functionality for Students and Professionals",
    description: `This scientific calculator is designed to meet the needs of students, engineers,
      and professionals. Equipped with a high-contrast display, it supports over 200 functions 
      including algebraic, trigonometric, statistical, and complex number calculations. 
      The ergonomic keyboard layout ensures ease of use during exams or fieldwork, and durable construction makes it ideal for daily use. 
      Whether you're solving equations, analyzing data, or exploring functions, this calculator delivers reliable and accurate performance every time`,
    features: [
      "Supports fractions, exponents, logarithms, and trigonometric functions",
      "Multi-line display for reviewing inputs and results",
      "Ideal for high school, college, and professional use",
      "Battery-powered with auto power-off for extended life",
      "Lightweight and compact design for portability",
    ],
    reviews: [
      {
        id: 1,
        title: "Positive Review – Student Perspective",
        rating: 5,
        comment:
          "This calculator has been a lifesaver for my high school math and physics classes. It's easy to use, has all the necessary functions, and the multi-line display makes checking work super simple. Definitely worth it for students!",
      },
      {
        id: 2,
        title: "Positive Review – Professional/Engineer",
        rating: 5,
        comment:
          "Excellent build quality and functionality. I use this for quick field calculations, and it's accurate and responsive. The layout is intuitive, and it handles complex equations with no trouble. Great value for engineers or technicians.",
      },
      {
        id: 3,
        title: "Neutral Review – General Use",
        rating: 4,
        comment:
          "Good calculator overall. It covers all the basic and advanced functions I need, though the user manual could be clearer for beginners. Once you get used to the button layout, it's a solid tool.",
      },
      {
        id: 4,
        title: "Critical Review – Beginner User",
        rating: 3,
        comment:
          "I found the calculator a bit overwhelming at first. It has a lot of functions, but the instructions weren’t very beginner-friendly. It works fine, but I had to look up tutorials online to figure it out.",
      },
    ],
  },
   {
    id: 11,
    name: "Stapler",
    price: 50,
    bulkOffer: "Buy 3 or more @ Rs. 101.20",
    img: staplerImg,
    rating: 4,
    title: "Durable and Ergonomic Stapler",
    description: `Strong and durable stapler for everyday office and school use. It's made from durable materials like glass and plastic, 
    which means it will last a long time. This stapler is made from durable materials like glass and plastic, 
    which means it will last a long time. The stapler comes with a strong handle for easy use and a strong grip for easy use. 
    The stapler comes with a strong handle for easy use and a strong grip for easy use.`,
    features: [
      "Durable build for office and school use",
      "Easy to reload for easy use",
      "Compact design for easy transportation",
      "Strong handle for easy use",
      "Strong grip for easy use",
    ],
    reviews: [
      {
        id: 1,
        title: "Positive Review – Student Perspective",
        rating: 5,
        comment:
          "This stapler has been a great addition to my stationery collection. It's durable and easy to use, and it's perfect for both office and school use. I highly recommend it!",
      },
      {
        id: 2,
        title: "Neutral Review – General Use",
        rating: 4,
        comment:
          "I like this stapler, but I think it could be better if it had a few more features. Maybe a longer handle or a way to store more papers.",
      },
      {
        id: 3,
        title: "Critical Review – Professional/Engineer",
        rating: 3,
        comment:
          "This stapler is solid, but I think it could be better if it had a longer handle. I also think it could be more durable to avoid breaking.",
      },
      {
        id: 4,
        title: "Critical Review – Beginner User",
        rating: 3,
        comment:
          "I found this stapler a bit overwhelming at first. It has a lot of features, but the instructions weren’t very beginner-friendly. It works fine, but I had to look up tutorials online to figure it out.",

      }
      
    ],
  },
    {
    id: 12,
    name: "Stationery Kit",
    price: 50,
    bulkOffer: "Buy 3 or more @ Rs. 101.20",
    img: kitImg,
    rating: 4,
    title: "Complete Stationery Kit for Students and Professionals",
    description: "Complete stationery kit for students and professionals.",
    features: ["Includes pens, pencils, ruler, eraser", "Portable case"],
    reviews: [
      {
        id: 1,
        title: "Positive Review – Student Perspective",
        rating: 5,
        comment:
          "This stationery kit has been a great addition to my stationery collection. It's easy to use, and it's perfect for both office and school use. I highly recommend it!",
      },
      {
        id: 2,
        title: "Neutral Review – General Use",
        rating: 4,
        comment:
          "I like this stationery kit, but I think it could be better if it had a few more features. Maybe a longer handle or a way to store more papers.",
      },
      {
        id: 3,
        title: "Critical Review – Professional/Engineer",
        rating: 3,
        comment:
          "This stationery kit is solid, but I think it could be better if it had a longer handle. I also think it could be more durable to avoid breaking.",
      },
      {
        id: 4,
        title: "Critical Review – Beginner User",
        rating: 3,
        comment:
          "I found this stationery kit a bit overwhelming at first. It has a lot of features, but the instructions weren’t very beginner-friendly. It works fine, but I had to look up tutorials online to figure it out.",
      },
    ],
  },
];
