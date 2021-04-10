import React from 'react';

export default function Main(props){
    const [dateStr, setDateStr] = React.useState('05-15-2019');

    const parsed = new Date(dateStr);
    console.log(parsed)
  return(

    <div>
    <label>Enter date to parse</label>
    <input onChange={(e => setDateStr(e.target.value))} />
    <div>Provided String: {dateStr}</div>
    <div>Parsed Date {parsed.toString()}</div>
    </div>
  );
}
