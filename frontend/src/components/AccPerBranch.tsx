import { Chart } from 'react-google-charts'
import { useState, useEffect } from 'react';
import { ArrayType } from '../utils/types';

export default function AccPerBranch(){
    
    const [data,setData] = useState<ArrayType[]>();

    useEffect(() => {
        getData();
    },[])

    const options = {
        title: 'No. of Accounts per Branch',
        chartArea: {width: "50%"},
        backgroundColor: '#f7f7f7',
        hAxis: {
            title:"Number"
        },
        vAxis: {
            title: 'Branch'
        },
        colors: ["#007bff"],
        lineWidth: 1,
        pointSize: 5,
        animation: {
            startup: true,
            duration: 1000,
            easing: 'out'
        }
    }

    async function getData(){
        const newData:ArrayType[] = [];
        const res = await fetch('http://localhost:3000/clients/branches')
            .then (res => {
                return res.json()
            })
            .then(data => {
                return data
            })
            .catch(err => console.log(err))
        newData.push(Object.keys(res[0]));
        for(let i=0;i<res.length;i++){
            newData.push(Object.values(res[i]))
        }
        setData(newData);
    }
    
    return(
        <div className="chart-ctn">
            <h3>Accounts Per Branch</h3>
            <Chart width={'100%'} 
            chartType="BarChart" 
            data={data}
            options={options} />
        </div>
    )
}