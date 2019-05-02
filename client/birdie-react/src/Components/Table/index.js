import React, {Component} from "react";
// import {table} from "semantic-ui-react";

let style = {
  tableParams: {
    width: "1250px",
    padding: "50px",
    marginLeft: "40px",
    marginTop: "80px"
  },

  censusData: {
    borderCollapse: "collapse",
    whiteSpace: "nowrap",
    float: "left",
    display: "inline-block"
  }
}

// placeholder data if I cannot get the backend to connect with React.js

const Row = ({id, education, pop_count, avg_age}) => (
  <div className="row">
    <div>{id}</div>
    <div>{education}</div>
    <div>{pop_count}</div>
    <div>{avg_age}</div>    
  </div>
)

class Table extends Component {
  
  state = {
    census_data: [
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
        id: 5,
        education: "Children",
        pop_count: "54000",
        avg_age: 56.3
      }
  
    ]  
  }


  sortBy(item) {
    let arrayCopy = [this.state.census];
    arrayCopy.sort(this.compareBy(item));
    this.setState({ census: arrayCopy });
    console.log("hit it!");
  }

  toggleSelected(id, key) {
    let temp = this.state[key];
    temp[id].selected = !temp[id].selected;
    this.setState({
      [key]: temp
    });
  }

  compareBy(item) {
    return (a, b) => {
      if (a[item] < b[item]) return -1;
      if (a[item] > b[item]) return 1;
      return 0;
    };
  }

  render() {
    const rows = this.state.census_data.map( (rowData) => <Row {...rowData} />);

    return(
      <table className="table" style={style.tableParams}>
        <thead>
          <tr>
            <th onClick={() => this.sortBy("id")}>ID</th>
            <th onClick={() => this.sortBy("education")}>Education</th>
            <th onClick={() => this.sortBy("pop_count")}>Population Count</th>
            <th onClick={() => this.sortBy("avg_age")}>Average Age</th>
          </tr>
        </thead> 
        <tbody>
          <tr style={style.censusData}>
            <div className="census-data">
              {rows}
            </div>
          </tr>
        </tbody> 
      </table>
    )
  }
}



export default Table;


/*
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
          <td data-label="id">{tableContent.data[0].id}</td>
          <td data-label="education">{tableContent.data[0].education}</td>
          <td data-label="pop_count">{tableContent.data[0].pop_count}</td>
          <td data-label="avg_age">{tableContent.data[0].avg_age}</td>
        </tr>
        <tr>
          <td data-label="id">{tableContent.data[1].id}</td>
          <td data-label="education">{tableContent.data[1].education}</td>
          <td data-label="pop_count">{tableContent.data[1].pop_count}</td>
          <td data-label="avg_age">{tableContent.data[1].avg_age}</td>
        </tr>
        <tr>
          <td data-label="id">{tableContent.data[2].id}</td>
          <td data-label="education">{tableContent.data[2].education}</td>
          <td data-label="pop_count">{tableContent.data[2].pop_count}</td>
          <td data-label="avg_age">{tableContent.data[2].avg_age}</td>
        </tr>
        <tr>
          <td data-label="id">{tableContent.data[3].id}</td>
          <td data-label="education">{tableContent.data[3].education}</td>
          <td data-label="pop_count">{tableContent.data[3].pop_count}</td>
          <td data-label="avg_age">{tableContent.data[3].avg_age}</td>
        </tr>
        <tr>
          <td data-label="id">{tableContent.data[4].id}</td>
          <td data-label="education">{tableContent.data[4].education}</td>
          <td data-label="pop_count">{tableContent.data[4].pop_count}</td>
          <td data-label="avg_age">{tableContent.data[4].avg_age}</td>
        </tr>
  
      </tbody>
    </table>

*/