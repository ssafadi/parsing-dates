import React from 'react';

function add2today({ days = 0, months = 0, years = 0 }) {
    const today = new Date();
    const yyyy = today.getFullYear() + years;
    const mm = today.getMonth() + months;
    const dd = today.getDay() + days;
    return `${yyyy}-${mm}-${dd}`
}

export default function Main(props){
    const [dateStr, setDateStr] = React.useState('2019-05-01');
    const parsed = new Date(dateStr);
    const today = new Date();
  return(

    <div>
    <label>Enter date to parse</label>
    <input placeholder={dateStr} onChange={(e => setDateStr(e.target.value))} />
    <div>Provided String: {dateStr}</div>
    <div>Parsed Date: {parsed.toString()}</div>

    <div>Today's Date: {today.toString()}</div>
    <div>Provided Date Has Passed: {parsed < today? 'Yes': 'No'}</div>
    <div>a year from today is {add2today({year : 1})}</div>

    </div>
  );
}
