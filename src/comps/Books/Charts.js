import React,{useState, useEffect} from 'react'
import {Line} from 'react-chartjs-2'

const ChartLine = () => {
    const [chartData, setChartData] = useState({})
    const chart = () =>{
        setChartData({
            labels: ['10-kun','9-kun', '8-kun','7-kun', '6-kun','5-kun','4-kun', '3-kun','2-kun', '1-kun',],
            datasets:[
                {
                    label:'Oxirgi 10 kulik sotilgan mahsulotlar statistikasi',  
                    data:[1,8,5,4,8,6,7,2,4,5],
                    backgroundColor:[
                        'rgba(75,139,192,0.3)',
                    ],
                    borderWidth: 5
                },
            ]
        })
    }
    useEffect(() =>{
        chart()
    },[])
    return (
        <div className="chart-diagram"
            style={{
                width:'500px',
                minWidth:'300px', 
                height:'auto', 
                margin:'0 auto'
            }}
        >
            <Line 
                data={chartData}
                options={{
                    responsive: true,
                    title:{
                        display: true,
                        text:'Chart JS' 
                    }
                }}
            />     
        </div>
    )
}

export default ChartLine
