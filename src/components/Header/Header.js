import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import Navigation from '../Navigation/Navigation';

import HeaderHolder from './HeaderStyles';

const Header = ( {navItems, currentColor} ) => {

  useEffect(() => {
      console.log(currentColor);  //just for debugging
  }, [currentColor]);

  return (
   <HeaderHolder className={currentColor}>
    <img className="logo" src="https://www.seekpng.com/png/full/222-2224762_react-router-logo-png-transparent-react-router-logo.png" alt="logo" />
      <Navigation navItems={navItems} />
   </HeaderHolder>
  );
};
const mapStateToProps = store => ({
  currentColor: store.colorPicker.color
});

export default connect(mapStateToProps, null)(Header);