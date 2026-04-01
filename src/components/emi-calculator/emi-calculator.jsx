import { useCallback, useState } from "react"

export function EMICalculator(){

    const [amount, setAmount] = useState(100000);
    const [years, setYears] = useState(1);
    const [rate, setRate] = useState(10.45);
    const [emi, setEmi] = useState(0);

    function handleAmountChange(e){
        setAmount(e.target.value);
        handleCalculate();
    }

    function handleYearChange(e){
        setYears(e.target.value);
        handleCalculate();
    }

    function handleRateChange(e){
        setRate(e.target.value);
        handleCalculate();
    }

    const handleCalculate = useCallback(()=>{
        
        let P = parseInt(amount);
        let R = parseFloat(rate)/12/100;
        let N = parseInt(years) * 12; 
        let EMI = P * R * (Math.pow(1+R,N)) / (Math.pow(1+R,N)) - 1;
        setEmi(EMI);

    },[amount, years, rate])

    return(
        <div className="container-fluid">
            <div className="row mt-4">
                <div className="col-8">
                   <div className="rounded p-5 text-center rounded-4 text-dark" style={{backgroundColor:'#cdcdf2ff'}}>
                        <div className="row">
                            <div className="col d-flex justify-content-baseline ">
                                <label className="fw-bold">Loan Amount</label>
                            </div>
                            <div className="col d-flex justify-content-end">
                                <input type="text" onChange={handleAmountChange} value={amount} className="form-control w-50" />
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col">
                                <input type="range" onChange={handleAmountChange} className="form-range" min={100000} max={1000000} value={amount} step={10000}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex justify-content-baseline ">
                                <label className="fw-bold">&#8377; 1,00,000/-</label>
                            </div>
                            <div className="col d-flex justify-content-end">
                                <label className="fw-bold">&#8377; 10,00,000/-</label>
                            </div>
                        </div>




                        <div className="row mt-4">
                            <div className="col d-flex justify-content-baseline ">
                                <label className="fw-bold">Loan Tenure</label>
                            </div>
                            <div className="col d-flex justify-content-end">
                                <input type="text" onChange={handleYearChange} value={years} className="form-control w-25" />
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col">
                                <input type="range" onChange={handleYearChange} className="form-range" min={1} max={5} value={years} step={1}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex justify-content-baseline ">
                                <label className="fw-bold">1 Year</label>
                            </div>
                            <div className="col d-flex justify-content-end">
                                <label className="fw-bold">5 Years</label>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col d-flex justify-content-baseline ">
                                <label className="fw-bold">Interest Rate</label>
                            </div>
                            <div className="col d-flex justify-content-end">
                                <input type="text" onChange={handleRateChange} value={rate} className="form-control w-25" />
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col">
                                <input type="range" onChange={handleRateChange} className="form-range" min={10.45} max={19.45} value={rate} step={0.01}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex justify-content-baseline ">
                                <label className="fw-bold">10.45%</label>
                            </div>
                            <div className="col d-flex justify-content-end">
                                <label className="fw-bold">19.45%</label>
                            </div>
                        </div>

                      <div className="row mt-2">
                            <div className="col text-end">
                                <button onClick={handleCalculate} className="btn btn-primary">Calculate</button>
                            </div>
                      </div>

                    </div>
                </div>
                <div className="col-4">
                    <div className="rounded p-5 text-center rounded-4" style={{backgroundColor:'#cdcdf2ff'}}>
                        <div>Your monthly EMI will be</div>
                        <div className="fs-1 fw-bold">
                            {emi.toLocaleString('en-in', {style:'currency', currency:'INR', minimumFractionDigits:0, maximumFractionDigits:0})}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}