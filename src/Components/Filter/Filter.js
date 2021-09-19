import React from 'react'
import './filter.css'

function Filter(props) {

    const handleJobTitle = (e) => {
        props.setJobTitle(e.target.value)
        console.log(props.jobTitle)
         }


       
    return (
        <div className="sidefilter">
                <div className="formbox"> 
                <input className="input1" placeholder="Job Title" value={props.jobTitle} onChange={e => handleJobTitle(e)}/>           
                <button type="button" className="filter_button" onClick={props.handleFilterByJobTitle}>Filter by Job</button>
        </div>
        </div>
    )
}

export default Filter
