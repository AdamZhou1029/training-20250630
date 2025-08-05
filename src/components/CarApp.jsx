import React, { useEffect } from "react";
import InfoCard from "./ClassComponents/CarApp/InfoCard";
import store from "../store/store";
import { useDispatch, useSelector } from "react-redux";

// state: {
//   car: []
//   counter: 0
//   todo: []
// }

const CarApp = () => {
  const cars = useSelector((state) => state.carReducer);
  const dispatch = useDispatch();
  // console.log(store.getState());
  console.log(cars);

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
