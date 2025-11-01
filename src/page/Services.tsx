import BuildingConfident from "../component/Services/BuildingConfident";
import  ServiceCard from "../component/Services/ServiceCard";
import ServiceHero from "../component/Services/ServiceHero";

const Services = () => {
  return (
    <div>
      <ServiceHero title="OUR SERVICES" />
      <BuildingConfident />
      <ServiceCard/>
    </div>
  );
};

export default Services;
