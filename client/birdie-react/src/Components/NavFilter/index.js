import React, {Component} from "react";
// import 
  
let style = {
  verticalMenu: {
    borderRadius: "25px",
    background: "#73AD21",
    padding: "20px", 
    width: "100px",
    height: "80px",
    margin: "15px 25px 15px 25px",
    color: "black",
    fontWeight: "bold"
  },

  dropDown: {
    display: "inline-block"
  }, 

  variable: {
    margin: "25px 25px"
  }
}

class NavFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listOpen: false,
      headerTitle: this.props.title
    }
  }

  handleClickOutside(){
    this.setState({
      listOpen: false
    })
  }

  toggleList(){
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }

  // selectItem(title, id, stateKey){
  //   this.setState({
  //     headerTitle: title,
  //     listOpen: false
  //   }, this.props.resetThenSet(id, stateKey))
  // }

  render() {

    const{list} = this.props
    const{listOpen, headerTitle} = this.state
  return (
      <div>
        <h2 className="variable" style={style.variable}>Variable</h2>
        <div className="ui-verticalMenu" onClick={() => this.toggleList()} style={style.verticalMenu}>
          <div className="dropdown-item" style={style.dropDown}>{headerTitle}</div>
            <i className="dropdown-icon" />          
          {listOpen && <ul className="dd-list">
            {list.map((item) => (
              <li className="dd-list-item" key={item.title} onClick={() => this.toggleItem(item.id, item.key)}>
              {item.title} {item.selected}</li>
            ))}
          </ul>}
        </div>
      </div>
    );
  }

}

export default NavFilter;
