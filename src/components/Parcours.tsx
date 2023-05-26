import Image from "next/image";

export const Parcours = () => {
  return (
    <section id="parcours">
      <div className="left">
        <h2 id="parcoursHead" className="textYellow">
          Parcours
        </h2>

        <div className="retroBike1">
          <Image
            src="/retro_bike.png"
            alt="retro bike"
            width={500}
            height={500}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
      <div className="right">
        <Image
          id="plannetje"
          src="/parcours.jpg"
          alt="parcours race"
          width={500}
          height={500}
          style={{ objectFit: "contain" }}
        />
      </div>
    </section>
  );
};
