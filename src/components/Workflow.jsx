import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/video.mp4";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="mt-20 bg-neutral-900 py-10">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide text-white">
        Плюсы{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          ИИ брэнда.
        </span>
      </h2>
      <div className="flex flex-wrap justify-center items-center max-w-6xl mx-auto px-4">
        <div className="p-2 w-full lg:w-1/2">
          <video
            autoPlay
            loop
            muted
            className="rounded-lg border-4 border-orange-500 w-full max-w-md shadow-lg"
          >
            <source src={codeImg} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="pt-12 w-full lg:w-1/2 lg:pl-10">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-8">
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl text-white">{item.title}</h5>
                <p className="text-md text-neutral-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;