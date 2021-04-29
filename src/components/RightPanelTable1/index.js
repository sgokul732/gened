import React, { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import EditTable1 from "../EditTable1";
import "./index.css";
export default function RightPanelTable1() {
  const loadData = () => {
    const data = [
      {
        id: 1,
        desc: "First Year Experience",
        sem: "",
        pre: "FYE",
        no: "",
        grade: "",
      },
      {
        id: 2,
        desc: "English Composition I",
        sem: "",
        pre: "WRT",
        no: "120",
        grade: "",
      },
      {
        id: 3,
        desc: "English Composition II",
        sem: "",
        pre: "WRT",
        no: "200",
        grade: "",
      },
      { id: 4, desc: "Mathematics", sem: "", pre: "MAT", no: "151", grade: "" },
      { id: 5, desc: "Interdisciplinary", sem: "", pre: "", no: "", grade: "" },
      {
        id: 6,
        desc: "Diverse Communities",
        sem: "",
        pre: "",
        no: "",
        grade: "",
      },
    ];

    return data;
  };
 
  const [tableData, setTableData] = useState(JSON.parse(localStorage.getItem("academic"))||loadData())
  useEffect(() => {
    if (localStorage.getItem("academic")===null) setTableData(loadData());
    
  }, []);

  useEffect(() => {

    localStorage.setItem("academic", JSON.stringify(tableData));
  }, [tableData]);
  const [edit, setEdit] = useState(false);
  const [item, setItem] = useState({});
  return edit ? (
    <EditTable1
      setEdit={setEdit}
      item={item}
      setTableData={setTableData}
      tableData={tableData}
    />
  ) : (
    <div className="rightPanel">
      <div className="banner">Academic Foundation</div>
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
