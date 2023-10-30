import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';
import tour5 from './images/tour-5.jpeg';

export const pageLinks = [
  { id: 1, href: "#home", text: "Home" },
  { id: 2, href: "#about", text: "About" },
  { id: 3, href: "#services", text: "Services" },
  { id: 3, href: "#tours", text: "Tours" },
]

export const socialLinks = [
  { id: 1, href: "https://linkedin.com", icon: "fab fa-linkedin" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.facebook.com", icon: "fab fa-facebook" },
]

export const servicesData = [
  {
    id: 1,
    text: "Find the perfect trip",
    para: "Plan a trip for the whole family - from family trvel tips to family friendly filters, iur tools make it easy.",
  },
  {
    id: 2,
    text: "Book with Flexibility",
    para: " Looking for a change of scenery, but want somthing flexible? With free cancellation on most hotels, you can book with peace of mind.",
  },
  {
    id: 3,
    text: "amazing comfort",
    para: "Need more help along your vacation? we offer 24/7 support on cosial and through virtual agents onsite.",
  },
]
export const tourData = [
  {
    id: 1,
    image: tour1,
    date: "august 26th, 2024",
    title: "Tibet Adventure",
    para: " Delve into eclectic China in this journey through revered traditions and fast paced modernity; from imposing skyscrapers and serene temples to the historical Great Wall, relish the infinite beauty of this country.",
    loaction: "china",
    duration: "6 days",
    price: "from $2100",
  },
  {
    id: 2,
    image: tour2,
    date: "october 1th, 2024",
    title: "best of indonesia",
    para: "Discover the cultures and contrasts of Indonesia with our classic tour of the islands of Java and Bali, from dynamic Jakarta to the tranquil beaches of Benoa.",
    loaction: "indonesia",
    duration: "11 days",
    price: "from $1400",
  },
  {
    id: 3,
    image: tour3,
    date: "september 15th, 2024",
    title: "explore italy",
    para: "Our classic self-guided tour of Italy's most iconic cities independently by train, from the legendary Colosseum in Rome to the Renaissance heritage of Florence and the romantic canals of Venice.",
    loaction: "italy",
    duration: "10 days",
    price: "from $5000",
  },
  {
    id: 4,
    image: tour4,
    date: "december 5th, 2023",
    title: "kenya highlights",
    para: "Experience the very best of Kenya in this journey navigating the cosmopolitan city of Nairobi, the authentic wildlife of the Maasai Mara National Reserve and stunning waterfalls of Nyahururu.",
    loaction: "kenya",
    duration: "20 days",
    price: "from $3300",
  },
  {
    id: 5,
    image: tour5,
    date: "january 5th, 2024",
    title: "Golden India",
    para: "An incredible journey through the desert province of Rajasthan, including Delhi, Jaipur, Jodhpur, the Taj Mahal and much more!",
    loaction: "india",
    duration: "20 days",
    price: "from $4300",
  },
]
