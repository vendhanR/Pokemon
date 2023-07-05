import React from "react";
import "./Header.css";
import pokemon from "./pokemon-logo.png";
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-body-primary nav-container">
        <div
          className="container-fluid"
          style={{ justifyContent: "space-around", alignItems: "normal" }}
        >
          <div className="nav-left">
            <a className="navbar-brand" href="/">
              <img className="pokemon-logo" src={pokemon} alt="pokemlog" />
            </a>
          </div>
          <div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#footer">
                    Conatct
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

// <div className="dropdown">
//   <button
//     className="btn btn-secondary dropdown-toggle"
//     type="button"
//     data-bs-toggle="dropdown"
//     aria-expanded="false"
//   >
//     Dropdown button
//   </button>
//   <ul className="dropdown-menu">
//     <li>
//       <a className="dropdown-item" href="#">
//         Action
//       </a>
//     </li>
//     <li>
//       <a className="dropdown-item" href="#">
//         Another action
//       </a>
//     </li>
//     <li>
//       <a className="dropdown-item" href="#">
//         Something else here
//       </a>
//     </li>
//   </ul>
// </div>;

// <nav className="navbar">
//         <div className="nav-container">
//           <div className="nav-left">
//             <a href="/">
//               <img className="pokemon-logo" src={pokemon} alt="pokemlog" />
//             </a>
//           </div>
//           <div className="nav-right">
//             <ul className="menu-list">
//               <li className="menu-item">
//                 <a href="#">Home</a>
//               </li>
//               <li className="menu-item">
//                 <a href="#">Conatct me</a>
//               </li>
//               <li className="menu-item dropdown">
//                 <a
//                   className="dropdown-toggle"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="true"
//                   href="#"
//                 >
//                   Theme
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <a className="dropdown-item" href="#">
//                       dark
//                     </a>
//                   </li>
//                   <li>
//                     <a className="dropdown-item" href="#">
//                       light
//                     </a>
//                   </li>

//                 </ul>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
