import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Launches from "./components/launches.jsx";
const client = new ApolloClient({
  uri: "/graphql"
});
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>SpaceX</h1>
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
