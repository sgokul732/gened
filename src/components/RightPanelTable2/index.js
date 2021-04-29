import React, { useState,useEffect } from "react";
import { Button, Table } from "reactstrap";
import EditTable2 from "../EditTable2";
import "./index.css";
export default function RightPanelTable2() {
  const loadData = () => {
    const data = [
      { id: 1, desc: "Science I", sem: "", pre: "", no: "", grade: "" },
      { id: 2, desc: "Science II", sem: "", pre: "", no: "", grade: "" },
      {
        id: 3,
        desc: "Behaviour and Social Science I",
        sem: "",
        pre: "T",
        no: "",
        grade: "",
      },
      {
        id: 4,
        desc: "Behaviour and Social Science II",
        sem: "",
        pre: "",
        no: "",
        grade: "",
      },
      { id: 5, desc: "Humanity I", sem: "", pre: "", no: "", grade: "" },
      { id: 6, desc: "Humanity II", sem: "", pre: "", no: "", grade: "" },
      { id: 7, desc: "Art", sem: "", pre: "", no: "", grade: "" },
    ];

    return data;
  };
  
  const [tableData, setTableData] = useState(JSON.parse(localStorage.getItem("distributive"))||loadData());
  useEffect(() => {
    
    if (localStorage.getItem("distributive")===null) setTableData(loadData());
  }, []);

  useEffect(() => {
    
    localStorage.setItem("distributive", JSON.stringify(tableData));
  }, [tableData]);
  const [edit, setEdit] = useState(false);
  const [item, setItem] = useState({});
  return edit ? (
    <EditTable2
      setEdit={setEdit}
      item={item}
      setTableData={setTableData}
      tableData={tableData}
    />
  ) : (
    <div className="rightPanel">
      <div className="banner">Distributive Requirement</div>
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
