// ===========================================
// ABOUT EVOARC
// ===========================================
import industrialAutomation from "../assets/images/industries/industrial-automation.jpg";
import automotive from "../assets/images/industries/automotive.jpg";
import aerospaceDefence from "../assets/images/industries/aerospace-defence.jpg";
import medicalElectronics from "../assets/images/industries/medical-electronics.jpg";
import consumerElectronics from "../assets/images/industries/consumer-electronics.jpg";
import telecommunications from "../assets/images/industries/telecommunications.jpg";
import semiconductor from "../assets/images/industries/semiconductor.jpg";
import iotSmartDevices from "../assets/images/industries/iot-smart-devices.jpg";
import renewableEnergy from "../assets/images/industries/renewable-energy.jpg";

import companyBrochure from "../assets/documents/company-brochure.pdf";
import capabilityStatement from "../assets/documents/capability-statement.pdf";

import {
  FaUsers,
  FaProjectDiagram,
  FaMicrochip,
  FaAward,
  FaClock,
  FaShieldAlt,
  FaCogs,
  FaLightbulb,
} from "react-icons/fa";

export const about = {
  title: "Engineering Innovation with Precision",

  description1:
    "EVOARC is a technology-driven electronics engineering company specializing in PCB design, embedded systems, hardware development, product engineering, and manufacturing support. We collaborate with startups, SMEs, and global enterprises to transform innovative ideas into reliable, production-ready electronic products.",

  description2:
    "From concept development and system architecture to prototype validation and manufacturing support, our experienced engineering team delivers end-to-end engineering solutions tailored to every client's unique requirements. By leveraging advanced EDA tools such as Cadence Allegro and Altium Designer, EVOARC ensures high-performance designs with exceptional quality, reliability, and on-time project delivery."
};

// ===========================================
// WHY CHOOSE EVOARC
// ===========================================

export const whyChoose = [
  {
    id: 1,
    icon: FaUsers,
    short: "Team",
    title: "Experienced Electronics Engineering Team",
    description:
      "Our multidisciplinary engineering team possesses extensive expertise in PCB design, embedded systems, hardware development, and product engineering, delivering reliable and innovative electronic solutions.",
  },
  {
    id: 2,
    icon: FaProjectDiagram,
    short: "Development",
    title: "End-to-End Product Development",
    description:
      "From requirement gathering and schematic design to PCB layout, prototyping, testing, and manufacturing support, we manage the complete product lifecycle.",
  },
  {
    id: 3,
    icon: FaMicrochip,
    short: "PCB",
    title: "High-Speed & Complex PCB Expertise",
    description:
      "We specialize in multilayer, RF, HDI, mixed-signal, and high-speed PCB designs while ensuring excellent signal integrity and manufacturability.",
  },
  {
    id: 4,
    icon: FaCogs,
    short: "EDA",
    title: "Advanced EDA Tools",
    description:
      "Using Cadence Allegro, Altium Designer, and OrCAD, we deliver precise and production-ready PCB layouts that meet industry standards.",
  },
  {
    id: 5,
    icon: FaAward,
    short: "Quality",
    title: "Quality-Focused Engineering Process",
    description:
      "Every design undergoes comprehensive reviews, simulations, verification, and validation to ensure reliability and performance.",
  },
  {
    id: 6,
    icon: FaClock,
    short: "Delivery",
    title: "On-Time Project Delivery",
    description:
      "Efficient project planning and transparent communication enable us to consistently deliver projects within agreed timelines.",
  },
  {
    id: 7,
    icon: FaShieldAlt,
    short: "Security",
    title: "Confidential & Secure Development",
    description:
      "We safeguard your intellectual property through secure development practices and strict confidentiality agreements.",
  },
  {
    id: 8,
    icon: FaLightbulb,
    short: "Solutions",
    title: "Customized Engineering Solutions",
    description:
      "Every project is tailored to the customer's technical requirements, industry standards, and business objectives.",
  },
];

// ===========================================
// INDUSTRIES
// ===========================================

export const industries = [
  {
    id: 1,
    title: "Industrial Automation",
    image: industrialAutomation
  },
  {
    id: 2,
    title: "Automotive",
    image: automotive
  },
  {
    id: 3,
    title: "Aerospace & Defence",
    image: aerospaceDefence
  },
  {
    id: 4,
    title: "Medical Electronics",
    image: medicalElectronics
  },
  {
    id: 5,
    title: "Consumer Electronics",
    image: consumerElectronics
  },
  {
    id: 6,
    title: "Telecommunications",
    image: telecommunications
  },
  {
    id: 7,
    title: "Semiconductor",
    image: semiconductor
  },
  {
    id: 8,
    title: "IoT & Smart Devices",
    image: iotSmartDevices
  },
  {
    id: 9,
    title: "Renewable Energy",
    image: renewableEnergy
  }
];

// ===========================================
// DEVELOPMENT PROCESS
// ===========================================

export const developmentProcess = [
  {
    id: 1,
    title: "Requirement Discussion",
    description:
      "Understanding customer goals, technical requirements, and project scope."
  },
  {
    id: 2,
    title: "System Architecture",
    description:
      "Creating a robust system architecture for reliable product development."
  },
  {
    id: 3,
    title: "Schematic Design",
    description:
      "Designing optimized electronic schematics for performance and manufacturability."
  },
  {
    id: 4,
    title: "PCB Layout",
    description:
      "Developing high-speed, multilayer, and production-ready PCB layouts."
  },
  {
    id: 5,
    title: "Fabrication Turnkey",
    description:
      "Managing PCB fabrication, component sourcing, and assembly support."
  },
  {
    id: 6,
    title: "Simulation & Verification",
    description:
      "Electrical simulations and design verification to minimize risks before production."
  },
  {
    id: 7,
    title: "Prototype Development",
    description:
      "Building functional prototypes for evaluation and design validation."
  },
  {
    id: 8,
    title: "Testing & Validation",
    description:
      "Comprehensive testing to ensure quality, functionality, and reliability."
  },
  {
    id: 9,
    title: "Manufacturing Support",
    description:
      "Supporting production, optimization, and product lifecycle requirements."
  }
];

// ===========================================
// TESTIMONIALS
// ===========================================

export const testimonials = [
  {
    id: 1,
    name: "Michael Johnson",
    company: "Industrial Automation Company",
    feedback:
      "EVOARC delivered an exceptional PCB design with outstanding engineering quality. Their professionalism and commitment to deadlines exceeded our expectations."
  },
  {
    id: 2,
    name: "Sophia Williams",
    company: "Medical Electronics Startup",
    feedback:
      "The team provided complete product development support from concept to prototype. Communication was excellent throughout the project."
  },
  {
    id: 3,
    name: "David Anderson",
    company: "IoT Solutions Provider",
    feedback:
      "Their expertise in embedded systems and PCB layout helped us significantly reduce development time while maintaining exceptional product quality."
  }
];

// ===========================================
// DOWNLOAD CENTER
// ===========================================

export const downloads = [
  {
    id: 1,
    title: "Company Brochure",
    type: "PDF",
    file: companyBrochure
  },
  {
    id: 2,
    title: "Capability Statement",
    type: "PDF",
    file: capabilityStatement
  }
];

