import React from "react";

// images
import News1 from "../images/news1.jpg";
import News2 from "../images/news2.jpg";
import News3 from "../images/news3.jpg";

const News = () => {
  return (
    <section className="my-12 grid xl:grid-cols-3 md:grid-cols-1 gap-y-5 gap-x-10 xl:gap-x-5">
      <a href="">
        {" "}
        <div className="flex gap-x-5 xl:gap-x-3 hover:text-orange">
          <img src={News1} alt="News" className="w-28" />
          <div className="flex flex-col gap-y-3.5">
            <h1 className="font-black text-3xl text-primaryColor">01</h1>
            <h4 className="font-black text-xl">Reviving Retro PCs</h4>
            <p className="text-primaryColor">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
      </a>
      <a href="">
        {" "}
        <div className="flex gap-x-5 xl:gap-x-3 hover:text-orange">
          <img src={News2} alt="News" className="w-28" />
          <div className="flex flex-col gap-y-3.5">
            <h1 className="font-black text-3xl text-primaryColor">02</h1>
            <h4 className="font-black text-xl">Top 10 Laptops of 2022</h4>
            <p className="text-primaryColor">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>
      </a>
      <a href="">
        <div className="flex gap-x-5 xl:gap-x-3 hover:text-orange">
          <img src={News3} alt="News" className="w-28" />
          <div className="flex flex-col gap-y-3.5">
            <h1 className="font-black text-3xl text-primaryColor">03</h1>
            <h4 className="font-black text-xl">The Growth of Gaming</h4>
            <p className="text-primaryColor">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </div>
      </a>
    </section>
  );
};

export default News;
