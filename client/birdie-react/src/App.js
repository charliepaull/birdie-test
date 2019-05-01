import React, {Component} from "react";
import NavFilter from "./Components/NavFilter";
import TableWrapper from "./Components/TableWrapper";
import Table from "./Components/Table";

class App extends Component {
    render() {
        return (
            <div>
                <NavFilter />
                <Table />
            </div>
        )
    }
}

export default App;