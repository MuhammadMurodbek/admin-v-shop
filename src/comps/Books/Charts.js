import React,{useState, useEffect} from 'react'
import {Line} from 'react-chartjs-2'

const ChartLine = () => {
    const [chartData, setChartData] = useState({})
    const chart = () =>{
        setChartData({
            labels: ['monday','tuesday', 'wednesday','thursday', 'friday'],
            datasets:[
                {
                    label:'level of this',  
                    data:[5,4,8,6,7],
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
