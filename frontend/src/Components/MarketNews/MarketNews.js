// MarketNews.js
import "animate.css";
import TopStoriesWidget from "../../Widgets/TopStories/TopStories";
import HeatMapWidget from "../../Widgets/HeatMap/HeatMap";

const MarketNews = () => {
  return (
    <div className="">
      <div className="relative bg-hero-image bg-cover w-full h-screen ">
        <div className="w-full block  " style={{ height: "80vh" }}>
          <div className="md:pl-28 pt-24 animate__animated animate__fadeInDown md:text-left">
            <h1 className="text-5xl lg:text-7xl text-header ">
              Stay up to date with the market
            </h1>

            <h1 className="text-subheader my-10">
              Find out all the latest reports to get the edge.
            </h1>

            <button className="w-[200px] bg-transparent border-2 border-green-500 text-primary rounded-full p-3 text-2xl hover:bg-green-500 hover:text-white transition-all duration-300">
              Learn More
            </button>
          </div>

          <div className="bg-hero-image pt-24 block h-screen justify-center">
            <div className="">
              <h1 className="text-header text-3xl lg:text-5xl">
                Latest Stories
              </h1>
              <h1 className="text-subheader text-xl lg:text-3xl pt-4">
                Study the movement of the market.
              </h1>
            </div>
            <div className="bg-hero-image text-left flex pt-10 p-12 h-3/5">
              <TopStoriesWidget />
            </div>
          </div>
          <div className="bg-hero-image  block h-screen justify-center">
            <div className="">
              <h1 className="text-header text-3xl lg:text-5xl">Heatmap</h1>
              <h1 className="text-subheader text-xl lg:text-3xl pt-4">
                Group stocks that match together.
              </h1>
            </div>
            <div className="bg-hero-image flex  p-12 h-screen">
              <HeatMapWidget />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketNews;
