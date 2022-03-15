import React from 'react'
import { Helmet } from 'react-helmet'

//this is a user defined component that is reusable
//so the title in the tab can easily be changed
const Metadata = ({ title }) => {
    return (
        <Helmet>
            <title>
                {`${title} | Java Cookies`}
            </title>
        </Helmet>
    )
}
export default Metadata
