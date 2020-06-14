import React from "react"
import { withTrans } from '../i18n/withTrans'
import Navbar from '../components/Navbar'

const LanguageLayout = ({ children, t, i18n }) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    )
}

export default withTrans(LanguageLayout)