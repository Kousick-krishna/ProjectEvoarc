import pcbImage from "../assets/images/services/pcb.jpg";
import hardwareImage from "../assets/images/services/hardware.jpg";
import productImage from "../assets/images/services/product.jpg";
import analysisImage from "../assets/images/services/engineering.jpg";
import embeddedImage from "../assets/images/services/embedded.jpg";
import consultancyImage from "../assets/images/services/technical.jpeg";

export const services = [
  {
    id: "pcb-design",

    title: "PCB Design",

    image: pcbImage,

    shortDescription:
      "High-performance PCB design solutions for reliable, scalable, and production-ready electronic products.",

    overview:
      "Our PCB design services cover everything from concept development to manufacturing-ready layouts. We specialize in high-speed, multilayer, RF, and HDI PCB designs that meet modern engineering standards while ensuring reliability, signal integrity, and manufacturability.",

    features: [
      "High-Speed PCB Design",
      "Multilayer PCB Layout",
      "HDI PCB Design",
      "RF & Mixed Signal PCB Design",
      "Flex & Rigid-Flex PCB Design",
    ],
  },

  {
    id: "hardware-development",

    title: "Hardware Development",

    image: hardwareImage,

    shortDescription:
      "Custom electronic hardware design and embedded hardware development for next-generation products.",

    overview:
      "We develop reliable electronic hardware solutions from schematic design to prototype validation. Our expertise includes embedded hardware, FPGA solutions, and custom electronic circuit development tailored to industrial and commercial applications.",

    features: [
      "Electronic Circuit Design",
      "Schematic Capture",
      "Embedded Hardware Design",
      "FPGA & Microcontroller Solutions",
      "Custom Hardware Development",
    ],
  },

  {
    id: "product-development",

    title: "Product Development",

    image: productImage,

    shortDescription:
      "Transform innovative ideas into market-ready electronic products through end-to-end product development.",

    overview:
      "Our product development team supports the complete product lifecycle—from concept creation and prototype development to testing, optimization, and manufacturing support—ensuring faster time-to-market and exceptional product quality.",

    features: [
      "Concept to Prototype",
      "Electronic Product Design",
      "Design Validation & Testing",
      "Manufacturing Support",
      "Product Optimization",
    ],
  },

  {
    id: "engineering-analysis",

    title: "Engineering Analysis",

    image: analysisImage,

    shortDescription:
      "Advanced engineering analysis services to improve performance, reliability, and manufacturability.",

    overview:
      "We perform comprehensive engineering analysis to validate electronic designs, reduce risks, and optimize product performance. Our team focuses on signal integrity, EMI compliance, and design verification for high-quality engineering outcomes.",

    features: [
      "Signal Integrity (SI)",
      "Power Integrity (PI)",
      "EMI/EMC Consulting",
      "DFM/DFA Analysis",
      "Design Verification",
    ],
  },

  {
    id: "embedded-iot-solutions",

    title: "Embedded & IoT Solutions",

    image: embeddedImage,

    shortDescription:
      "Smart embedded systems and IoT solutions powering connected products and intelligent automation.",

    overview:
      "We build secure, scalable embedded software and IoT solutions for modern industries. From firmware development to connected devices and automation systems, we help businesses embrace digital transformation.",

    features: [
      "Firmware Development",
      "Embedded Software",
      "IoT Device Development",
      "Automation Systems",
      "Smart Connected Products",
    ],
  },

  {
    id: "technical-consultancy",

    title: "Technical Consultancy",

    image: consultancyImage,

    shortDescription:
      "Professional engineering consultancy to accelerate innovation, product development, and technical excellence.",

    overview:
      "Our technical consultancy services provide expert engineering guidance, R&D support, documentation, project management, and technology assessment to help organizations make informed engineering decisions.",

    features: [
      "Engineering Consulting",
      "Research & Development",
      "Technical Documentation",
      "Project Management",
      "Technology Assessment & Training",
    ],
  },
];