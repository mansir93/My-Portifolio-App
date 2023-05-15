import React from "react";

const Testimonial = () => {
  return (
    <section>
      <h3>Testimonial</h3>
    <div className="flex justify-center max-md:flex-col">
      <div className="w-80">
        <div>
          <img src={require("../Assets/client-1.jpg")} alt="client"/>
        </div>
        <div>
          <h3>Yakubu Mutallib</h3>
          <p>
            Very pleased with my new website. Mansir was easy to work
            with and very knowledgeable. The process of working with him really
            forced me to consider what I wanted — both graphic content and
            wording — and in turn take ownership. Highly recommended.
          </p>
        </div>
      </div>
      <div className="w-80">
        <div>
          <img src={require("../Assets/client-1.jpg")} alt="client"/>
        </div>
        <div>
          <h3>Yakubu Mutallib</h3>
          <p>
            Very pleased with my new website. Mansir was easy to work
            with and very knowledgeable. The process of working with him really
            forced me to consider what I wanted — both graphic content and
            wording — and in turn take ownership. Highly recommended.
          </p>
        </div>
      </div>
      <div className="w-80">
        <div>
          <img src={require("../Assets/client-1.jpg")} alt="client"/>
        </div>
        <div>
          <h3>Yakubu Mutallib</h3>
          <p>
            Very pleased with my new website. Mansir was easy to work
            with and very knowledgeable. The process of working with him really
            forced me to consider what I wanted — both graphic content and
            wording — and in turn take ownership. Highly recommended.
          </p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Testimonial;
