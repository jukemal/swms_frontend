import * as React from "react";
import { Route } from "react-router-dom";

import ReservoirsSelect from "./water_level/ReservoirsSelect";
import ReservoirsSelectWaterLevelPrediction from "./water_level_prediction/ReservoirsSelect";
import WaterLevelPrediction from "./water_level_prediction/WaterLevelPrediction";
import ReservoirsSelectWaterConsumptionPrediction from "./water_consumption_prediction/ReservoirsSelect";
import WaterConsumptionPrediction from "./water_consumption_prediction/WaterConsumptionPrediction";
import ReservoirsSelectDomesticWaterConsumptionPrediction from "./domestic_water_consumption_prediction/ReservoirsSelect";
import HouseSelectDomesticWaterConsumptionPrediction from "./domestic_water_consumption_prediction/HouseSelect";
import DomesticWaterConsumptionPrediction from "./domestic_water_consumption_prediction/DomesticWaterConsumptionPrediction";
import ReservoirsSelectDomesticWaterDistributionPlan from "./domestic_water_distribution_plan/ReservoirsSelect";
import DomesticWaterDistributionPlan from "./domestic_water_distribution_plan/DomesticWaterDistributionPlan";
import PaddyWaterDistributionPlan from "./paddy_water_distribution_plan/PaddyWaterDistributionPlan";

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
  <Route
    exact
    path="/reservoirs_select_domestic_water_consumption_prediction"
    component={ReservoirsSelectDomesticWaterConsumptionPrediction}
  />,
  <Route
    exact
    path="/reservoirs_select_domestic_water_consumption_prediction/:id"
    component={HouseSelectDomesticWaterConsumptionPrediction}
  />,
  <Route
    exact
    path="/domestic_water_consumption_prediction/:id"
    component={DomesticWaterConsumptionPrediction}
  />,
  <Route
    exact
    path="/reservoir_select_domestic_water_distribution_plan"
    component={ReservoirsSelectDomesticWaterDistributionPlan}
  />,
  <Route
    exact
    path="/domestic_water_distribution_plan/:id"
    component={DomesticWaterDistributionPlan}
  />,
  <Route
    exact
    path="/paddy_water_distribution_plan"
    component={PaddyWaterDistributionPlan}
  />,
  <Route exact path="/reservoirs_select" component={ReservoirsSelect} />,
];
