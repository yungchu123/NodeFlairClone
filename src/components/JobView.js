import React from 'react';
import './../styles/styles.css'
import jobListingDataJSON from './../jobListingData.json';

import JobListing from './JobListing';
import JobDescription from './JobDescription';


export default class JobView extends React.Component {
    constructor(props) {
        super(props)
        this.getJobDescription = this.getJobDescription.bind(this)
        this.state = {
            jobId: 0,
            jobTitle: jobListingDataJSON.job_listings[0].roleName,
        }
    }

    getJobDescription(jobId) {
        this.setState({jobId: jobId})
        this.setState({jobTitle: jobListingDataJSON.job_listings[jobId].roleName})
    }    

    render() {

        return (
            <div className="job-view">
                <div className="job-view-container">
                    <div className="job-listings-container">
                        {jobListingDataJSON.job_listings.map(({companyName, roleName, timestamp, location, minIncome, maxIncome, techstacks, jobType}, index) => (
                            <JobListing
                                onClick={this.getJobDescription}
                                key={index}
                                jobId={index}
                                companyName={companyName}  
                                roleName={roleName}  
                                timestamp={timestamp}  
                                location={location}  
                                minIncome={minIncome}  
                                maxIncome={maxIncome}  
                                techstacks={techstacks}  
                                jobType={jobType}
                            />
                        ))}
                    </div>
                    <JobDescription jobTitle={this.state.jobTitle}/>
                </div>
            </div>
        )
    }
}

