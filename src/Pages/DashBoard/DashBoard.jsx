import React from 'react';
import './DashBoard.css';

//Components;
import Header from '../../Components/Header/Header';
import SideBar from '../../Components/SideBar/SideBar';

//Router;
import { Switch, Route } from 'react-router-dom';

//Pages;
import CampusAmbassadorAdmin from '../Users/Admin/CampusAmbassador/CampusAmbassador.admin';


const Test = ({match}) => {
    console.log(match);
    return (
        <>
        <div>This is test page</div>
        </>
    )
}

const DashBoard = ({match}) => {
    return (
        <div className="dash">
            <SideBar />
            <div className="dash-page">
                <Header />
                <div className="page">
                    <Switch>
                        <Route path = {`${match.url}/ca`} component = {CampusAmbassadorAdmin} />
                        <Route path = {`${match.url}/action`} component = {Test} />
                        <Route path = {`${match.url}/submissions`} component = {Test} />
                        <Route path = {`${match.url}/tasks`} component = {Test} />
                        <Route path = {`${match.url}/colleges`} component = {Test} />
                        <Route path = {`${match.url}/country-ambassador`} component = {Test} />
                    </Switch>
                </div>
            </div>  
        </div>
    )
};

export default DashBoard;