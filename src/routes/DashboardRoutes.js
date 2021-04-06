import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/layout/Header';
import { AdvertDetailPage, AdvertsPage, NewAdvertPage } from '../components/adverts';


const DashboardRoutes = () => {
    return (
        
        <div>
            <Header />
            <div className = "container mt-5">
                <Switch>
                    <Route exact path='/adverts' component={AdvertsPage}/>
                    <Route exact path='/advert/:id' component={AdvertDetailPage}/>
                    <Route exact path='/advert' component={NewAdvertPage}/>
                    <Redirect to= '/adverts'/>
                    
                </Switch>
            </div>

            
        </div>

    )
}

export default DashboardRoutes;