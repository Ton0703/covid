import React from "react";
import Card from "@/components/Card";
import "./index.scss";

function Cards({ data }) {
  const { confirmed, recovered, deaths, lastUpdate } = data;
  function formatTime(t){
      const times = t.split('T')[0]
      const time = times.split('-')
      return time[1] + '/' + time[2] + '/' + time[0]
  }
  return (
    <>
      {confirmed && (
        <div className='cards'>
          <Card
            name="确认人数"
            number={confirmed.value}
            time={lastUpdate}
            color={'lightBlue'}
          />
          <Card
            name="治愈人数"
            number={recovered.value}
            time={lastUpdate}
            color={'lightGreen'}
          />
          <Card
            name="死亡人数"
            number={deaths.value}
            time={lastUpdate}
            color={'lightPink'}
          />
        </div>
      )}
    </>
  );
}

export default Cards;
