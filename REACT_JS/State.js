import { useState } from "react";
import './App.css';

function State() {

    const [input, setInput] = useState({
        name: "",
        email: "",
        address: "",
        phone: "",
        dept: ""
    });

    const [res, setRes] = useState(null);

    const handelInputChange = (e) => {
        setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handelLogin = (e) => {
        e.preventDefault();
        setRes(input);
    };

    return (
        <>
            <div className="state">
                <h1>Registration</h1>

                <label>Full Name</label>
                <input type="text"
                    name="name"
                    placeholder='Enter a Name'
                    onChange={handelInputChange}
                    value={input.name}
                    className="text" />

                <label>Email</label>
                <input type="email"
                    name="email"
                    placeholder='Enter your Email'
                    onChange={handelInputChange}
                    value={input.email}
                    className="text" />
                
                <label>Phone Number</label>
                <input type="number"
                    name="phone"
                    placeholder='Enter Phone number'
                    onChange={handelInputChange}
                    value={input.phone}
                    className="text" />
 

                <label>Address</label>
                <textarea type="text"
                    name="address"
                    placeholder='Enter your Address'
                    onChange={handelInputChange}
                    value={input.address}
                    rows="3"> </textarea>


                <label>Department</label>
                <select 
                onChange={handelInputChange} 
                value={input.dept}
                name="dept">

                    <option value="">-- Select Department --</option>
                    <option value="MCA">MCA</option>
                    <option value="Msc">Msc IT</option>
                    <option value="CSE">CSE</option>
                    <option value="ECE">ECE</option>
                    <option value="EEE">EEE</option>
                </select>

                <button onClick={handelLogin}>Submit</button>

                {res && (
                    <p className="result">
                        Name: {res.name} <br />
                        Email: {res.email} <br />
                        Department: {res.dept}
                    </p>
                )}
            </div>
        </>
    );
}

export default State;

