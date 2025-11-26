"use client"
import CountUp from "react-countup"

const AnimatedCounter = ({amount}:{amount:number}) => {
  return (
    <div >
        <CountUp 
        decimal="4 "
        prefix="XAF"
        duration={2.75}
     
        end={amount}/>
    </div>
  )
}

export default AnimatedCounter
 