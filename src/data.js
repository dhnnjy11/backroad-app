import tourImg1 from "./images/tour-1.jpeg";
import tourImg2 from "./images/tour-2.jpeg";
import tourImg3 from "./images/tour-3.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.squarespace.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. \nAsperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endliess hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. \nAsperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. \nAsperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    img: tourImg1,
    title: "Tibet Adventure",
    date: "august 26th, 2020",
    country: "India",
    days: "6 days",
    amount: "from $2100",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque\nvitae tempore voluptatum maxime reprehenderit eum quod\nexercitationem fugit, qui corporis.",
  },
  {
    id: 2,
    img: tourImg2,
    title: "Tibet Adventure",
    date: "august 26th, 2020",
    country: "India",
    days: "11 days",
    amount: "from $2100",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque\nvitae tempore voluptatum maxime reprehenderit eum quod\nexercitationem fugit, qui corporis.",
  },
  {
    id: 3,
    img: tourImg3,
    title: "Tibet Adventure",
    date: "august 26th, 2020",
    country: "India",
    days: "12 days",
    amount: "from $2100",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque\nvitae tempore voluptatum maxime reprehenderit eum quod\nexercitationem fugit, qui corporis.",
  },
];
