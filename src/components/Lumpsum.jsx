import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
import Mfund from './Mfund.jsx';
Chart.register(ArcElement);

function Lumpsum() {
  const [sip, setSip] = useState(25000);
  const [expectedReturnRate, setExpectedReturnRate] = useState(12);
  const [timePeriod, setPeriod] = useState(10);
  const [futureValue, setFutureValue] = useState(0);
  const [estimatedReturn, setEstimatedReturn] = useState(0);
  const [chartData, setChartData] = useState([32, 52]);
  const [showMFund, setShowMFund] = useState(false); // State to track SIP button click

  const handleSliderChange = (e, setValue) => {
    const newValue = parseInt(e.target.value);
    setValue(newValue);
    const result = calculate(sip, expectedReturnRate, timePeriod);
    setFutureValue(result.futureValue);
    setEstimatedReturn(result.estimatedReturn);
    updateChartData();
  };

  const lumpSum = (number) => {
    let numString = number.toString();
    let sum = 0;
    for (let i = 0; i < numString.length; i++) {
      sum += parseInt(numString[i]);
    }
    return sum;
  };

  const calculate = (monthlyInvestment, annualInterestRate, years) => {
    const monthlyInterestRate = annualInterestRate / 12 / 100;
    const numberOfMonths = years * 12;
    const futureValue = lumpSum(monthlyInvestment) * (((Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1) / monthlyInterestRate) * (1 + monthlyInterestRate));
    const estimatedReturn = futureValue - (lumpSum(monthlyInvestment) * numberOfMonths);
    return {
      futureValue: futureValue.toFixed(2),
      estimatedReturn: estimatedReturn.toFixed(2)
    };
  };
  const data = {
    datasets: [
      {
        data: chartData,
        backgroundColor: ['blue', 'red'],
        borderColor: ['blue', 'red'],
        borderWidth: 1,
      },
    ],
  };

  const updateChartData = () => {
    const bluePercentage = (timePeriod / 30) * 100; 
    const redPercentage = 100 - bluePercentage;

    setChartData([bluePercentage, redPercentage]);
  };

  const handleSipButtonClick = () => {
    setShowMFund(true); // Set state to show MFund component
  };

  if (showMFund) {
    return <Mfund />; // Render MFund component if SIP button clicked
  }

  return (
    <>
      <div className="sip-calculator">
        <h1>LumpSum Calculator</h1>
        <button onClick={handleSipButtonClick}>SIP</button> {/* Added onClick handler */}
        <div className="input-fields">
          <div className="input-field">
            <label htmlFor="sip">Monthly Investment</label>
            <input
              type="range"
              id="sip"
              min="0"
              max="100000"
              step="1000"
              value={sip}
              onChange={(e) => handleSliderChange(e, setSip)}
            />
            <span>{sip}</span>
          </div>
          <div className="input-field">
            <label htmlFor="expectedReturnRate">Expected Return Rate (p.a)</label>
            <input
              type="range"
              id="expectedReturnRate"
              min="0"
              max="20"
              step="0.1"
              value={expectedReturnRate}
              onChange={(e) => handleSliderChange(e, setExpectedReturnRate)}
            />
            <span>{expectedReturnRate}%</span>
          </div>
          <div className="input-field">
            <label htmlFor="timePeriod">Time Period (Yr)</label>
            <input
              type="range"
              id="timePeriod"
              min="1"
              max="30"
              step="1"
              value={timePeriod}
              onChange={(e) => handleSliderChange(e, setPeriod)}
            />
            <span>{timePeriod}</span>
          </div>
        </div>
        {futureValue > 0 && (
          <div className='amount'>
            <p className="result">Invested Amount: ₹{futureValue.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
            <p className="result">Est. Returns: ₹{estimatedReturn.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
            <p className="result">Total Value: ₹{(parseFloat(futureValue) + parseFloat(estimatedReturn)).toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
          </div>
        )}
      </div>
      <div className="piue">
        <Pie data={data} />
      </div>
    </>
  );
}

export default Lumpsum;
