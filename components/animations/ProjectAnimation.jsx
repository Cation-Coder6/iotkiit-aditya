import Lottie from "react-lottie";
import animationData from "./22830-page-construction.json";

const ProjectAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={400} width={370} />;
}

export default ProjectAnimation;