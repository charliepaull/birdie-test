import React, {Component} from "react";
// import 
  
let style = {
  verticalMenu: {
    borderRadius: "25px",
    background: "#73AD21",
    padding: "20px", 
    width: "100px",
    height: "25px" 
  }
}

class NavFilter extends Component {
  constructor(props) {
    super(props)
    let state = {
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

  render() {

    const{list} = this.props
    const{listOpen, headerTitle} = this.state
  return (
      <div>
        <h2>Variable</h2>
        <div className="ui-verticalMenu" onClick={() => this.toggleList()} style={style.verticalMenu}>
          <div className="dropdown-item">{headerTitle}</div>
            Categories
            <i className="dropdown-icon" />
            {/* <div className="menu">
              <a className="item">Electronics</a>
              <a className="item">Automotive</a>
              <a className="item">Home</a>
            </div> */}
          
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
