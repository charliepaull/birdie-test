import React, {Component} from "react";
import NavFilter from "./Components/NavFilter";
// import TableWrapper from "./Components/TableWrapper";
import Table from "./Components/Table";

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
          },
        ]
    }

    toggleSelected(id, key){
        let temp = this.state[key]
        temp[id].selected = !temp[id].selected
        this.setState({
          [key]: temp
        })
      }    

    render() {
        return (
            <div>
                <NavFilter
                    title="Census Category"
                    list={this.state.census}
                    toggleItem={this.toggleSelected}
                />
                <Table />
            </div>
        )
    }
}

export default App;