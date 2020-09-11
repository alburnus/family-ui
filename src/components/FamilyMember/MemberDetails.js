import React from 'react';
import classes from './MemberDetails.css'
import userImages from '../../assets/user.png';
import bloodImage from '../../assets/blood-pressure.png';
import triumphImage from '../../assets/triumph.png';

export const MemberDetails = (props) => {
    return (
        <div>
            <h4 style={{padding: '15px'}}>Member Details</h4>
            <div className={classes.main}>
                <div className={classes.card}>
                    <img src={userImages} alt="Avatar" style={{width: '100%'}}/>
                    <div className={classes.container}>
                        <h4><b>Personal Data</b></h4>
                        <p>nickname: anonymous</p>
                    </div>
                </div>
                <div className={classes.card}>
                    <img src={bloodImage} alt="Avatar" style={{width: '100%'}}/>
                    <div className={classes.container}>
                        <h4><b>Blood pressure</b></h4>
                        <p>Last: 120/80 71</p>
                    </div>
                </div>
                <div className={classes.card}>
                    <img src={triumphImage} alt="Avatar" style={{width: '100%'}}/>
                    <div className={classes.container}>
                        <h4><b>Body weight</b></h4>
                        <p>Last: 92kg</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MemberDetails;