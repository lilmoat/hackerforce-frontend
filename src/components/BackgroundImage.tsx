import Image from "next/image";

const BackgroundImage = () => (
  <div className="absolute top-0 right-0 bottom-0 left-0 -z-50">
    {/* <Image src="/Bg2.png" alt="Background" width={719} height={700} priority /> */}
    <div className="lines">
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  </div>
);

export default BackgroundImage;
