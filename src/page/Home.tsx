function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[linear-gradient(rgba(31,31,31,0.8),rgba(31,31,31,0.8)),url('/hero-bg.jpg')] w-full min-h-[559px] bg-cover bg-no-repeat bg-center mx-auto">
        <div className="min-h-[188px] pt-[250px] lg:pt-[302px] w-[75%] mx-auto pb-7">
          <h1 className="text-yellow-header font-bold text-[1.25rem] lg:text-[2.25rem] uppercase leading-9 lg:text-left text-center">
            <span className="border-b border-b-white pb-4">
              Precision. Integrity. Clarity
            </span>
            .
          </h1>

          <p className="lg:leading-9 leading-relaxed font-bold text-[0.75rem] lg:text-[1.125rem] w-full lg:text-left text-center  mt-10 lg:w-[80%] text-white-accent">
            At Oak Surveys, We Provide professional land, building, and
            engineering surveying services that drive confident decisions and
            successful projects. Using advanced equipment and expert knowledge,
            we deliver results you can trust — on time, every time.
          </p>
        </div>
      </section>

      {/* Comprehensive Surveying Solutions */}
      <section className="w-[80%]  mx-auto flex flex-col lg:flex-row justify-between text-gray-text py-20 gap-4 items-center">
        <aside className="basis-[50%]">
          {/* Text */}
          <h1 className="font-bold text-[1.225rem] sm:text-[2.25rem] leading-9">
            COMPREHENSIVE SURVEYING SOLUTIONS
          </h1>
          <p className="font-medium text-[0.75rem] sm:text-[1.25rem] leading-9 py-7">
            From residential developments to large-scale infrastructure
            projects, Oak Surveys provides complete, end-to-end surveying
            services designed for clarity and confidence.
          </p>

          <ul className="flex flex-col gap-4 font-medium text-[0.75rem] sm:text-[1.125rem]">
            <li className="flex gap-2 items-start">
              <img src="/tick-circle.svg" alt="Check image" /> Topographical
              Surveys — Accurate mapping of natural and built features for
              design and planning.
            </li>
            <li className="flex gap-2 items-start">
              <img src="/tick-circle.svg" alt="Check image" /> Measured Building
              Surveys — Detailed internal and external measurements for
              extensions and refurbishments.
            </li>
            <li className="flex gap-2 items-start">
              <img src="/tick-circle.svg" alt="Check image" /> Engineering &
              Setting-Out — Precision control for on-site positioning and
              construction layouts.
            </li>
            <li className="flex gap-2 items-start">
              <img src="/tick-circle.svg" alt="Check image" /> Boundary & Legal
              Mapping — Certified property mapping in compliance with Irish Land
              Registry requirements.
            </li>
            <li className="flex gap-2 items-start">
              <img src="/tick-circle.svg" alt="Check image" /> 3D Laser Scanning
              & BIM — Advanced data capture for digital construction and asset
              modelling.
            </li>
          </ul>
        </aside>

        <aside>
          {/* Image */}
          <img
            src="/building plan image.svg"
            alt="Building plan image"
            className="w-full mt-10 lg:mt-0"
          />
        </aside>
      </section>

      <section className="w-full mx-auto flex flex-col-reverse lg:flex-row justify-center text-gray-text  py-20  items-center bg-form-gray md:bg-transparent">
        <aside>
          {/* Image */}
          <img
            src="/Data.svg"
            alt="Data image"
            className="w-full mt-10 lg:mt-0"
          />
        </aside>

        <aside className=" basis-[60%]">
          {/* Text */}
          <h1 className="font-bold text-[1.225rem] sm:text-[2.25rem] leading-9 px-10 uppercase">
            Building Ireland’s Future with Accurate Data
          </h1>
          <p className="font-medium text-[0.75rem] sm:text-[1.25rem] leading-9 py-7 px-10">
            Oak Surveys provides reliable surveying solutions for engineers,
            architects, developers, and contractors across Ireland, combining
            local expertise with advanced technology for smarter design and
            construction.
          </p>

          <ul className="flex flex-col  gap-4 font-medium text-[0.75rem] sm:text-[1.125rem] px-10">
            <li className="flex gap-2 items-start">
              <img src="/tick-circle.svg" alt="Check image" /> Professional land
              and structural surveys
            </li>
            <li className="flex gap-2 items-start">
              <img src="/tick-circle.svg" alt="Check image" /> Measured building
              and as-built documentation
            </li>
            <li className="flex gap-2 items-start">
              <img src="/tick-circle.svg" alt="Check image" /> Boundary mapping
              and topographical surveys
            </li>
            <li className="flex gap-2 items-start">
              <img src="/tick-circle.svg" alt="Check image" /> Construction
              setting-out and verification
            </li>

            <button className="bg-brand-main rounded py-[22px] px-6 font-medium text-white-variant w-[201px] h-12 flex items-center mt-4 justify-center">
              More About Us
            </button>
          </ul>
        </aside>
      </section>
    </>
  );
}

export default Home;
