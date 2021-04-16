import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import FooterHolder from './FooterStyles';


const Footer = ( {navItems, currentColor} ) => {

  useEffect(() => {
      console.log(currentColor);  //just for debugging
  }, [currentColor]);

  const renderLinks = () => {
    return navItems.map((item, i) => {
      return <Link to={item.path} key={`footer-link-${i}`}>{item.name}</Link>
    });
  }

  return (
    <FooterHolder className={currentColor}>
    <div className="footer-nav">
    {navItems && renderLinks()}
    </div>
    </FooterHolder>
  );
};
const mapStateToProps = store => ({
  currentColor: store.colorPicker.color
});

export default connect(mapStateToProps, null)(Footer);