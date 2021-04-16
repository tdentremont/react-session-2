import React from 'react';
import { Link } from 'react-router-dom';
import ThemePicker from '../ThemePicker/ThemePicker';
import NavigationHolder from './NavigationStyles';

const Navigation = ( {navItems} ) => {

const renderNavItems = () => {
    return navItems.map((item, i) => {
      return <Link to={item.path} key={`nav-item-${i}`}>{item.name}</Link>
    });
  }

  return (
  <NavigationHolder>
    {navItems && renderNavItems()}
    <ThemePicker />
  </NavigationHolder>
  )
}

export default Navigation;