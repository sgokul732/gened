import React, { useState,useEffect } from "react";
import { Button, Table } from "reactstrap";
import EditTable3 from "../EditTable3";
import "./index.css";
export default function RightPanelTable3() {
  const loadData = () => {
    const data = [
      {
        id: 1,
        desc: "Writing Emphasis I",
        sem: "",
        pre: "ENG",
        no: "",
        grade: "",
      },
      {
        id: 2,
        desc: "Writing Emphasis II",
        sem: "",
        pre: "WRT",
        no: "",
        grade: "",
      },
      {
        id: 3,
        desc: "Writing Emphasis III",
        sem: "",
        pre: "WRT",
        no: "",
        grade: "",
      },
      {
        id: 4,
        desc: "Speaking Emphasis I",
        sem: "",
        pre: "SPK",
        no: "",
        grade: "",
      },
      {
        id: 5,
        desc: "Speaking Emphasis II",
        sem: "",
        pre: "",
        no: "",
        grade: "",
      },
      {
        id: 6,
        desc: "Speaking Emphasis III",
        sem: "",
        pre: "",
        no: "",
        grade: "",
      },
    ];
    
    return data;
  };
  const [tableData, setTableData] = useState(JSON.parse(localStorage.getItem("additional"))||loadData());
  useEffect(() => {
    
    if (localStorage.getItem("additional")===null) setTableData(loadData());
  }, []);

  useEffect(() => {
    
    localStorage.setItem("additional", JSON.stringify(tableData));
  }, [tableData]);
  const [edit, setEdit] = useState(false);
  const [item, setItem] = useState({});
  return edit ? (
    <EditTable3
      setEdit={setEdit}
      item={item}
      setTableData={setTableData}
      tableData={tableData}
    />
  ) : (
    <div className="rightPanel">
      <div className="banner">Additional Requirement</div>
      <Table size="sm" striped bordered>
        <thead>
          <tr>
            <th>Id</th>
            <th>Description</th>
            <th>Semester</th>
            <th>Prefix</th>
            <th>Number</th>
            <th>Grade</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.desc}</td>
                <td>{item.sem}</td>
                <td>{item.pre}</td>
                <td>{item.no}</td>
                <td>{item.grade}</td>
                <td>
                  {" "}
                  <Button
                    size="sm"
                    color="warning"
                    onClick={() => {
                      setEdit(true);
                      setItem(item);
                    }}
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
