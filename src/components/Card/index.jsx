import React from 'react'
import CountUp from 'react-countup'
import './index.scss'

function Card({name, number, time, color}) {
    function formatTime(t){
        const times = t.split('T')[0]
        const time = times.split('-')
        return time[0] + '年' + time[1] + '月' + time[2] + '日'
    }
    return (
        <div className='card' style={{borderBottomColor: `${color}`}}>
            <div className="name">{name}</div>
            <div className="number">
                {number && <CountUp start={0} end={number} duration={2.5} separator=',' />}
            </div>
            <div className="updateTime">更新日期：</div>
            <div className="time">{formatTime(time)}</div>
        </div>
    )
}

export default Card
