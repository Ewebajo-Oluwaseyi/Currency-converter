import React, { useEffect, useState } from 'react';
import axios from '../axios/axios';

const TargetCurrency  = ({setTargetCurency}) => {
    const [targets, setTargets] = useState([])
    useEffect(() => {
        //fetch target currency from endpoint
        const fetchData = async() => {
            try {
                const res = await axios.get("/simple/supported_vs_currencies");
                console.log(res.data)
                setTargets(res.data)
            } catch(error) {
                console.log(error)
            }
        }

        fetchData();
        //eslint-disable-next-line
    }, []);

    const handleSelect = (e) => {
         //update state of target currency
        setTargetCurency(e.target.value)
    }

    return (
        <div className="card m-2 shadow-lg rounded">
            <div className="card-header">
                <h4 className="text-center text-white">Target Currency</h4>
            </div>
            <div className="card-body">
                <div className="form-group">
                    <label className="text-white" for="target">Target Currency</label>
                    <select id="target" className="form-control" onChange={handleSelect}>
                        <option selected>Select a target currency</option>
                        {targets && targets.map((target, index) =>
                            <option value={target} key={index}>{target}</option> 
                        )}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default TargetCurrency
