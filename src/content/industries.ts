import type { Feature } from "@/components/sections/FeatureGrid";
import type { ContextPageContent, HubCard, PageHeaderContent } from "./types";
import { images, img } from "./images";

export const industriesHeader: PageHeaderContent = {
  eyebrow: "Industries",
  title: "Autonomous drones across every sector",
  description:
    "From agriculture and energy to public safety, logistics, and environmental conservation — unparalleled value for your sector.",
};

export const industryHubCards: HubCard[] = [
  {
    title: "Agriculture & Livestock",
    body: "Real-time crop monitoring, precision spraying, and herd tracking for smarter farming.",
    href: "/industries/agriculture-livestock-management",
    image: img(images.agriculture, "Agricultural fields from above"),
  },
  {
    title: "Border Patrol & Security",
    body: "High-resolution aerial surveillance and thermal imaging for vast border and perimeter coverage.",
    href: "/industries/border-patrol",
    image: img(images.borderSecurity, "Border surveillance terrain"),
  },
  {
    title: "Environmental Conservation",
    body: "Wildlife monitoring, anti-poaching surveillance, and deforestation detection.",
    href: "/industries/environmental-conservation",
    image: img(images.environment, "Environmental conservation landscape"),
  },
  {
    title: "Event Coverage",
    body: "Crowd surveillance, live aerial coverage, and operational support for events of any scale.",
    href: "/industries/event-coverage",
    image: img(images.events, "Event aerial coverage"),
  },
  {
    title: "Film & Media Production",
    body: "Cinematic aerial photography and video for film, marketing, and media production.",
    href: "/industries/film-and-media-production",
    image: img(images.filmMedia, "Film production drone shot"),
  },
  {
    title: "Infrastructure Surveillance",
    body: "Monitor bridges, power lines, and critical infrastructure without endangering workers.",
    href: "/industries/infrastructure-surveillance",
    image: img(images.infrastructure, "Infrastructure inspection"),
  },
  {
    title: "Mapping & Surveying",
    body: "High-precision 3D mapping, land surveys, and site planning with LIDAR and GPS.",
    href: "/industries/mapping-and-surveying",
    image: img(images.mapping, "Mapping and surveying"),
  },
  {
    title: "Medical & Emergency Aid",
    body: "Deliver vaccines, medicines, and emergency supplies to remote and crisis zones.",
    href: "/industries/medical-supplies-and-emergency-aid-delivery",
    image: img(images.medical, "Medical supply delivery"),
  },
  {
    title: "Military & Defense Supply",
    body: "Secure logistics and supply delivery for defense operations in challenging environments.",
    href: "/industries/military-and-defense-supply",
    image: img(images.military, "Military supply operations"),
  },
  {
    title: "Military Base Security",
    body: "Perimeter monitoring and base security with autonomous surveillance drones.",
    href: "/industries/military-base-and-perimeter-security",
    image: img(images.military, "Military base perimeter"),
  },
  {
    title: "Mining & Natural Resources",
    body: "Site surveys, resource monitoring, and safety inspections across mining operations.",
    href: "/industries/mining-and-natural-resources",
    image: img(images.mining, "Mining site aerial view"),
  },
  {
    title: "Oil, Gas & Pipeline Monitoring",
    body: "Early leak detection, pipeline inspections, and environmental surveys for energy assets.",
    href: "/industries/oil-gas-and-pipeline-monitoring",
    image: img(images.pipeline, "Pipeline monitoring"),
  },
  {
    title: "Police & News Operations",
    body: "Live aerial footage for law enforcement and news coverage with rapid deployment.",
    href: "/industries/police-and-news-operations",
    image: img(images.police, "Police operations drone"),
  },
  {
    title: "Public Safety Operations",
    body: "Search and rescue, disaster management, and crowd surveillance for safer communities.",
    href: "/industries/public-safety-operations",
    image: img(images.publicSafety, "Public safety operations"),
  },
  {
    title: "Retail & E-commerce Delivery",
    body: "Last-mile delivery, warehouse automation, and scalable logistics for retail.",
    href: "/industries/retail-and-e-commerce-deliveries",
    image: img(images.retail, "Retail delivery drone"),
  },
  {
    title: "Urban & City Planning",
    body: "Aerial surveys, 3D modeling, and progress tracking for urban development projects.",
    href: "/industries/urban-and-city-planning",
    image: img(images.urban, "Urban city planning aerial"),
  },
];

