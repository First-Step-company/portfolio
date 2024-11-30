import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import Image from "next/image";
export const HeroSection = () => {
  return <div className="py-32">
    <div className="container">
        <div className="flex flex-col items-center">
    <Image src={memojiImage} className="size-[100px]" alt="Person"  />
        <div className="bg-gray-900 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-medium">Available for new project</div>
        </div>
        </div>
        <h1 className="font-serif text-3xl text-center mt-8">Building Exceptional User Experiences</h1>
        <p>I specialize in transforming designs into functional,
            high-perfoming web applications. Let&apos;s discuss your next project.
        </p>
        <div>
            <button>
                <span>Explore My Work</span>
                <ArrowDown/>
            </button>
            <button>
                <span>👋</span>
                <span>Lest&apos;s Connect</span>
            </button>
        </div>
    </div>
  </div>;
};
