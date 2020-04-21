"use strict";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "2018",
    launches: 20,
    rockets: 6,
  },
  {
    name: "2019",
    launches: 10,
    rockets: 9,
  },
  {
    name: "2020",
    launches: 20,
    rockets: 18,
  },
];

export default class Chart extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/90v76x08/";

  render() {
    return (
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="launches" stackId="a" fill="#82ca9d" />
        <Bar dataKey="rockets" stackId="a" fill="#8884d8" />
      </BarChart>
    );
  }
}
