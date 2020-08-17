import React from "react";
import { Admin, Resource, fetchUtils } from "react-admin";
import DRFWDataProvider from "./dataProvider";
import AuthProvider from "./authProvider";
import Dashboard from "./dashboard";
import { Layout, NotFound } from "./layout";

import Reservoirs from "./reservoirs";

const apiUrl = process.env.REACT_APP_API_URL;

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const token = localStorage.getItem("token");
  options.headers.set("Authorization", `Token ${token}`);
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = DRFWDataProvider(apiUrl, httpClient);

const authProvider = AuthProvider(apiUrl, { authUrl: "auth" });

const App = () => (
  <Admin
    title="SWMS"
    dataProvider={dataProvider}
    authProvider={authProvider}
    dashboard={Dashboard}
    catchAll={NotFound}
    layout={Layout}
  >
    <Resource name="reservoirs" {...Reservoirs} />
  </Admin>
);

export default App;
