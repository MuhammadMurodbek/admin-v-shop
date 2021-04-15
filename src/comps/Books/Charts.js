import React,{useState, useEffect} from 'react'
import {Doughnut} from 'react-chartjs-2'

const Charts = () => {
    const [chartData, setChartData] = useState({})
    const chart = () =>{
        setChartData({
            labels: ['monday','tuesday', 'wednesday','thursday', 'friday'],
            datasets:[
                {
                    label:'level of this',  
                    data:[32,45,12,76,66],
                    backgroundColor:[
                        'rgba(75,19,192,0.6)',
                        'rgba(75,19,92,0.6)',
                        'rgba(75,19,12,0.6)',
                        'rgba(75,139,2,0.6)',
                        'rgba(75,139,192,0.6)',
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
            <Doughnut 
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

export default Charts
