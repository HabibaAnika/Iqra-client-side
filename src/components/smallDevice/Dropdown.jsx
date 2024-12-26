import { NavLink } from "react-router-dom";

function Dropdown({ label, items }) {
    return (
      <li className="">
        <details>
          <summary className="cursor-pointer">{label}</summary>
          <ul className="p-2">
            {items.map((item, index) => (
              <li key={index} className="mb-1 w-40 lg:w-60">
                <NavLink to={item.link}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </details>
      </li>
    );
  }  
  export default Dropdown;