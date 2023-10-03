import React from 'react';

export default function JobDescription({jobTitle}) {
    return (
        <div className='job-description-container'>
            <h1>{jobTitle}</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet in quia incidunt consectetur quis et harum. At quas a doloremque, in qui aliquid! Nulla, tempora? Ex enim fuga maiores nisi?</p>
        </div>
    )
}