import React, { useEffect, useState } from 'react';
import "ka-table/style.css";
import { ITableProps, kaReducer, Table } from 'ka-table';
import { DataType } from 'ka-table/enums';
import { DispatchFunc } from 'ka-table/types';
import { getValueByColumn } from 'ka-table/Utils/DataUtils';
import ITutorialData from '../types/Tutorial';
import TutorialService from '../services/TutorialService';
import TutorialDataService from "../services/TutorialService";

const ExportToPdfDemo: React.FC = () => {

  const [tutorials, setTutorials] = useState<Array<ITutorialData>>([]);

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

  tutorials.length = 5

  console.log('data', [tutorials])
  return (
    <div>
      <table className="table" >
            <thead>
                <tr className='tr1'>
                    <th className='th1'>заказ №</th>
                    <th className='th1'>стоимость,$</th>
                    <th className='th1'>стоимость,₽</th>
                    <th className='th1'>срок поставки</th>
                </tr>
            </thead>
            <tbody>
                {tutorials.map(emp => (
                    <tr key={emp.id}>
                        <td>{emp.id}</td>
                        <td>{emp.usd}</td>
                        <td>{emp.rub}</td>
                        <td>{emp.date}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div >
  );
};

export default ExportToPdfDemo;