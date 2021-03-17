import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../../static/images/coraway.svg"
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'

const Header = ({siteTitle}) => (
    <header>
        <div className={"container"}>
            <div className={"top-menu"}>
                <div className={"logo"}>
                    <Link to="/" title={"Coraway"}>
                        <img alt={"Logo"} src={logo}/>
                    </Link>
                </div>

                <div className={"get-started"}>
                    <a href={"https://calendly.com/coraway-real-estate/15min"} target={"_blank"} onClick ={e => { trackCustomEvent({
                        category: "Schedule a Demo", action: "Click", label: "Schedule a demo button clicked"
                    })}}>Schedule a demo</a>
                </div>
            </div>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
