import React from "react";

const Review = () => {
  return (
    <div className="mx-5 max-w-[1200px] lg:mx-auto my-10 font-sans bg-[#000235] text-white rounded">
      <div className="text-center py-10">
        <h5 className="text-[#abd9d9]">Reviews</h5>
        <h1 className="text-4xl w-96 mx-auto landing-normal mb-5">
          Read What Reviewers Have to say
        </h1>
        <div className="flex max-w-5xl mx-auto gap-8 group">
          <div className="bg-white/10 duration-500 cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 p-8 rounded-xl mix-blend-luminosity">
            <img
              className="rounded-full h-20 w-20 mx-auto"
              src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"
              alt=""
            />
            <h4 className="uppercase font-bold">John Miller</h4>
            <p className="text-sm leading-7 my-3 font-light opacity-50">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              tempora natus illo nobis dolorum ratione blanditiis maiores, dolor
              molestiae architecto.
            </p>
            <button className="bg-[#7e7ee3] py-2.5 px-8 rounded-full">
              ADD Review
            </button>
          </div>
          <div className="bg-white/10 duration-500 cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 p-8 rounded-xl mix-blend-luminosity">
            <img
              className="rounded-full h-20 w-20 mx-auto"
              src="https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg"
              alt=""
            />
            <h4 className="uppercase font-bold">Marry Queen</h4>
            <p className="text-sm leading-7 my-3 font-light opacity-50">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              tempora natus illo nobis dolorum ratione blanditiis maiores, dolor
              molestiae architecto.
            </p>
            <button className="bg-[#7e7ee3] py-2.5 px-8 rounded-full">
              ADD Review
            </button>
          </div>
          <div className="bg-white/10 duration-500 cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 p-8 rounded-xl mix-blend-luminosity">
            <img
              className="rounded-full h-20 w-20 mx-auto"
              src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-762020.jpg&fm=jpg"
              alt=""
            />
            <h4 className="uppercase font-bold">Angelina</h4>
            <p className="text-sm leading-7 my-3 font-light opacity-50">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              tempora natus illo nobis dolorum ratione blanditiis maiores, dolor
              molestiae architecto.
            </p>
            <button className="bg-[#7e7ee3] py-2.5 px-8 rounded-full">
              ADD Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
