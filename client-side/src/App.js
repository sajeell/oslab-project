import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Launches from "./components/launches.jsx";
import Chart from "./components/chart.jsx";
const client = new ApolloClient({
  uri: "/graphql",
});
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="app-wrapper">
      <div className="chart">
        <h1>SpaceX</h1>
          <Chart />
        </div>
        <div className="launches">
          <Launches />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
