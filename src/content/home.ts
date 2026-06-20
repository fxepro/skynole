import type { Stat } from "@/components/sections/StatBar";
import type { Feature } from "@/components/sections/FeatureGrid";

/** Home page copy — recovered from the WordPress site, spam stripped. */
export const homeContent = {
  hero: {
    eyebrow: "Intelligent Autonomous Drones",
    title: "Redefining Flight, Revolutionizing Autonomy.",
    body: "Our drones combine precision, efficiency, and adaptability, allowing you to automate complex tasks and gather invaluable data with ease. Designed, manufactured and delivered from the United States.",
  },

  stats: [
    { value: "3", label: "Distinct Drone Designs" },
    { value: "10+", label: "Industry Applications" },
    { value: "2.7M+", label: "Miles Covered Worldwide" },
  ] satisfies Stat[],

  benefits: {
    eyebrow: "The Autonomous Drone Benefits",
    title: "Breaking new ground with cutting-edge drone technology",
    items: [
      {
        title: "Unparalleled Autonomy and Intelligence",
        body: "Powered by advanced AI and machine learning, our drones fly and operate independently — learning and adapting to their surroundings and making real-time decisions without human intervention.",
        image: { src: "/media/2025/03/drone1.png", alt: "Autonomous intelligence drone" },
      },
      {
        title: "Precision and Safety First",
        body: "State-of-the-art sensors, GPS, and obstacle avoidance ensure high precision in every task. Navigating complex environments while avoiding hazards minimizes risk, even in challenging conditions.",
        image: { src: "/media/2025/03/drone3.png", alt: "Precision sensing drone" },
      },
      {
        title: "Scalable and Customizable Solutions",
        body: "No two businesses are alike. Our modular drone systems scale from large industrial operations to smaller specialized missions, with easy upgrades that protect your investment over time.",
        image: { src: "/media/2025/03/drone2.png", alt: "Scalable drone platform" },
      },
    ] satisfies Feature[],
  },

  future: {
    eyebrow: "The Future with Skynole",
    title: "A smarter, better-enabled community",
    items: [
      {
        title: "Future-Proof Technology",
        body: "We are committed to ongoing innovation and adapting to the latest advancements in autonomous flight technology.",
      },
      {
        title: "Customer-Centric Approach",
        body: "From consultation to deployment, we work closely with our clients to ensure our drones meet and exceed expectations.",
      },
      {
        title: "Global Expertise",
        body: "Our team of industry experts, engineers, and innovators brings a wealth of experience to every project.",
      },
    ] satisfies Feature[],
  },

  applications: {
    eyebrow: "Engage Now!",
    title: "Available 24/7/365, ready to engage on command.",
    description:
      "Our cutting-edge autonomous drone technology is designed to transform industries and redefine aerial operations.",
    items: [
      {
        title: "Surveillance & Security",
        body: "Monitor large areas in real-time, detect anomalies, and respond to security threats with precision.",
      },
      {
        title: "Aerial Photography",
        body: "Capture breathtaking, high-quality images and video for media, marketing, and real estate.",
      },
      {
        title: "Agriculture",
        body: "Enhance crop monitoring and precision farming through automated data collection and analysis.",
      },
      {
        title: "Search & Rescue",
        body: "Provide rapid deployment in emergencies, locating missing individuals across challenging terrain.",
      },
      {
        title: "Police & News Operations",
        body: "Activate quickly to monitor live action across town, sending live video and data capture.",
      },
      {
        title: "Infrastructure Inspections",
        body: "Inspect power lines, bridges, and critical infrastructure cost-effectively, without endangering workers.",
      },
    ] satisfies Feature[],
  },
} as const;
