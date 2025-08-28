export interface ItemProps {
  title: string;
  stars: number;
  description: string;
  image: string;
  price: number;
  discount?: number;
  url: string;
  buy: () => void;
}

export const data: ItemProps[] = [
  {
    title: "Ergonomic Wooden Chair",
    stars: 4.5,
    description:
      "A comfortable and stylish wooden chair, perfect for your living room.",
    image: "/chair.png",
    price: 1200,
    discount: 15,
    url: "/chair.png",
    buy: () => console.log("Bought: Ergonomic Wooden Chair"),
  },
  {
    title: "Modern Sofa",
    stars: 4.8,
    description: "Spacious modern sofa with soft fabric and minimalist design.",
    image: "/sofa.png",
    price: 3500,
    discount: 20,
    url: "/chair.png",
    buy: () => console.log("Bought: Modern Sofa"),
  },
  {
    title: "Luxury Bed",
    stars: 5,
    description: "Premium king-sized bed with memory foam mattress included.",
    image: "/bed.png",
    price: 5000,
    url: "/chair.png",
    buy: () => console.log("Bought: Luxury Bed"),
  },
  {
    title: "Office Desk",
    stars: 4.2,
    description: "Sleek and sturdy office desk with cable management system.",
    image: "/desk.png",
    price: 1800,
    discount: 10,
    url: "/chair.png",
    buy: () => console.log("Bought: Office Desk"),
  },
  {
    title: "Stylish Lamp",
    stars: 4.7,
    description: "Energy-efficient lamp with warm lighting and modern design.",
    image: "/lamp.png",
    price: 350,
    url: "/chair.png",
    buy: () => console.log("Bought: Stylish Lamp"),
  },
];
