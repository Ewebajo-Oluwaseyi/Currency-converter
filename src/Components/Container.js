import React, {useState} from 'react';
import TargetCurrency from './TargetCurrency';
import BaseCurrency from './BaseCurrency';
import Amount from './Amount';

const Container = () => {
    //set initial state and updated function to be passed as props base-currency and target-currency component
    const [baseCurrency, setBaseCurrency] = useState("");
    const [targetCurrency, setTargetCurency] = useState("");

    return (
        <div className="container mt-4 mt-lg-0">
            <div className="row mb-4">
                <h2 className="text-center text-white">
                    Currency Converter 
                    <i className="fas fa-exchange-alt text-white mx-2"></i>
                </h2>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <BaseCurrency setBaseCurrency={setBaseCurrency}/>
                </div>
                <div className="col-md-6">
                    <TargetCurrency setTargetCurency={setTargetCurency}/>
                </div>
                <div className="col-md-6 mx-auto mb-4">
                    <Amount baseCurrency={baseCurrency} targetCurrency={targetCurrency}/>
             </div>
            </div>
      </div>
    )
}

export default Container;
