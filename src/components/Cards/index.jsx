import React from "react";
import Card from "@/components/Card";
import "./index.scss";

function Cards({ data }) {
  const { confirmed, recovered, deaths, lastUpdate } = data;
  return (
    <>
      {confirmed ? (
        <div className='cards'>
          <Card
            name="确诊人数"
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
      ) : (
        <div className='cards'>
          <Card
            name="确诊人数"
            number={0}
            time={null}
            color={'lightBlue'}
          />
          <Card
            name="治愈人数"
            number={0}
            time={null}
            color={'lightGreen'}
          />
          <Card
            name="死亡人数"
            number={0}
            time={null}
            color={'lightPink'}
          />
        </div>
      )}
    </>
  );
}

export default Cards;
