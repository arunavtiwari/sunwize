import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "How to Choose Between On-Grid and Off-Grid Solar Systems in India",
    paragraph:
      "Confused between on-grid and off-grid solar? We break down the pros, cons, and ideal use cases for Indian homes and businesses.",
    image: "/images/blog/offgrid_ongrid.jpg",
    author: {
      name: "Anjali Rao",
      image: "/images/blog/author-01.png",
      designation: "Solar Consultant",
    },
    tags: ["solar", "grid", "india"],
    publishDate: "2025",
    slug: "on-grid-vs-off-grid-solar-india",
  },
  {
    id: 2,
    title: "Top Government Solar Subsidy Schemes in India (2025 Guide)",
    paragraph:
      "Maximize your solar investment by taking advantage of India's latest rooftop solar subsidies and state-wise incentives.",
    image: "/images/blog/solar_subsidy.png",
    author: {
      name: "Ravi Sharma",
      image: "/images/blog/author-02.png",
      designation: "Policy Analyst",
    },
    tags: ["policy", "subsidy", "savings"],
    publishDate: "2025",
    slug: "solar-subsidy-schemes-india-2025",
  },
  {
    id: 3,
    title: "How Much Can You Save with a Solar Power Plant?",
    paragraph:
      "A practical breakdown of savings for homeowners, businesses, and factories using real solar ROI examples from India.",
    image: "/images/blog/solar_savings.png",
    author: {
      name: "Sneha Kapoor",
      image: "/images/blog/author-03.png",
      designation: "Energy Analyst",
    },
    tags: ["savings", "finance", "roi"],
    publishDate: "2025",
    slug: "solar-power-plant-savings-india",
  },
  {
    id: 4,
    title: "Solar Water Heaters vs Electric Geysers: What’s Better in 2025?",
    paragraph:
      "Compare solar thermal systems with electric geysers in terms of cost, performance, and long-term impact for Indian homes.",
    image: "/images/blog/solar-water-heater.webp",
    author: {
      name: "Dr. Nikhil Verma",
      image: "/images/blog/author-02.png",
      designation: "Sustainability Expert",
    },
    tags: ["solar water", "heating", "comparison"],
    publishDate: "2025",
    slug: "solar-water-heaters-vs-electric-geysers-2025",
  },
  {
    id: 5,
    title: "Solar for Agriculture: Is It Worth It for Indian Farmers?",
    paragraph:
      "Explore how solar water pumps and irrigation systems are revolutionizing farming in rural India, with government support.",
    image: "/images/blog/solar-agriculture.jpg",
    author: {
      name: "Meera Iyer",
      image: "/images/blog/author-03.png",
      designation: "Agri-Tech Writer",
    },
    tags: ["agriculture", "solar pump", "rural"],
    publishDate: "2025",
    slug: "solar-for-agriculture-indian-farmers",
  },
];

export default blogData;
