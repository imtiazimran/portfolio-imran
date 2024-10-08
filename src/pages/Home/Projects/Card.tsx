import { cn } from "@/lib/utils";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { Key, useRef } from "react";

type TCardProps = {
  _id?: string;
  title: string;
  description: string;
  src: string;
  links: {
    label: string;
    url: string;
  }[];
  company?: {
    label: string;
    text: string;
  }[];
  color: string;
  i: number;
  range: [number, number];
  target: number;
  progress: MotionValue<number>;
};

const Card = ({
  title,
  description,
  src,
  links,
  company,
  color,
  i,
  range,
  target,
  progress,
}: TCardProps) => {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, target]);

  // Determine if the card should come from the left or right
  const fromLeft = i % 2 === 0;

  const containerVariant = {
    hidden: { opacity: 0, x: fromLeft ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      ref={container}
      className="h-screen flex justify-center items-center gap-6 sticky top-10 md:top-0"
    >
      <motion.div
        className="p-4  relative rounded-lg shadow-lg max-w-4xl mx-auto text-white"
        style={{
          scale,
          backgroundColor: color,
          top: `calc(-10% + ${i * 25}px)`,
        }}
      >
        <h2 className="text-xl md:text-2xl text-center mb-2">{title}</h2>
        <div className="flex justify-between flex-col-reverse md:flex-row items-center gap-5">
          <div className="p-4 bg-opacity-10 md:w-1/2 rounded-md shadow-md border border-white border-opacity-30 mb-4">
            <p className="text-sm md:text-base mb-4">{description}</p>
            <div className={cn(
                company && 'flex flex-row gap-2',
            )}>
              {links?.map((link, index: Key) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:underline"
                >
                  {link.label}
                  <svg
                    className="ml-2"
                    width="22"
                    height="12"
                    viewBox="0 0 22 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              ))}
            </div>
            <div>
              {company && company?.map((comp, i: Key) => (
                <p key={i}>
                  {comp.label} : {comp.text}
                </p>
              ))}
            </div>
          </div>
          <div className="md:w-2/4 h-64 overflow-hidden rounded-[25px]">
            <motion.div
              style={{ scale: imageScale }}
              className="w-full  h-max transform translate-y-0 "
            >
              <img
                src={src}
                alt={title}
                className="object-cover w-full h-full transition-transform duration-1000 ease-linear hover:-translate-y-[calc(100%-18rem)]"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card;
