import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Card from "./Card";
import PHC from "../../../assets/image/certificates/PHC.jpg";
import PHBB from "../../../assets/image/certificates/PHBB.jpg";
import eLearnWeb from "../../../assets/image/certificates/eLearnWeb.jpg";
import eLearnMSOffice from "../../../assets/image/certificates/eLearnMSOffice.jpg";
import NYDC from "../../../assets/image/certificates/NYDC.jpg";
import BTEB from "../../../assets/image/certificates/BTEB.jpg";
const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  const cards = [
    {
      url: PHC,
      title: "Programming Hero Certification",
      id: 1,
    },
    {
      url: PHBB,
      title: "Black Belt From Programming Hero",
      id: 2,
    },
    {
      url: eLearnWeb,
      title: "e-Learn Web Development Certificate",
      id: 3,
    },
    {
      url: eLearnMSOffice,
      title: "e-Learn Microsoft Office Certificate",
      id: 4,
    },
    {
      url: NYDC,
      title: "National Youth Development Certificate",
      id: 5,
    },
    {
      url: BTEB,
      title: "Bangladesh Technical Education Board Certificate",
      id: 6,
    },
  ];

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <h1 className="text-3xl md:text-5xl font-bold text-white text-center py-3">
        Certificates
      </h1>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;
