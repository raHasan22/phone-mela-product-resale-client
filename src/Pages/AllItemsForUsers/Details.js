import React from 'react';

const Details = ({details}) => {
    const {brandName, model, ram, rom, camera, processor, battery, os, sellerName, marketPrice, sellingPrice, sellingReason, postDate, usedTime} = details;
    return (
        <>
          <input type="checkbox" id="details-1" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="details-1" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold">Name: {brandName} {model}</h3>
                <p className="pt-4 pb-2">Ram:{ram} Rom;{rom}</p>
                <p className="pb-2">Camera: {camera}</p>
                <p className="pb-2">Processor: {processor}</p>
                <p className="pb-2">OS: {os}</p>
                <p className="pb-2">Battery: {battery}</p>
                <p className="pb-2">Seller Name: {sellerName}</p>
                <p className="pb-2">Reason of Selling: {sellingReason}</p>
                <p className="pb-2">Market Price: {marketPrice}</p>
                <p className="pb-2">Asking Price: {sellingPrice}</p>
                <p className="pb-2">Posted: {postDate}</p>
                <p className="pb-4">Used: {usedTime}</p>
            </div>
            </div>  
        </>
    );
};

export default Details;