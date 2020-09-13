import * as React from "react";
import { Route } from "react-router-dom";

import ReservoirsSelect from "./water_level/ReservoirsSelect";
import ReservoirsSelectWaterLevelPrediction from "./water_level_prediction/ReservoirsSelect";
import WaterLevelPrediction from "./water_level_prediction/WaterLevelPrediction";
import ReservoirsSelectWaterConsumptionPrediction from "./water_consumption_prediction/ReservoirsSelect";
import WaterConsumptionPrediction from "./water_consumption_prediction/WaterConsumptionPrediction";

export default [
  <Route
    exact
    path="/reservoirs_select_water_level_prediction"
    component={ReservoirsSelectWaterLevelPrediction}
  />,
  <Route
    exact
    path="/water_level_prediction/:id"
    component={WaterLevelPrediction}
  />,
  <Route
    exact
    path="/reservoirs_select_water_consumption_prediction"
    component={ReservoirsSelectWaterConsumptionPrediction}
  />,
  <Route
    exact
    path="/water_consumption_prediction/:id"
    component={WaterConsumptionPrediction}
  />,
  <Route exact path="/reservoirs_select" component={ReservoirsSelect} />,
];
