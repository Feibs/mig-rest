import React, { useState, useEffect } from "react";
import axios from "axios";
import Customer from "../components/customer";
import Modal from "../components/modal";

const Home = () => {
    const [customers, setCustomers] = useState([]);
    const [displayedCustomers, setDisplayedCustomers] = useState([]);

    /* GET data of all customers*/
    useEffect(() => {
        const fetchCustomers = async () => {
          try {
            const response = await axios.get("https://mitramas-test.herokuapp.com/customers", {
                headers: {
                  'Authorization': 
                  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9taXRyYW1hcy10ZXN0Lmhlcm9rdWFwcC5jb21cL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjU3OTYwNDIxLCJleHAiOjE2NTc5NjQwMjEsIm5iZiI6MTY1Nzk2MDQyMSwianRpIjoiYlR0cG1lR2ZXaWIySUlLQSIsInN1YiI6MTU4LCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.RjOo79BRf3mCds4I9v1gAVx1iGc8jo8yKz64s__TcCI'
                }
            })
            setCustomers(response.data.data);
            setDisplayedCustomers(response.data.data);
          } catch (error) {
                console.log(error.message);
          }
        }
        fetchCustomers();
    }, [])

    /* Sort customers by name alphabetically ascending */
    const sortCustomers = event => {
        const sortQuery = event.target.value
        if (sortQuery === "yes"){
            const sortCustomers = [].concat(customers);
            const sortedCustomers = sortCustomers.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
            setDisplayedCustomers(sortedCustomers);
        } else {
            setDisplayedCustomers(customers);
        }
    }

    /* Search customers by name */
    const searchCustomers = event => {
        const searchQuery = event.target.value.toLowerCase();
        const filteredCustomers = customers.filter(displayedCustomers => displayedCustomers.name.toLowerCase().includes(searchQuery));
        setDisplayedCustomers(filteredCustomers);
    }

    /* Filter customers by status */
    const filterStatus = event => {
        const filterQuery = event.target.value;
        if (filterQuery === "active"){
            setDisplayedCustomers(customers.filter(displayedCustomers => displayedCustomers.status));
        } else if (filterQuery === "inactive"){
            setDisplayedCustomers(customers.filter(displayedCustomers => !displayedCustomers.status));
        } else{
            setDisplayedCustomers(customers);
        }
    }

    return (
        <div className="">
            <h1 className="text-center">Welcome</h1>

            <label>Sort Name</label>
            <button type="button" 
            value="no" 
            onClick={(event) => sortCustomers(event)}
            className="bg-teal drop-shadow-lg rounded-2xl my-4 p-3 font-medium text-white">No need</button>

            <button type="button" 
            value="yes" 
            onClick={(event) => sortCustomers(event)}
            className="bg-teal drop-shadow-lg rounded-2xl my-4 p-3 font-medium text-white">Yes alphabetically</button>
<br />
            <label>Filter Status</label>
            <button type="button" 
            value="no" 
            onClick={(event) => filterStatus(event)}
            className="bg-teal drop-shadow-lg rounded-2xl my-4 p-3 font-medium text-white">No need</button>

            <button type="button" 
            value="active" 
            onClick={(event) => filterStatus(event)}
            className="bg-teal drop-shadow-lg rounded-2xl my-4 p-3 font-medium text-white">Active</button>

            <button type="button" 
            value="inactive" 
            onClick={(event) => filterStatus(event)}
            className="bg-teal drop-shadow-lg rounded-2xl my-4 p-3 font-medium text-white">Inactive</button>
<br />
            <input 
            className="p-2 my-2 rounded-2xl shadow-inner caret-green-600"
            type="text"
            placeholder="Search for name(s) here..."
            onChange={(event) => searchCustomers(event)} />

            <div className="md:grid grid-cols-2 xl:grid-cols-3">
                {displayedCustomers.map((customer, id) => (
                    <div key={id}>
                        <Customer customer={customer} />
                    </div>
                ))}
            </div>
      </div>
    );
};

export default Home;

