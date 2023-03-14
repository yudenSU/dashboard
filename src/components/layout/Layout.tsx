import React from "react"
import Header from "../header/Header"


interface Props {
    children: React.ReactNode
}

const Layout: React.FunctionComponent<Props> = (props:Props) => {
    return <>
        <div className="layout">
            <Header />
            <div id="page-content-wrapper">
                {props.children}
            </div>
        </div>
    </>
}

export default Layout