import { useEffect, useState } from "react"
import { Card } from "../common/Card"

export const Timer = () => { 
  const [time , setTime] = useState(0);
  useEffect(() => {
    console.log(time);

    const interval = setInterval(() => {
        setTime((prev) => prev + 1)
    } , 1000);

    return () => {
        clearInterval(interval);
    }
  },[])

  return (
    <Card>
        <p>Timer : {time} </p>
    </Card>
  )
}
