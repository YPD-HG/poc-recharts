import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  AreaChart,
  Area,
  RadarChart,
  Radar,
  ScatterChart,
  Scatter,
  ComposedChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  FunnelChart,
  Funnel,
  Treemap,
} from "recharts";

const data = [
  { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
  { name: "May", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
];

const piedata = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const radardata = [
  { name: "A", x: 21 },
  { name: "B", x: 22 },
  { name: "C", x: -32 },
  { name: "D", x: -14 },
  { name: "E", x: -51 },
  { name: "F", x: 16 },
  { name: "G", x: 7 },
  { name: "H", x: -8 },
  { name: "I", x: 9 },
];

const scatterdata = [
  { x: 1, y: 23 },
  { x: 2, y: 3 },
  { x: 3, y: 15 },
  { x: 4, y: 35 },
  { x: 5, y: 45 },
  { x: 6, y: 25 },
  { x: 7, y: 17 },
  { x: 8, y: 32 },
  { x: 9, y: 43 },
];

const funneldata = [
  { name: "Impressions", value: 2000 },
  { name: "Clicks", value: 1500 },
  { name: "Visits", value: 1000 },
  { name: "Orders", value: 800 },
  { name: "Revenue", value: 600 },
];

const treemapdata = [
  {
    name: "A",
    children: [
      { name: "A1", size: 100 },
      { name: "A2", size: 200 },
      { name: "A3", size: 300 },
    ],
  },
  {
    name: "B",
    children: [
      { name: "B1", size: 100 },
      { name: "B2", size: 200 },
    ],
  },
  {
    name: "C",
    children: [{ name: "C1", size: 100 }],
  },
  {
    name: "D",
    children: [
      { name: "D1", size: 100 },
      { name: "D2", size: 200 },
      { name: "D3", size: 300 },
      { name: "D4", size: 400 },
    ],
  },
];


const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];


const App = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: "1rem",
      }}
    >
      <div>
        <h2>Line Chart</h2>
        <LineChart width={400} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid stroke="#ccc" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </div>
      <div>
        <h2>Bar Chart</h2>
        <BarChart width={400} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid stroke="#ccc" />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </div>
      <div>
        <h2>Pie Chart</h2>
        <PieChart width={400} height={400}>
          <Pie
            data={piedata}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
      <div>
        <h2>Area Chart</h2>
        <AreaChart width={400} height={400} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="pv" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="uv" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
      </div>
      <div>
        <h2>Radar Chart</h2>
        <RadarChart height={500} width={500} outerRadius="80%" data={radardata}>
          <PolarGrid />
          <PolarAngleAxis dataKey="name" />
          <PolarRadiusAxis />
          <Radar dataKey="x" stroke="green" fill="green" fillOpacity={0.5} />
        </RadarChart>
      </div>
      <div>
        <h2>Scatter Chart</h2>
        <ScatterChart width={400} height={400}>
          <CartesianGrid />
          <XAxis type="number" dataKey="x" />
          <YAxis type="number" dataKey="y" />
          <Scatter data={scatterdata} fill="green" />
        </ScatterChart>
      </div>
      <div>
        <h2>Composed Chart</h2>
        <ComposedChart width={730} height={250} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#f5f5f5" />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        </ComposedChart>
      </div>
      <div>
        <h2>Funnel Chart</h2>
        <FunnelChart width={400} height={400}>
          <Tooltip />
          <Funnel dataKey="value" data={funneldata} isAnimationActive={false}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Funnel>
        </FunnelChart>
      </div>
      <div>
        <h2>Treemap Chart</h2>
        <Treemap
          width={400}
          height={400}
          data={treemapdata}
          dataKey="size"
          ratio={4 / 3}
          stroke="#fff"
          fill="#8884d8"
        >
          <Tooltip />
        </Treemap>
      </div>
    </div>
  );
};

export default App;
