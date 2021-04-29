import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import "./index.css";
export default function EditTable1(props) {
  const [form, setFormData] = useState(props.item);
  const formChange = (e) => {
    setFormData({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const saveData = (e) => {
    e.preventDefault();
    const data = [...props.tableData];
    const foundIndex = data.findIndex((ele) => ele.id === form.id);
    data.splice(foundIndex, 1, form);
    props.setEdit(false);
    props.setTableData(data);
  };
  return (
    <div className="form">
      <Form>
        <FormGroup>
          <Label for="Id">Id</Label>
          <Input
            type="text"
            name="id"
            id="Id"
            placeholder="Id"
            defaultValue={props.item.id}
            disabled={true}
            onChange={(e) => {
              formChange(e);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="desc">Description</Label>
          <Input
            type="text"
            name="desc"
            id="desc"
            placeholder="description"
            defaultValue={props.item.desc}
            onChange={(e) => {
              formChange(e);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="desc">Semester</Label>
          <Input
            type="text"
            name="sem"
            id="sem"
            placeholder="semester"
            defaultValue={props.item.sem}
            onChange={(e) => {
              formChange(e);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="desc">Prefix</Label>
          <Input
            type="text"
            name="pre"
            id="pre"
            placeholder="prefix"
            defaultValue={props.item.pre}
           
            onChange={(e) => {
              formChange(e);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="no">Number</Label>
          <Input
            type="text"
            name="no"
            id="no"
            placeholder="number"
            defaultValue={props.item.no}
            onChange={(e) => {
              formChange(e);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="grade">Grade</Label>
          <Input
            type="text"
            name="grade"
            id="grade"
            placeholder="grade"
            defaultValue={props.item.grade}
            onChange={(e) => {
              formChange(e);
            }}
          />
        </FormGroup>
        <div className="submit">
          <Button
            size="sm"
            color="primary"
            onClick={(e) => {
              saveData(e);
            }}
          >
            Save
          </Button>
          <Button
            size="sm"
            color="secondary"
            onClick={() => {
              props.setEdit(false);
            }}
          >
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  );
}