export const industriesOverview: Feature[] = [
  {
    title: "Agriculture",
    body: "Empower farms with multispectral imaging, precision spraying, and livestock monitoring.",
  },
  {
    title: "Energy & Infrastructure",
    body: "Pipeline monitoring, turbine inspections, and structural assessments at scale.",
  },
  {
    title: "Public Safety",
    body: "Search and rescue, disaster response, and crowd surveillance when seconds matter.",
  },
  {
    title: "Logistics & Delivery",
    body: "Last-mile delivery, warehouse automation, and port and rail yard monitoring.",
  },
];

function industryPage(
  slug: string,
  title: string,
  description: string,
  body: string,
  image: { src: string; alt: string },
  benefits: Feature[],
): ContextPageContent {
  return {
    slug,
    header: {
      eyebrow: "Industries",
      title,
      description,
    },
    intro: { body, image },
    benefits,
  };
}

export const industryPages: ContextPageContent[] = [
  industryPage(
    "agriculture-livestock-management",
    "Agriculture & Livestock Management",
    "Innovative drone solutions for livestock management and precision agriculture.",
    "Skynole drones provide farmers with cutting-edge tools for managing livestock and enhancing agricultural productivity. Aerial mapping monitors pasture conditions and grazing patterns, while surveillance drones offer real-time insights into herd movements, health, and safety.",
    {
      src: images.agriculture,
      alt: "Agricultural landscape",
    },
    [
      {
        title: "Enhanced herd monitoring",
        body: "Real-time drone surveillance ensures livestock health, safety, and efficient pasture management.",
      },
      {
        title: "Optimizes land usage",
        body: "High-resolution imaging enables precise planning for grazing and resource allocation.",
      },
      {
        title: "Efficient deliveries",
        body: "Transport feed, supplements, and essentials directly to remote or expansive areas.",
      },
    ],
  ),
  industryPage(
    "border-patrol",
    "Border Patrol & Security Surveillance",
    "Smart surveillance for border protection and perimeter security.",
    "Our drone solutions combine high-resolution aerial imagery with autonomous surveillance for seamless border monitoring. Cover vast stretches of terrain for early detection of illegal activities, unauthorized crossings, and security breaches — with thermal imaging and geofencing for round-the-clock vigilance.",
    {
      src: images.borderSecurity,
      alt: "Border patrol terrain",
    },
    [
      {
        title: "Wide-area coverage",
        body: "Monitor vast border regions with fewer resources than traditional patrol methods.",
      },
      {
        title: "Thermal detection",
        body: "Identify activity in low-visibility and challenging environments, day or night.",
      },
      {
        title: "Real-time intelligence",
        body: "Empower authorities with actionable data for swift and effective responses.",
      },
    ],
  ),
  industryPage(
    "environmental-conservation",
    "Environmental Conservation",
    "Protecting ecosystems with aerial intelligence and continuous monitoring.",
    "Support sustainability efforts with drones that track wildlife without disturbing habitats, provide anti-poaching surveillance, and detect deforestation and illegal activities quickly and accurately.",
    {
      src: images.environment,
      alt: "Environmental conservation",
    },
    [
      {
        title: "Wildlife monitoring",
        body: "Track species and habitats with minimal ecological disruption.",
      },
      {
        title: "Anti-poaching surveillance",
        body: "24/7 monitoring to protect endangered species in remote areas.",
      },
      {
        title: "Deforestation detection",
        body: "Identify illegal logging and land-use changes with aerial imaging.",
      },
    ],
  ),
  industryPage(
    "event-coverage",
    "Event Management & Coverage",
    "Aerial coverage and crowd management for events of every scale.",
    "Deploy drones for live event coverage, crowd surveillance, and operational oversight — delivering real-time aerial perspectives for organizers, security teams, and broadcast partners.",
    {
      src: images.events,
      alt: "Event coverage",
    },
    [
      {
        title: "Live aerial coverage",
        body: "Capture dynamic perspectives for broadcasts and promotional content.",
      },
      {
        title: "Crowd surveillance",
        body: "Monitor crowd density and movement for safety and security planning.",
      },
      {
        title: "Rapid deployment",
        body: "Set up quickly for time-sensitive events and changing conditions.",
      },
    ],
  ),
  industryPage(
    "film-and-media-production",
    "Film & Media Production",
    "Cinematic aerial photography and video for production teams.",
    "Capture breathtaking aerial footage for film, television, marketing, and media production with autonomous drones that deliver precision imaging and creative flexibility.",
    {
      src: images.filmMedia,
      alt: "Film production aerial shot",
    },
    [
      {
        title: "Cinematic quality",
        body: "High-resolution imaging for professional film and media production.",
      },
      {
        title: "Creative flexibility",
        body: "Autonomous flight paths enable complex shots with minimal crew.",
      },
      {
        title: "Fast turnaround",
        body: "Rapid setup and delivery to keep production schedules on track.",
      },
    ],
  ),
  industryPage(
    "infrastructure-surveillance",
    "Infrastructure Surveillance",
    "Monitor critical infrastructure safely and cost-effectively.",
    "Inspect power lines, bridges, towers, and critical infrastructure with autonomous drones — reducing worker risk and delivering detailed inspection data faster than traditional methods.",
    {
      src: images.infrastructure,
      alt: "Infrastructure surveillance",
    },
    [
      {
        title: "Safer inspections",
        body: "Assess hard-to-reach structures without endangering workers.",
      },
      {
        title: "Faster turnaround",
        body: "Complete inspections faster, minimizing downtime for operations.",
      },
      {
        title: "Early fault detection",
        body: "Identify issues early with high-resolution and thermal imaging.",
      },
    ],
  ),
  industryPage(
    "mapping-and-surveying",
    "Mapping & Surveying",
    "Precision mapping and 3D modeling for planning and development.",
    "Generate high-precision maps, 3D models, and survey data with LIDAR, GPS, and multispectral imaging — essential for construction, land development, and resource management.",
    {
      src: images.mapping,
      alt: "Mapping and surveying",
    },
    [
      {
        title: "3D terrain modeling",
        body: "Create detailed terrain maps for site planning and analysis.",
      },
      {
        title: "Survey accuracy",
        body: "Pinpoint measurements for land evaluations and development projects.",
      },
      {
        title: "Progress tracking",
        body: "Visual updates for stakeholders without interrupting operations.",
      },
    ],
  ),
  industryPage(
    "medical-supplies-and-emergency-aid-delivery",
    "Medical Supplies & Emergency Aid Delivery",
    "Delivering hope when time matters most.",
    "Transport vaccines, medicines, organs, and emergency supplies to remote areas and crisis zones with autonomous delivery drones that reach locations traditional vehicles cannot.",
    {
      src: images.medical,
      alt: "Medical supply delivery",
    },
    [
      {
        title: "Emergency supply delivery",
        body: "Rapid transport of critical medical supplies to remote communities.",
      },
      {
        title: "Disaster response",
        body: "Deliver aid and assess damage in crisis zones quickly.",
      },
      {
        title: "Time-critical logistics",
        body: "On-demand dispatch when every minute counts.",
      },
    ],
  ),
  industryPage(
    "military-and-defense-supply",
    "Military & Defense Supply",
    "Secure logistics for defense operations in challenging environments.",
    "Autonomous drones deliver supplies and support defense logistics in remote and hazardous areas — with secure transport and scalable fleet operations.",
    {
      src: images.military,
      alt: "Military defense supply",
    },
    [
      {
        title: "Secure transport",
        body: "Advanced technology minimizes risks during transit in sensitive operations.",
      },
      {
        title: "Remote access",
        body: "Reach locations inaccessible to conventional vehicles.",
      },
      {
        title: "Scalable fleet",
        body: "Scale from single missions to coordinated supply operations.",
      },
    ],
  ),
  industryPage(
    "military-base-and-perimeter-security",
    "Military Base & Perimeter Security",
    "Autonomous perimeter monitoring for military installations.",
    "Continuous autonomous surveillance for military bases and perimeters — combining thermal imaging, geofencing, and real-time alerts for comprehensive base security.",
    {
      src: images.military,
      alt: "Military base security",
    },
    [
      {
        title: "Perimeter monitoring",
        body: "Continuous coverage of base boundaries and access points.",
      },
      {
        title: "Threat detection",
        body: "AI-enhanced identification of anomalies and unauthorized activity.",
      },
      {
        title: "Autonomous operation",
        body: "24/7 vigilance with minimal personnel requirements.",
      },
    ],
  ),
  industryPage(
    "mining-and-natural-resources",
    "Mining & Natural Resources",
    "Aerial intelligence for mining operations and resource management.",
    "Monitor mining sites, conduct safety inspections, and survey resource areas with drones that access hazardous terrain and deliver actionable data for operations teams.",
    {
      src: images.mining,
      alt: "Mining operations",
    },
    [
      {
        title: "Site surveys",
        body: "Map and monitor mining sites with high-resolution aerial data.",
      },
      {
        title: "Safety inspections",
        body: "Inspect hazardous areas without exposing workers to risk.",
      },
      {
        title: "Resource monitoring",
        body: "Track extraction progress and environmental impact zones.",
      },
    ],
  ),
  industryPage(
    "oil-gas-and-pipeline-monitoring",
    "Oil, Gas & Pipeline Monitoring",
    "Early detection and continuous monitoring for energy infrastructure.",
    "Detect leaks, damages, and environmental risks across pipelines and energy assets with thermal imaging and autonomous patrol routes that minimize downtime.",
    {
      src: images.pipeline,
      alt: "Pipeline monitoring",
    },
    [
      {
        title: "Leak detection",
        body: "Early identification of pipeline leaks and damages.",
      },
      {
        title: "Automated inspections",
        body: "Reduce downtime with faster, more frequent asset assessments.",
      },
      {
        title: "Environmental surveys",
        body: "Evaluate impact zones for new energy projects.",
      },
    ],
  ),
  industryPage(
    "police-and-news-operations",
    "Police & News Operations",
    "Live aerial coverage for law enforcement and news reporting.",
    "Deploy rapidly to monitor live action across town — sending live video and data capture for police operations and news events with cost-effective aerial resources.",
    {
      src: images.police,
      alt: "Police operations drone",
    },
    [
      {
        title: "Live footage",
        body: "Real-time video for police operations and news broadcasting.",
      },
      {
        title: "Rapid deployment",
        body: "Activate quickly when situations develop in the field.",
      },
      {
        title: "Cost-effective coverage",
        body: "Replace helicopter resources with reliable drone surveillance.",
      },
    ],
  ),
  industryPage(
    "public-safety-operations",
    "Public Safety Operations",
    "Smart solutions for search, rescue, and emergency response.",
    "Skynole drones empower public safety teams with surveillance and search tools — accessing remote and hazardous locations faster than traditional methods and delivering supplies when responders need them.",
    {
      src: images.publicSafety,
      alt: "Public safety drone operations",
    },
    [
      {
        title: "Search and rescue",
        body: "Cover large areas quickly to locate missing individuals.",
      },
      {
        title: "Disaster management",
        body: "Monitor and assess wildfires, floods, and other emergencies.",
      },
      {
        title: "Supply delivery",
        body: "Deliver medical kits and communication devices to responders.",
      },
    ],
  ),
  industryPage(
    "retail-and-e-commerce-deliveries",
    "Retail & E-commerce Deliveries",
    "Revolutionizing last-mile delivery and warehouse logistics.",
    "Reach customers in record time with precision delivery drones — scalable from single packages to full fleet operations for retail and e-commerce logistics.",
    {
      src: images.retail,
      alt: "Retail delivery drone",
    },
    [
      {
        title: "Last-mile delivery",
        body: "Faster deliveries to customers with autonomous routing.",
      },
      {
        title: "Warehouse automation",
        body: "Streamline inventory management with indoor drone systems.",
      },
      {
        title: "Scalable fleet",
        body: "Scale seamlessly from one package to hundreds of shipments.",
      },
    ],
  ),
  industryPage(
    "urban-and-city-planning",
    "Urban & City Planning",
    "Aerial intelligence for smarter urban development.",
    "Support urban planning with aerial surveys, 3D modeling, and progress tracking — giving planners and developers accurate data for land evaluations and project oversight.",
    {
      src: images.urban,
      alt: "Urban planning aerial view",
    },
    [
      {
        title: "Land surveys",
        body: "Simplify property and land evaluations for planners and developers.",
      },
      {
        title: "3D site modeling",
        body: "Real-time mapping and modeling for urban development projects.",
      },
      {
        title: "Progress tracking",
        body: "Visual updates for stakeholders across construction timelines.",
      },
    ],
  ),
];

export const industrySlugs = industryPages.map((p) => p.slug);

export function getIndustryPage(slug: string): ContextPageContent | undefined {
  return industryPages.find((p) => p.slug === slug);
}
