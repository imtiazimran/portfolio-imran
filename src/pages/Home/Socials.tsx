/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  SiFacebook,
  SiFiverr,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiUpwork,
  SiWhatsapp,
} from "react-icons/si";
import { useAnimate } from "framer-motion";
import { MouseEvent } from "react";


const Socials = () => {
  return (
    <div className="divide-y divide-white border border-white">
      <div className="grid grid-cols-2 divide-x divide-white">
        <LinkBox Icon={SiFiverr} href="https://www.fiverr.com/s/qDddeQ9" />
        <LinkBox Icon={SiUpwork} href="https://www.upwork.com/freelancers/~016b608d031c985f25" />
      </div>
      <div className="grid grid-cols-3 divide-x divide-white">
        <LinkBox Icon={SiGithub} href="https://github.com/imtiazimran" />
        <LinkBox Icon={SiLinkedin} href="https://www.linkedin.com/in/md-imran-593754166/" />
        <LinkBox Icon={SiWhatsapp} href="https://wa.me/message/AAKVO46COJULC1" />
      </div>
      <div className="grid grid-cols-2 divide-x divide-white">
        <LinkBox Icon={SiFacebook} href="https://www.facebook.com/rbimran0/" />
        <LinkBox Icon={SiInstagram} href="https://www.instagram.com/imtiazimran080/" />
      </div>
    </div>
  );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

type LinkBoxProps = {
  Icon: React.ComponentType<{ className?: string }>;
  href: string;
};


const LinkBox = ({ Icon, href } : LinkBoxProps) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e : any) => {
    const box = e.target.getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left",
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right",
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top",
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom",
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e : MouseEvent) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side as keyof typeof ENTRANCE_KEYFRAMES],
    });
  };

  const handleMouseLeave = (e: MouseEvent) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side as keyof typeof EXIT_KEYFRAMES],
    });
  };

  return (
    <a
      href={href}
      onMouseEnter={(e: MouseEvent<HTMLAnchorElement>) => {
        handleMouseEnter(e);
      }}
      onMouseLeave={(e: MouseEvent<HTMLAnchorElement>) => {
        handleMouseLeave(e);
      }}
      className="relative grid h-20 w-full place-content-center sm:h-28 md:h-36 "
    >
      <Icon className="text-xl sm:text-3xl lg:text-4xl text-white" />

      <div
        ref={scope}
        style={{
          clipPath: BOTTOM_RIGHT_CLIP,
        }}
        className="absolute inset-0 grid place-content-center bg-blue-900 text-white"
      >
        <Icon className="text-xl sm:text-3xl md:text-4xl" />
      </div>
    </a>
  );
};

export default Socials;