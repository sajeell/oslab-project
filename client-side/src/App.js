import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Launches from "./components/launches.jsx";
<<<<<<< HEAD
import Chart from "./components/chart.jsx";
=======
import Chart from "./components/charts.jsx";
>>>>>>> 6821dd30b3e22327b467a38210b3fb5cf0249963
const client = new ApolloClient({
  uri: "/graphql",
});
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="app-wrapper">
      <div className="chart">
        <h1>SpaceX</h1>
<<<<<<< HEAD
          <Chart />
        </div>
        <div className="launches">
          <Launches />
        </div>
=======
        <Chart/>
        <Launches />
>>>>>>> 6821dd30b3e22327b467a38210b3fb5cf0249963
      </div>
    </ApolloProvider>
  );
}

export default App;
