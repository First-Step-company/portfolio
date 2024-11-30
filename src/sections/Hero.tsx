import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
export const HeroSection = () => {
  return <div>
    <div className="container">
    <Image src={memojiImage} alt="Person"  />
        <div>
            <div></div>
            <div>Available for new project</div>
        </div>
        <h1>Building Exceptional User Experiences</h1>
        <p>I am a skilled front-end developer with a passion for crafting intuitive and visually stunning digital products.</p>
    </div>
  </div>;
};
