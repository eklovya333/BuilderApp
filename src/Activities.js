import React from 'react';
import { Link } from "react-router-dom";

const DropdownContext = React.createContext({
    open: false,
    setOpen: () => {},
});

// dropdown button for triggering open
function DropdownButton({ children, ...props }) {
    const { open, setOpen } = React.useContext(DropdownContext); // get the context
    
    // to open and close the dropdown
    function toggleOpen() {
      setOpen(!open);
    };
    
    return (
      <button onClick={toggleOpen}>
        { children }
      </button>
    )
  };
  
  // optional - but I like this pattern to know it must be a child of Dropdown
  Dropdown.Button = DropdownButton;

// dropdown content for displaying dropdown
function DropdownContent({ children }) {
    const { open } = React.useContext(DropdownContext); // get the context
    
    return (
      <div style={{ display: open ? "block" : "none" }}>
        { children }
      </div>
    );
  };
  
  // optional - but I like this pattern to know it must be a child of Dropdown
  Dropdown.Content = DropdownContent;

  // dropdown list for dropdown menus
function DropdownList({ children, ...props }) {
    const { setOpen } = React.useContext(DropdownContext); // get the context
    
    return (
      <ul onClick={() => setOpen(false)} {...props}>
        { children }  
      </ul>
    );
  };
  
  // optional - but I like this pattern to know it must be a child of Dropdown
  Dropdown.List = DropdownList;

function DropdownItem({ children, ...props }) {
  return (
    <li>
      <Link {...props}>{ children }</Link> 
    </li>
  );
};


// optional - but I like this pattern to know it must be a child of Dropdown
Dropdown.Item = DropdownItem;

function Dropdown({ children, ...props }) {
  const [open, setOpen] = React.useState(false);
  const dropdownRef = React.useRef(null);
    
  // click listeners for closing dropdown
  React.useEffect(() => {
  // close dropdown if click outside
function close(e) {
    if (!dropdownRef.current.contains(e.target)) {
    setOpen(false);
    }
  };
      // add or remove event listener
      if (open) {
        window.addEventListener("click", close);
      }
      // cleanup
      return function removeListener() {
        window.removeEventListener("click", close);
      }
    }, [open]); // only run if open state changes
    
    return (
       <DropdownContext.Provider value={{ open, setOpen }}>
         <div ref={dropdownRef} className="relative m-1">{children}</div>
       </DropdownContext.Provider>
    );
  };

  export default function Activities(){
    return (
        <Dropdown>
          <Dropdown.Button>Activities</Dropdown.Button>
          <Dropdown.Content>
            <Dropdown.List>
              <Dropdown.Item to="/Cardio">Cardio</Dropdown.Item>
              <Dropdown.Item to="/functional">Functional</Dropdown.Item>
              <Dropdown.Item to="/bodyweightworkout">Bodyweight Workout</Dropdown.Item>
              <Dropdown.Item to="/weightedworkout">Weighted Workouts</Dropdown.Item>
            </Dropdown.List>
          </Dropdown.Content>
        </Dropdown>
      );
};