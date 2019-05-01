import React from "react";
  
let style = {
  verticalMenu: {
    borderRadius: "25px",
    background: "#73AD21",
    padding: "20px", 
    width: "150px",
    height: "25px" 
  }
}

const NavFilter = () => {
  return (
  <div>
    <h2>Variable</h2>
    <div className="ui verticalMenu" style={style.verticalMenu}>
      <div className="ui dropdown item">
        Categories
  <i className="dropdown icon"></i>
        <div className="menu">
          <a className="item">Electronics</a>
          <a className="item">Automotive</a>
          <a className="item">Home</a>
        </div>
      </div>
    </div>
  </div>
  );
}

export default NavFilter;