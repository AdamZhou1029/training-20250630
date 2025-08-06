import React, { useEffect } from "react";
import InfoCard from "./ClassComponents/CarApp/InfoCard";
import store from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import useMySelector from "../hooks/useMySelector";
import useMyDispatch from "../hooks/useMyDispatch";

// state: {
//   car: []
//   counter: 0
//   todo: []
// }

const CarApp = () => {
  const cars = useSelector((state) => state.carReducer); // selector function
  const dispatch = useDispatch();
  console.log(cars);

  // our custom redux hook
  // const cars = useMySelector((state) => state.cars);
  // console.log(cars);

  // const dispatch = useMyDispatch();
  //   useEffect(()=>{
  // store.subscribe(() => {
  //     console.log(store.getState());
  //   });
  //   } ,[])

  return (
    <div>
      <h3>Car App</h3>
      <ul style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        {cars.map((car) => (
          <InfoCard
            key={car.id}
            car={car}
            handleSell={(id) => {
              console.log("handle sell callback");
              dispatch({ type: "SELL", payload: id });
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default CarApp;
