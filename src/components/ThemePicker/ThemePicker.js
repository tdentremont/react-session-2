import React, { useState, useEffect } from 'react';
import ThemePickerHolder from './ThemePickerStyles';
import { connect } from 'react-redux';

const colorOpts = ["black", "gray", "blue", "red", "orange"];

const ThemePicker = ( {setColor} ) => {

const [isActive, setIsActive] = useState(false);
const [currentColor, setCurrentColor] = useState("black");

useEffect(() => {
  setColor(currentColor);   

}, [currentColor]);

const colorClickHandler = () => {
  isActive ? setIsActive(false) : setIsActive(true);
};

const renderOptions = () => {
  return colorOpts.map((opt, i)=>{
    return <li key={`color-opt-${i}`} onClick={()=>setCurrentColor(opt)}>{opt}</li>
  });
}

  return (
    <ThemePickerHolder>
    <button onClick={()=>colorClickHandler()}>Theme</button>
    <ul className={`color-opts ${isActive ? 'show' : 'hide'}`}>
      {renderOptions()}
    </ul>
  </ThemePickerHolder>
  );
};
const mapDispatchProps = (dispatch)=> ({
  setColor: (curColor) => dispatch({type: "SET_COLOR", color: curColor})
});

export default connect(null, mapDispatchProps)(ThemePicker);