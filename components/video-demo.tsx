import React from "react";
import Image from "next/image";

const VideoDemo = () => (
  <div className="px-6 relative">
    <Image
      width={100}
      height={405}
      src={"/demo3.gif"}
      className="h-full rounded-3xl w-full object-cover border-8 overflow-clip"
      alt="demo"
    />
  </div>
);

export default VideoDemo;
