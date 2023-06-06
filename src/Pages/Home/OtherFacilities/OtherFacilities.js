import React, { useState } from "react";
import AccordianItem from "./AccordianItem";

const OtherFacilities = () => {
    const [open, setOpen] = useState(false);

    const toggle = (index) =>{
        if(open === index){
            return setOpen(null);
        }
        setOpen(index)
    }

    const accordionData = [
        {
           title: "Our Warranty",
           desc: "We provide service warranty to all parts without battery and display upto 1 year. And we have seven days" 
        },
        {
           title: "Repairing Service",
           desc: "We also provide paid repairing services any type of product sold by us" 
        },
        {
           title: "Accessories",
           desc: "We will start selling original Accessories in this month" 
        }
    ]
  return (
    <div className="mx-5 max-w-[1200px] lg:mx-auto my-10">
      <div className="mb-5">
        <h1 className="text-4xl text-center font-bold">Other Facilities</h1>
      </div>
     

      <div className="bg-teal-900 rounded-xl lg:h-screen grid place-items-center">
        <div className="px-10 py-5 max-w-[1000px]">
            {
                accordionData.map((data, index) =>{
                    return <AccordianItem 
                    key={index}
                    open={index === open}
                    title={data.title}
                    desc={data.desc}
                    toggle={()=>toggle(index)}
                    />
                })
            }
        </div>

      </div>

      
    </div>
  );
};

export default OtherFacilities;
