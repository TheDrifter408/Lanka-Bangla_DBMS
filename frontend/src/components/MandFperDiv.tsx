import { Chart } from 'react-google-charts';
import { useState, useEffect } from 'react';
import { ArrayType } from '../utils/types';

export default function MandFperDiv(){

    const [data,setData] = useState<ArrayType[]>([]);

    async function getData(){
        const newData:ArrayType[] = [["City","Men","Women"]];
        const men = await fetch('http://localhost:3000/clients/cities/m')
                    .then(res => {
                        return res.json();
                    })
                    .then(data => {
                            return data;
                        })
                    .catch(err => {
                        console.log('Error: ',err);
                    })
        const women = await fetch('http://localhost:3000/clients/cities/f')
                      .then(res => {
                        return res.json();
                      })
                      .then(data => {
                        return data;
                      })
                      .catch(err => {
                        console.log('Error: ',err);
                      })
        
    }

    return(
        <div className="chart-ctn">
            <button onClick={getData}>MandFperDiv</button>
        </div>
    )
}