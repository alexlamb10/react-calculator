import React, {useState, useEffect} from "react";

function TotalNumber({ total, number }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (number === 0) {
      setDisplay(total);
    } else {
      setDisplay(number);
    }

  }, [display, number, total])


  return (
    <div className="total">
      <p>{display}</p>
    </div>
  );
}

export default TotalNumber;
