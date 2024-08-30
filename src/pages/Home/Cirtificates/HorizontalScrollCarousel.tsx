import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Card from "./Card";

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

   const cards = [
    {
      url: "../../../assets/image/certificates/PHC.jpg",
      title: "Programming Hero Certification",
      id: 1,
    },
    {
        url: "../../../assets/image/certificates/PHBB.jpg",
        title: "Black Belt From Programming Hero",
      id: 2,
    },
    {
        url: "../../../assets/image/certificates/eLearnWeb.jpg",
        title: "e-Learn Web Development Certificate",
      id: 3,
    },
    {
        url: "../../../assets/image/certificates/eLearnMSOffice.jpg",
        title: "e-Learn Microsoft Office Certificate",
      id: 4,
    },
    {
        url: "../../../assets/image/certificates/NYDC.jpg",
        title: "National Youth Development Certificate",
      id: 5,
    },
    {
        url: "../../../assets/image/certificates/BTEB.jpg",
        title: "Bangladesh Technical Education Board Certificate",
      id: 6,
    },
    {
      url: "/imgs/abstract/7.jpg",
      title: "Title 7",
      id: 7,
    },
  ];

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
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
