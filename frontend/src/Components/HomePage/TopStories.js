import React from "react";
import TopStoriesWidget from "../../Widgets/TopStories/TopStories";

const Stories = ({ storiesSectionRef }) => {
  return (
    <div
      ref={storiesSectionRef}
      className="bg-about-section-banner w-full h-screen"
    >
      <div className="flex h-screen">
        <div className="w-3/5 text-left flex p-24">
          <TopStoriesWidget />
        </div>
      </div>
    </div>
  );
};

export default Stories;
