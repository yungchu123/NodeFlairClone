import React from 'react';
import './../styles/styles.css'
import logo from './../GEImage.jpg'

export default function JobListing({onClick, jobId, companyName, roleName, timestamp, location, minIncome, maxIncome, techstacks, jobType}) {
    const handleClick = () => {
        onClick(jobId)
    }

    return (
        <div class="job-listing-container" onClick={handleClick}>
            <div class="flex">
                <img class="job-logo" src={logo} alt="job logo"/>
                <div class="job-detail-container">
                    <p><span >{ companyName }</span> <span>3.5 &#9733;</span></p>
                    <h1 class="job-listing-header">{ roleName }</h1>
                    <p><b class="green">About 4 hours ago</b> <span><i class="material-icons">&#xe55f;</i>{location}</span></p>
                    <p><b>S${minIncome} - S${maxIncome} / mth </b> <span class="minicard grey lightgrey-bg">EST</span></p>
                </div>
                <div class="job-type-container">
                    <div class="job-type minicard green green-bg">
                        <b>{ jobType }</b>
                    </div>
                </div>
            </div>
            <hr></hr>
            <ul class="job-listing-footer">
                {techstacks.map((tech, index) => (
                <li class="minicard grey lightgrey-bg" key={index}><b>{tech}</b></li>
                ))}
            </ul>
        </div>
    )
}

