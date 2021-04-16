import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../containers/HomePage';
import EventsPage from '../containers/EventsPage';
import ContactUsPage from '../containers/ContactUsPage';
import ProductsPage from '../containers/ProductsPage';
import ServicesPage from '../containers/ServicesPage';
import ExamplesPage from '../containers/ExamplesPage';

const Router = () => {
  return (
    <Switch>
     <Route exact path="/" component={HomePage} />
     <Route path="/home" component={HomePage} />
     <Route path="/services" component={ServicesPage} />
     <Route path="/contactus" component={ContactUsPage} />
     <Route path="/products" component={ProductsPage}/>
     <Route path="/events" component={EventsPage}/>
     <Route path="/examples" component={ExamplesPage}/>
    </Switch>
  )
};

export default Router;