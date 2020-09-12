import * as React from "react";
import { Route } from "react-router-dom";

import ReservoirsSelect from "./water_level/ReservoirsSelect";
import ReservoirsSelectWaterLevelPrediction from "./water_level_prediction/ReservoirsSelect";
import WaterLevelPrediction from "./water_level_prediction/WaterLevelPrediction";

export default [
  <Route
    exact
    path="/reservoirs_select_water_level_prediction"
    // render={() => <ReservoirsSelectWaterLevelPrediction />}
    component={ReservoirsSelectWaterLevelPrediction}
  />,
  <Route
    exact
    path="/water_level_prediction/:id"
    // render={() => <WaterLevelPrediction />}
    component={WaterLevelPrediction}
  />,
  <Route
    exact
    path="/reservoirs_select"
    // render={() => <ReservoirsSelect />}
    component={ReservoirsSelect}
  />,
];
