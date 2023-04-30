import { AiOutlineArrowRight } from "react-icons/ai";
import { TbCircleNumber1 } from "react-icons/tb";

export default function Features() {
  return (
    <div className="w-full h-max flex flex-col px-10 py-20 text-themeDark">
      <div className="flex flex-col gap-1 py-2">
        <h2 className="font-semibold text-themeBlue text-sm">Features</h2>
        <h1 className="text-4xl font-semibold py-4">
          The only tool you'll ever need
        </h1>
        <h2 className="text-themeMedium tracking-wide max-w-prose">
          Get organized, be smarter. Finish your job search faster with more and
          much better offers!
        </h2>
      </div>
      <div className="flex flex-row">
        <div className="basis-2/3 flex-grow">
          <div className="flex flex-row gap-2">
            <TbCircleNumber1 className="text-5xl rounded-full p-2 bg-themeBlue/20 text-themeBlue" />
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Unlimited cards</h2>
              <p className="leading-8 text-themeMedium">
                Give your team unlimited flexibility.
              </p>
              <p className="text-themeBlue font-medium py-2 flex flex-row items-center gap-2">
                Learn more <AiOutlineArrowRight className="text-lg" />
              </p>
            </div>
          </div>
        </div>
        <div className="basis-1/2 flex-grow">
          <img src="./loginImage.jpg" alt="Features" />
        </div>
      </div>
    </div>
  );
}
