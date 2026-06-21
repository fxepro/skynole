import type { Feature } from "@/components/sections/FeatureGrid";
import type { Split } from "@/components/sections/FeatureSplits";
import type { Step } from "@/components/sections/StepGrid";
import type { PageHeaderContent } from "./types";
import { images, img } from "./images";

export const capabilitiesHeader: PageHeaderContent = {
  eyebrow: "Capabilities",
  title: "Unleashing the power of aerial drones",
  description:
    "LIDAR mapping, thermal imaging, 5G connectivity, AI object tracking, swarm intelligence, and more — harnessing cutting-edge drone technology.",
};

export const capabilitiesSplits: Split[] = [
  {
    title: "Enhanced Precision",
    body: "Capture high-resolution images and data with pinpoint accuracy.",
    image: img(images.dronePrecision, "Precision drone imaging"),
  },
  {
    title: "Increased Efficiency",
    body: "Automate complex tasks, reducing costs and time investment.",
    image: img(images.operations, "Efficient drone operations"),
  },
  {
    title: "Elevated Safety",
    body: "Minimize human intervention in dangerous environments.",
    image: img(images.droneFleet, "Safe drone operations"),
  },
];

export const basicCapabilities: Feature[] = [
  {
    title: "Advanced Navigation",
    body: "GPS and inertial navigation, LiDAR obstacle avoidance, and indoor/outdoor adaptability.",
  },
  {
    title: "Payload Versatility",
    body: "Thermal, infrared, and RGB cameras; air quality sensors; and delivery packages.",
  },
  {
    title: "AI & Machine Learning",
    body: "Image recognition, predictive analytics, and autonomous decision-making.",
  },
  {
    title: "Communication & Integration",
    body: "Swarm coordination, IoT and cloud integration, and real-time data transmission.",
  },
  {
    title: "Extended Flight Time",
    body: "Energy-efficient motors, battery optimization, and solar or hybrid power options.",
  },
  {
    title: "Regulatory Compliance",
    body: "Geofencing for restricted zones and remote ID systems for tracking.",
  },
];

export const advancedCapabilities: Feature[] = [
  {
    title: "LIDAR Mapping & Obstacle Detection",
    body: "3D terrain maps, obstacle detection, and foliage penetration for search and rescue and precision agriculture.",
  },
  {
    title: "Infrared & Thermal Imaging",
    body: "Heat signature detection for search and rescue, border patrol, and wildlife monitoring in low visibility.",
  },
  {
    title: "5G Connectivity",
    body: "Real-time HD video and data streams for news reporting, emergency response, and reconnaissance.",
  },
  {
    title: "AI Object Recognition & Tracking",
    body: "Autonomous identification and tracking of moving objects for law enforcement and surveillance.",
  },
  {
    title: "Hyperspectral Imaging",
    body: "Material and vegetation analysis for agriculture, mineral exploration, and environmental monitoring.",
  },
  {
    title: "Automated Route Planning",
    body: "GPS and GNSS autonomous flight paths for delivery, inspections, and agricultural spraying.",
  },
  {
    title: "Swarm Intelligence",
    body: "Coordinated multi-drone operations for search and rescue and large-scale surveillance.",
  },
  {
    title: "Edge Computing",
    body: "Onboard data processing for real-time decisions in inspections and disaster response.",
  },
  {
    title: "Collision Avoidance",
    body: "Ultrasonic and radar sensors for safe operation in urban and complex environments.",
  },
  {
    title: "Autonomous Charging & Docking",
    body: "Continuous operations with automated landing, recharge, and relaunch stations.",
  },
];

export const capabilitySteps: Step[] = [
  {
    title: "Smarter community",
    body: "The world's leading provider of autonomous drone hardware, software, and technology.",
  },
  {
    title: "Customer-centric",
    body: "From consultation to deployment, we ensure our drones meet and exceed expectations.",
  },
  {
    title: "Continuous innovation",
    body: "Committed to ongoing innovation and adapting to the latest advancements in autonomous flight.",
  },
];
