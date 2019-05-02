import React from "react";
// import {table} from "semantic-ui-react";

let style = {
  tableParams: {
    width: "1250px",
    padding: "50px",
    marginLeft: "40px",
    marginTop: "80px"
  } 
}

// placeholder data if I cannot get the backend to connect with React.js
const tableContent = {
  data: [
    {
      id: 1,
      education: "High School Grad",
      pop_count: "48407",
      avg_age: 45.3
    }, 

    {
      id: 2,
      education: "Juris Doctor",
      pop_count: "35035",
      avg_age: 27.3
    }, 

    {
      id: 3,
      education: "Bachelor's Degree",
      pop_count: "629593",
      avg_age: 56.3
    }, 

    {
      id: 4,
      education: "Medicinae Doctor",
      pop_count: "54000",
      avg_age: 56.3
    },

    {
      id: 1,
      education: "Children",
      pop_count: "54000",
      avg_age: 56.3
    }

  ]  
}

const Table = (props) => {
return (
  <table class="ui celled table census-table" style={style.tableParams}>
    <thead>
      <tr>
        <th>ID</th>
        <th>Education</th>
        <th>pop_count</th>
        <th>avg_age</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="id">1</td>
        <td data-label="education">High School Grad</td>
        <td data-label="pop_count">54000</td>
        <td data-label="avg_age">56.3</td>
      </tr>
      <tr>
        <td data-label="id">2</td>
        <td data-label="education">Juris Doctor</td>
        <td data-label="pop_count">1285</td>
        <td data-label="avg_age">43.2</td>
      </tr>
      <tr>
        <td data-label="id">3</td>
        <td data-label="education">Bachelor's Degree</td>
        <td data-label="pop_count">6298593</td>
        <td data-label="avg_age">25.5</td>
      </tr>
      <tr>
        <td data-label="id">4</td>
        <td data-label="education">Medicinae Doctor</td>
        <td data-label="pop_count">67300</td>
        <td data-label="avg_age">31.5</td>
      </tr>
    </tbody>
  </table>
);
}

export default Table;
