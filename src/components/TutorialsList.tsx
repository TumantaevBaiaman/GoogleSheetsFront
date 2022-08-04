import React, { useState, useEffect, ChangeEvent } from "react";
import TutorialDataService from "../services/TutorialService";
import { Link } from "react-router-dom";
import ITutorialData from '../types/Tutorial';
import { LineChart, XAxis,Tooltip, CartesianGrid, Line, AreaChart, YAxis, Area } from "recharts";
import { ITableProps, kaReducer, Table } from 'ka-table';
import { DataType, EditingMode, SortingMode } from 'ka-table/enums';
import { DispatchFunc } from 'ka-table/types';
import ExportToPdfDemo from "./Table";


const TutorialsList: React.FC = () => {
  const [tutorials, setTutorials] = useState<Array<ITutorialData>>([]);
  const [currentTutorial, setCurrentTutorial] = useState<ITutorialData | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [searchTitle, setSearchTitle] = useState<string>("");

  useEffect(() => {
    retrieveTutorials();
  }, []);
  const retrieveTutorials = () => {
    TutorialDataService.getAll()
      .then((response: any) => {
        setTutorials(response.data);
        // console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };
  var total = 0
  for (var i = 0; i < tutorials.length; i++) {
    total += tutorials[i].usd
 }
 console.log(total)
  
  const dataArray = Array(7).fill(undefined).map(
    (_, index) => ({
      column1: `column:1 row:${index}`,
      column2: `column:2 row:${index}`,
      column3: `column:3 row:${index}`,
      column4: `column:4 row:${index}`,
      id: index,
    }),
  );
  const tablePropsInit: ITableProps = {
    columns: [
      { key: 'column1', title: 'Column 1', dataType: DataType.String },
      { key: 'column2', title: 'Column 2', dataType: DataType.String },
      { key: 'column3', title: 'Column 3', dataType: DataType.String },
      { key: 'column4', title: 'Column 4', dataType: DataType.String },
    ],
    data: dataArray,
    rowKeyField: 'id',
  };
  console.log(tutorials)

  return (
    <div className="row">
      <div className="list col-md-6">
      <AreaChart width={730} height={400} data={tutorials}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="date" style={{fontSize: '12px'}} />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="usd" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
      </AreaChart>
      </div>
      <div>
        <div className="total">
          <h1>Total</h1>
          <h2>{total}</h2>
        </div>
      <ExportToPdfDemo />
      </div>
    </div>
  );
};
// {tutorials.map((meal) => (
//   <td>{meal.usd}</td>
// ))}

export default TutorialsList;
