
import './App.css'
import MenuItem from './components/MenuItem'
import MenuOptions from './utils/options_and_icons.json'
import {NavLink} from "react-router-dom";

function App() {


  // return  MenuOptions.map((option) => {

  //     return 
  //     <NavLink>
  //       <MenuItem key={option.id} name={option.name} icon={option.iconpath}></MenuItem>
  //     </NavLink>
      

  // })

  return (
    <>
      {MenuOptions.map((option) => (
        <NavLink key={option.id} to={`/${option.name}`}>
          <MenuItem name={option.name} icon={option.iconpath}></MenuItem>
        </NavLink>
      ))}
    </>
  );     
    
  

}

export default App
