import React, { useState } from 'react'
import axios from '../axios/axios';

const Amount = ({baseCurrency, targetCurrency}) => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (baseCurrency === "") {
            //error handling
            setError("Select base currency");
            //set timeout 
            setTimeout(function() {
                setError("")
            }, 2000);
        } 
        else if (targetCurrency === "") {
            //error handling
            setError("Select target currency");
            //set timeout 
            setTimeout(function() {
                setError("")
            }, 2000);
        } 
        else if (input === "") {
            //error handling
            setError("Input Amount");
            //set timeout 
            setTimeout(function() {
                setError("")
            }, 2000);
        } 
        else {
            try {
                //set loading to true
                setLoading(true);

                //fetch rate from the endpoint
                const res = await axios.get(`/simple/price?ids=${baseCurrency}&vs_currencies=${targetCurrency}`);
                
                //destruture to get the rate
                const data = res && Object.values(res.data).map((base) => {
                    return Object.values(base).map(target =>  { return target})
                });

                const rate = data[0]; //rate
                const conversion = input * rate; //currency conversion formula
                setResult(conversion);// update conversion result

                //set loading to true
                setLoading(false);
            } catch(err) {
                
            };
        }
        setInput("")
    };

    return (
        <div className="card m-2">
            <div className="card-header">
                <h3 className="text-center text-white">Amount & Results</h3>
            </div>
            <div className="card-body">
            <div className="form-group">
                <label className="text-white" for="amount">Amount($)</label>
                <input id="amount" placeholder="Enter amount" value={input} className="form-control" type="number" onChange={(e) => setInput(e.target.value)}/>
            </div>
            </div>
            <div className="text-center my-2">
                <button className="btn btn-light" onClick={handleSubmit}>Convert</button>
            </div>
            <div className="text-center my-2">
                {loading && <h5  className="text-white">Loading...</h5>}
                {result && <h3 className="text-success">{result} {targetCurrency}</h3>}
                {error && <h5 className="text-danger">{error}</h5>}
            </div>
        </div>
    )
}

export default Amount
