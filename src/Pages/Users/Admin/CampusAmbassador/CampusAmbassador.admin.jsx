import React, {useState} from 'react';
import './CampusAmbassador.admin.css';

//Images;
import HeroCard from '../../../../Images/Ca-admin/hero.jpg';
import Filter from '../../../../Images/Ca-admin/filter.png';

//data;
import countryData from '../../../../CountryStateList';

const CampusAmbassadorAdmin = () => {
    const [showState, setShowState] = useState(false);
    const [searchField, setSearchField] = useState({
        status:"",
        country:"",
        state:"",
        role:"",
    });
    const handleFilter = async (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if(name === 'country' && value.length ) setShowState(true);
        else if(name === 'country' && value.length === 0 ) setShowState(false);
        setSearchField( prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleReset = () => {
        setShowState(false);
        setSearchField({
            status:"",
            country:"",
            state:"",
            role:"",
        });
    } 
    console.log(searchField);

    return (
        <div className = 'ca-admin' >
            <h1>Campus Ambassador</h1>
            <div className="add-card">
                <div className="card-details">
                    <h1>About Campus Ambassador</h1>
                    <p className = 'add-card-content' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam veritatis cumque ratione vel! Optio nam, quo recusandae, doloremque in laudantium quaerat porro quam quod dicta molestiae? Deleniti autem dicta atque.</p>
                    <button className = 'add-card-btn' >Add New Campus Ambassador</button>
                </div>
                <div className="card-img">
                    <img src= {HeroCard} alt="hero"/>
                </div>
            </div>
            <div className="filter">
                <div className="filter-title">
                    <img src= {Filter} alt="filter"/>
                    <p>Filter</p>
                </div>
                <div className="filter-options">
                    <div className="options-wrapper">
                        <div className="filter-option">
                            <label htmlFor="status">Status </label>
                            <select onChange = {handleFilter} name="status" id="status" value = {searchField.status}  >
                                <option value="" selected>Select here</option>
                                <option value="Active">Active</option>
                                <option value="Deactivated">Deactivated</option>
                            </select>
                        </div>
                        <div className="filter-option">
                            <label htmlFor="country">Country </label>
                            <select onChange = {handleFilter} name="country" id="country" value = {searchField.country} >
                                <option value="" >Select here</option>
                                {countryData?.map( item => <option value = {item.country} > {item.country} </option> )}
                            </select>
                        </div>
                        <div className="filter-option">
                            <label htmlFor="state">State </label>
                            <select onChange = {handleFilter} name="state" id="state" disabled = {!showState} value = {searchField.state}  >
                                <option value="" selected >Select here</option>
                                {countryData?.map(item => {
                                    if(item.country === searchField.country){
                                        return item.states?.map( state => (<option value = {state}>{state}</option>) )
                                    }
                                })}
                            </select>
                        </div>
                        <div className="filter-option">
                            <label htmlFor="role">Role </label>
                            <select onChange = {handleFilter} name="role" id="role" value = {searchField.role} >
                                <option value="" selected >Select here</option>
                                <option value="Campus Ambassador">Campus Ambassador</option>
                                <option value="Country Ambassador">Country Ambassador</option>
                                <option value="Volunteer">Volunteer</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="filter-btn">
                        <button className = 'apply-btn' >Apply</button>
                        <button onClick = {handleReset} className = 'reset-btn' >Reset</button>
                    </div>
                </div>
            </div>
        
        </div>
    )
};

export default CampusAmbassadorAdmin;