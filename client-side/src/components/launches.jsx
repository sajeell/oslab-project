import React, { Fragment } from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;
function Launches() {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data);
  if (data.launches) {
    return data.launches.map(
      ({ flight_number, mission_name, launch_date_local }) => (
        <Fragment>
          <div key={flight_number}>
            <p>
              Flight: {flight_number}
              <br />
              Mission: {mission_name}
              <br />
              Launch Date: {launch_date_local}
              <br />
            </p>
          </div>
        </Fragment>
      )
    );
  }
  return <h1>Null</h1>;
}

export default Launches;
