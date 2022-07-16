import React, { useState } from "react";
import axios from "axios";

const Modal = ({customers}) => {

    const [id, setId] = useState(null);
    const [nama, setNama] = useState("");
    const [address, setAddress] = useState("");
    const [country, setCountry] = useState("");
    const [phone, setPhone] = useState("");
    const [job_title, setJobTitle] = useState("");
    const [status, setStatus] = useState(true);
    const [customer, setCustomer] = useState({});

    const handleChange = ({ target }) => {
        const {name, value} = target;
        setCustomer((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const setDisplayModal = event => {
        // to do
    }

    /* POST data to create customer */
    /* To do */
    const handleCreate = async (event) => {
        event.preventDefault();

        const id = customers.length + 1;
        const created_at = new Date();
        const updated_at = created_at;
        const newCustomer = { id, nama, address, country, phone, job_title, status, created_at, updated_at };
        try {
          const response = await axios
          .post(
            "https://mitramas-test.herokuapp.com/customers", newCustomer, {
                headers: {
                  'Authorization': 
                  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9taXRyYW1hcy10ZXN0Lmhlcm9rdWFwcC5jb21cL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjU3OTUzMzgxLCJleHAiOjE2NTc5NTY5ODEsIm5iZiI6MTY1Nzk1MzM4MSwianRpIjoiSlpVSmY0UDF1NTBwcVF0TSIsInN1YiI6MTU4LCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.96owa0r9Op0W65thMq08GGq9jyr5iN8y2ts7JZmvTZM'
                }
            });
          const allCustomers = [...customers, response.data];
        

        } catch (error) {
          console.log(error.message);
        }
      }

      /* DELETE to delete customer */
      /* To do */

      /* PUT to update customer */
      /* To do */


    return (
    <div className="modalContainer">
      <div className="titleCloseBtn">
        <button className="bg-pale-blue shadow p-2 transform transition ease-in-out duration-500 hover:scale-90" onClick={() => setDisplayModal(false)}>X</button>
      </div>
      <div className="title">
        <h1>Add Customer</h1>
      </div>
      <div className="body">
        <form onSubmit={handleCreate} className="flex flex-col bg-gradient-to-r from-light-blue to-light-green drop-shadow-xl rounded-2xl m-6 p-8 text-lg" >
          <div className="flex flex-col items-center my-2">
            <label htmlFor="name" className="font-medium">Name</label>
            <input className="p-2 my-2 rounded-2xl shadow-inner caret-green-600" onChange={handleChange}
                value={ nama || ''}
                name="name"
                type="text"
                placeholder="Enter name..."
                required
            />
          </div>
          <div className="flex flex-col items-center my-2">
            <label htmlFor="address" className="font-medium">Address</label>
            <input className="p-2 my-2 rounded-2xl shadow-inner caret-green-600" onChange={handleChange}
                value={address || ''}
                name="address"
                type="text"
                placeholder="Enter address..."
                required
            />
          </div>
          <div className="flex flex-col items-center my-2">
            <label htmlFor="country" className="font-medium">Country</label>
            <input className="p-2 my-2 rounded-2xl shadow-inner caret-green-600" onChange={handleChange}
                value={country|| ''}
                name="country"
                type="text"
                placeholder="Enter country..."
                required
            />
          </div>
          <div className="flex flex-col items-center my-2">
            <label htmlFor="phone" className="font-medium">Phone number</label>
            <input className="p-2 my-2 rounded-2xl shadow-inner caret-green-600" onChange={handleChange}
                value={phone || ''}
                name="phone"
                type="text"
                placeholder="Enter phone number..."
                required
            />
          </div>
          <div className="flex flex-col items-center my-2">
            <label htmlFor="job" className="font-medium">Job title</label>
            <input className="p-2 my-2 rounded-2xl shadow-inner caret-green-600" onChange={handleChange}
                value={job_title || ''}
                name="job"
                type="text"
                placeholder="Enter job title..."
                required
            />
          </div>
          <div className="flex flex-col items-center my-2">
            <label htmlFor="job" className="font-medium">Status</label>
            <input type="radio" id="active" name="status" value={true} checked/>
            <label htmlFor="active" />Active<br />
            <input type="radio" id="inactive" name="status" value={false} />
            <label htmlFor="inactive" />Inactive
          </div>
        <button type="submit" className="bg-teal drop-shadow-lg rounded-2xl my-4 p-3 font-medium text-white hover:bg-pale-blue hover:text-gray transform transition ease-in-out duration-500 hover:scale-90">Add</button>
        </form>
        <button onClick={() => setDisplayModal(false)} id="cancelBtn">Cancel</button>
      </div>
    </div>
  );
};

export default Modal;