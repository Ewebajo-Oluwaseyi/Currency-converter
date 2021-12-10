import React, { useEffect, useState } from 'react'
import axios from '../axios/axios';

const BaseCurrency = ({setBaseCurrency}) => {

    const [bases, setBases] = useState("");

    useEffect(() => {
        //fetch list of coin from endpoint
        const fetchData = async() => {
            try {
                const res = await axios.get("/coins/list?include_platform=false");
                setBases(res.data)
            } catch(err) {
                
            }
        }

        fetchData();
        //eslint-disable-next-line
    }, []);

    const handleSelect = (e) => {
        //update state of base currency
        setBaseCurrency(e.target.value)
    }

    return (
        <div className="card m-2 shadow-lg rounded">
            <div className="card-header">
                <h4 className="text-center text-white">Base Currency</h4>
            </div>
            <div className="card-body">
                <div className="form-group">
                    <label className="text-white" for="base">Base Currency</label>
                    <select id="target" className="form-control" onChange={handleSelect}>
                        <option selected>Select a base currency</option>
                        {bases && bases.map((base, index) =>
                            <option value={base.id} key={index}>{base.name}</option> 
                        )}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default BaseCurrency
