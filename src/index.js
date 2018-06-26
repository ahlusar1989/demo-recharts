import React from "react";
import { render } from "react-dom";
import moment from "moment";
import styles from "./styles.css";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  Cell
} from "recharts";

const data = [
  {
    date: "2017-07-31",
    data: [
      {
        name: "Male",
        value: 20,
        color: "#4d99ef"
      },
      {
        name: "Female",
        value: 80,
        color: "#fc7178"
      }
    ]
  },
  {
    date: "2017-08-1",
    data: [
      {
        name: "Male",
        value: 20,
        color: "#4d99ef"
      },
      {
        name: "Female",
        value: 80,
        color: "#fc7178"
      }
    ]
  },
  {
    date: "2017-08-2",
    data: [
      {
        name: "Male",
        value: 20,
        color: "#4d99ef"
      },
      {
        name: "Female",
        value: 80,
        color: "#fc7178"
      }
    ]
  },
  {
    date: "2017-08-2",
    data: [
      {
        name: "Male",
        value: 20,
        color: "#4d99ef"
      },
      {
        name: "Female",
        value: 80,
        color: "#fc7178"
      }
    ]
  },
  {
    date: "2017-08-3",
    data: [
      {
        name: "Male",
        value: 20,
        color: "#4d99ef"
      },
      {
        name: "Female",
        value: 80,
        color: "#fc7178"
      }
    ]
  },
  {
    date: "2017-08-4",
    data: [
      {
        name: "Male",
        value: 20,
        color: "#4d99ef"
      },
      {
        name: "Female",
        value: 80,
        color: "#fc7178"
      }
    ]
  },
  {
    date: "2017-08-5",
    data: [
      {
        name: "Male",
        value: 20,
        color: "#4d99ef"
      },
      {
        name: "Female",
        value: 80,
        color: "#fc7178"
      }
    ]
  }
];
const App = () =>
  <div className="pie-row" style={{ styles }}>
    {data.map((obj, i) =>
      <div className="pie-wrap">
        <ResponsiveContainer height={70}>
          <PieChart>
            <Pie
              dataKey="value"
              data={obj.data}
              outerRadius={28}
              innerRadius={22}
              cx={28}
              cy={28}
            >
              {obj.data.map((obj2, i) => <Cell key={i} fill={obj2.color} />)}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="dayWrap">
          <p>
            {moment(obj.date).format("D MMM")}
          </p>
          <p>
            {moment(obj.date).format("ddd")}
          </p>
        </div>
      </div>
    )}
  </div>;

render(<App />, document.getElementById("root"));
