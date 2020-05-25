import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Line, Bar } from 'react-chartjs-2'
import './index.scss'

function Charts({data , country}) {
    const [dailyData, set] = useState([])
    const { confirmed, recovered, deaths } = data
    useEffect(() => {
       axios.get('https://covid19.mathdro.id/api/daily').then(res => {
           set(res.data)
       })
    }, [])
    const lineChart = (
        dailyData.length
        ? (
            <Line 
            className='container'
            data={{
                labels: dailyData.map(({reportDate}) => reportDate),
                datasets: [{
                    data: dailyData.map(({confirmed}) => confirmed.total ),
                    label: '确诊',
                    borderColor: '#3333ff',
                    fill: true
                }, {
                    data: dailyData.map(({deaths}) => deaths.total ),
                    label: '死亡',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, .5)',
                    fill: true
                }],       
                }}
            />
        ) : null
    )
    const barChar = (
       confirmed
        ? (
            <Bar 
               data={{
                   labels: ['确诊', '痊愈', '死亡'],
                   datasets: [{
                       label: 'People',
                       backgroundColor: [
                           'ligntBlue',
                           'lightGreen',
                           'lightPink'
                       ],
                       data: [confirmed.value, recovered.value, deaths.value]
                   }]
               }}
               options={{
                   legend: { display: false },
                   title: { display: true, text: `${country}的新冠病情数据`}
               }}
            />
        ) : null
    )
    return (
        <div className='chart'>
            {country ? barChar : lineChart}
        </div>
    )
}

export default Charts
