import {Link} from "react-router-dom"

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string; 
  link: string
}

const services: Service[] = [
  {
    id: 1,
    title: "Land Registry Complaint Map",
    description:
      "Official, registry-compliant maps that clearly define boundaries for legal registration.",
    icon: "./Landing.svg",
    link: "/services/land-registry",
    
  },
  {
    id: 2,
    title: "Topographical Surveying",
    description:
      "Accurate land mapping that captures elevations and features for efficient site planning.",
    icon: "./Topographical.svg",
    link: "/services/topographical-surveying",
  },
  {
    id: 3,
    title: "Measured Building Survey",
    description:
      "Detailed 2D and 3D building data for renovations, extensions, or architectural documentation.",
    icon: "./Building.svg",
   link: "/services/building-survey",
  },
  {
    id: 4,
    title: "3D Scanning",
    description:
      "High-precision 3D scans and digital models that support accurate planning, design, and documentation.",
    icon: "./3D.svg",
   link: "/services/3d-scanning",
  },
  {
    id: 5,
    title: "Volume Surveying",
    description:
      "Precise volume measurements for earthworks, excavations, and stockpile management.",
    icon: "./Topographical.svg",
   link: "/services/volume-surveying",

  },
  {
    id: 6,
    title: "Boundary Disputes",
    description:
      "Professional surveys to establish clear boundaries and resolve land ownership conflicts.",
    icon: "./Boundary.svg",
   link: "/services/boundary-disputes",
  },
   {
    id: 7,
    title: "Forestry Services",
    description:
      "safe, cost-effective forest road design from initial survey to final documentation.",
    icon: "./Forestry.svg",
   link: "/services/forestry-services",
  },
  {
    id: 8,
    title: "Setting Out",
    description:
      "Accurate on-site markings that translate your design into reality during construction.",
    icon: "./Setting.svg",
   link: "/services/setting-out",
  },
  {
    id: 9,
    title: "Drone Mapping",
    description:
      "We use drones to capture precise aerial data for fast, accurate mapping and analysis.",
    icon: "./Drone.svg",
   link: "/services/drone-mapping",
  },
  {
    id: 10,
    title: "Irish Water compliance Documentation",
    description:
      "We handle all documentation to ensure your project meets Irish Water’s technical standards and approval requirements.",
    icon: "./Water.svg",
   link: "/services/irish-water",
  },
   {
    id: 11,
    title: "As built surveys",
    description:
      "We record the exact details of completed works, providing accurate data that reflects what was built on site.",
    icon: "./Setting.svg",
   link: "/services/as-built-surveys",
  },
  {
    id: 12,
    title: "Site surveys",
    description:
      "We capture precise ground and boundary data to support planning, design, and construction activities.",
    icon: "./Topographical.svg",
   link: "/services/site-surveys",
  },
];

const ServiceCard = () => {
  return (
    <section className="w-full py-8 flex justify-center">
      <div className=" max-w-[1440px] w-[90%] lg:w-[80%] grid grid-cols-2 justify-center gap-3 lg:gap-6  md:grid-cols-3 ">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col items-center justify-between bg-[#F7F7F7] shadow-md  rounded-2xl  lg:px-8 text-center py-14 "
          >
            <img
              src={service.icon}
              alt={service.title}
              className="w-12 h-12 mb-5 object-contain"
            />
            <h3 className="text-[12px] md:text-[20px] lg:text-[24px] font-semibold mb-5 lg:mb-7 ">{service.title}</h3>
            <p className="text-[10px] md:text-[16px] lg:text-[18px] text-[#2E2E2E] mb-5 lg:mb-10 w-[80%] lg:w-[70%]">{service.description}</p>
             <button
              onClick={(e) => e.stopPropagation()} 
              className="bg-[#0B3D91] text-white w-[40%]  py-2 rounded-md text-[8.5px] md:text-[14px] hover:bg-blue-800 transition-colors mb-5  hover:scale-105 hover:shadow-lg lg:py-3"
            >
              <Link to={service.link}>More</Link>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCard;
