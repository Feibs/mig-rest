import React from "react";
import location from "../assets/location.png";
import phone from "../assets/phone.png";

const Customer = ({customer}) => {
  return (
        <div className="bg-gradient-to-r from-light-blue to-light-green drop-shadow-xl rounded-2xl m-6 p-8 text-lg 
        transform transition ease-in-out duration-500 hover:scale-105">
            <div className="flex justify-between">
                <div className="flex flex-col justify-center py-4 pr-6">
                    <p className="font-bold text-xl">
                        {customer.name}
                    </p>
                    <p className="italic">
                        {customer.job_title}
                    </p>
                </div>
                <div className="flex justify-center items-center text-2xl text-gray font-bold">
                    {customer.id}
                </div>
            </div>
            <hr className="text-gray"/>
            <div className="py-4">
                <div className="flex items-start mb-2" >
                    <img src={location} alt="" className="mr-3 mt-0.5 w-7"></img>
                    <p>{customer.address}, <br />{customer.country}</p>
                </div>
                <div className="flex items-center">
                    <img src={phone} alt="" className="mr-3 mt-0.5 w-7"></img>
                    <p>{customer.phone_number}</p>
                </div>
            </div>
            <div className="text-sm text-gray italic text-center py-4">
                <p>created at {customer.created_at}</p>
                <p>updated at {customer.updated_at}</p>
            </div>
        </div>
  );
};

export default Customer;