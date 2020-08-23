import * as React from "react";
import { Route } from "react-router-dom";

import ReservoirsSelect from "./water_level/ReservoirsSelect";

export default [
  <Route exact path="/reservoirs_select" render={() => <ReservoirsSelect />} />,
];
