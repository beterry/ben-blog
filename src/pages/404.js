import React from "react"

//import components
import SEO from "../components/seo"
import Padding from '../components/padding'
import Margins from '../components/layouts/margins'

const NotFoundPage = () => {
    return (
        <>
            <SEO title="Page not found" />
            <Margins>
                <Padding />
                <h1>Oops! This page does not exist.</h1>
                <Padding />
                <Padding />
            </Margins>
        </>
    )
}

export default NotFoundPage