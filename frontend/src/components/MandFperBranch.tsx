import { Chart } from 'react-google-charts';
import { useState, useEffect } from 'react';
import { ArrayType } from '../utils/types';

export default function MandFperBranch(){

    useEffect(() => {
        getData();
    },[]);

    const [ data, setData ] = useState<ArrayType[]>();
    
    async function getData(){
        const newData:ArrayType[] = [];
        const men = await fetch('http://localhost:3000/clients/branches/m')
                    .then(res => {
                        return res.json();
                    })
                    .then(data => {
                            return data;
                        })
                    .catch(err => {
                        console.log('Error: ',err);
                    })
        const women = await fetch('http://localhost:3000/clients/branches/f')
                      .then(res => {
                        return res.json();
                      })
                      .then(data => {
                        return data;
                      })
                      .catch(err => {
                        console.log('Error: ',err);
                      })
        
        newData.push(Object.keys(men[0]));
        for(let i = 0; i < men.length; i++){
            newData.push(Object.values(women[i]))
            newData.push(Object.values(men[i]))
        }
        setData(newData);
    }

    const chartOptions = {
        title:"Male and Female per Branch"
    }

    return(
        <div className="chart-ctn">
             <Chart chartType='PieChart' options={chartOptions} data={data} width={"100%"} height={"400px"}  /> 
        </div>
    )
}