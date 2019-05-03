import React, {Component} from "react";
import NavFilter from "./Components/NavFilter";
import Table from "./Components/Table";

let style = {
    dropDown: {
        width: "250px"
    }
}

class App extends Component {
  state = {
    census: [
      {
        id: 0,
        title: "Education",
        selection: false,
        key: "Census"
      },

      {
        id: 1,
        title: "pop_count",
        selection: false,
        key: "Census"
      },

      {
        id: 2,
        title: "avg_age",
        selection: false,
        key: "Census"
      }
    ]
  };

  render() {
    return (
      <div>
        <NavFilter
          className="nav-filter"
          title="Census Category ⬇️"
          list={this.state.census}
          toggleItem={this.toggleSelected}
          style={style.dropDown}
        />
        <Table 
          sortItems={this.sortBy} 
        />
      </div>
    );
  }
}

export default App;