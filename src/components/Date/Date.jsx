import React, { useEffect } from 'react'

function Date() {
    useEffect(()=>{
        const timer = setInterval(() => {
            //alag component bna daalo
            setTime(new Date());
          }, 1000);
          //Cleanup interval on component unmount
          return () => clearInterval(timer);
    },[])

    const formatDate = (date) => {
        const options = {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        };
        return date.toLocaleDateString("en-IN", options);
      };
      const hours = time.getHours().toString().padStart(2, "0");
      const minutes = time.getMinutes().toString().padStart(2, "0");
      const seconds = time.getSeconds().toString().padStart(2, "0");

  return (
    <div>
        {formatDate(time)} <span id="seprator">|</span>
        {hours}:{minutes}:{seconds}
    </div>
  )
}

export default Date