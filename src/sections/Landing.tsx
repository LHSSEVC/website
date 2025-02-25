import graphic1 from "../assets/graphic1.png";
import graphic2 from "../assets/graphic2.png";
import pic4 from "../assets/pic4.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Landing = () => {
    return (
        <div className="Landing block lg:flex px-[5rem] h-auto lg:h-[90vh] from-bg to-gray-800 via-bg bg-gradient-to-r">
            <div className="w-[100%] lg:w-[50%] mt-[10rem]">
                <h2 className="text-dimmed text-2xl mb-4">
                    Laurel Heights Electric Vehicle Club
                </h2>
                <h1 className="text-6xl mb-8 font-bold">
                    Building for a <span className="gradient">sustainable</span>{" "}
                    future.
                </h1>
                <p className="text-dimmed text-xl">
                    Join a team of creative and curious students who are
                    passionate about pushing the boundaries of what's possible
                    in electric vehicle design and racing.
                </p>
                <button
                    onClick={() => (window.location.href = "/package.pdf")}
                    className="mt-8 py-2 px-8 bg-gradient-to-r from-cyan-500 to-blue-500 hover:brightness-90 font-bold"
                >
                    Sponsor the innovators of tomorrow{" "}
                    <i className="bi bi-arrow-right" />
                </button>
            </div>
            <div className="flex flex-col justify-center items-center w-[100%] lg:w-1/2 pr-0 lg:pr-[6rem] images">
                <LazyLoadImage
                    src={graphic1}
                    alt="graphic1"
                    className="w-[45%] rounded-xl translate-y-[3rem] z-0 ml-auto"
                    effect='blur'
                    ></LazyLoadImage>
                <LazyLoadImage
                    src={pic4}
                    alt="pic4"
                    className="w-[70%] rounded-xl z-10 mr-auto ml-auto"
                    effect='blur'
                ></LazyLoadImage>
                <LazyLoadImage
                    src={graphic2}
                    alt="graphic2"
                    className="w-[35%] z-20 rounded-xl translate-y-[-4rem] mr-auto"
                    effect='blur'
                ></LazyLoadImage>
            </div>
        </div>
    );
};

export default Landing;
