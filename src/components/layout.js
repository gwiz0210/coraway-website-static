/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {StaticQuery, graphql, Link} from "gatsby"

import Header from "./header"
import "../../static/styles/main.scss"
import logo from "../../static/images/coraway.svg"
import iconTwitter from "../../static/images/icon-twitter.svg"
import iconLinkedin from "../../static/images/icon-linkedin.svg"
// import iconGitHub from "../../static/images/icon-github.svg"
import iconInstagram from "../../static/images/icon-instagram.svg"
import iconFacebook from "../../static/images/icon-facebook.svg"

const Layout = ({children}) => (
    <StaticQuery query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `} render={data => (
        <>
            <Header siteTitle={data.site.siteMetadata.title}/>
            <main>{children}</main>
            <footer>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-5"}>
                            <div className={"widget__item"}>
                                <div className={"logo"}>
                                    <Link to="/" title={"Coraway"}>
                                        <img alt={"Logo"} src={logo}/>
                                    </Link>
                                </div>

                                <div className={"about"}>
                                    <p>Utilizing technology to modernize home showings. Landlords, property managers, and real estate agents can get their time back today!</p>
                                    {/* A software that was created with the goal of solving the problems of Human Resources in small and medium-sized businesses. */}
                                </div>
                            </div>
                        </div>

                        <div className={"col-2"}>
                            <div className={"widget__item"}>
                                <ul className={"links"}>
                                    <h4>Coraway</h4>
                                    <ul>
                                        {/* <li><Link to="/integrations/slack" title={"Integrations"}>Integrations</Link></li> */}
                                        <li><Link to="/about" title={"About Us"}>About Us</Link></li>
                                        <li><Link to="/partners" title={"Showing Partmers"}>Showing Partners</Link></li>
                                        {/* <li><a href={"https://histaff.io/blog"}>Blog</a></li> */}
                                        {/* <li><a className={"links__special"} href={"https://feedback.histaff.io/"} target={"_blank"} title={"We look forward to receiving your great feedback"}>Feedback</a></li> */}
                                    </ul>
                                </ul>
                            </div>
                        </div>

                        <div className={"col-2"}>
                            <div className={"widget__item"}>
                                <div className={"links"}>
                                    <h4>Support</h4>
                                    <ul>
                                        <li><Link to="/contact" title={"Contact Us"}>Contact</Link></li>
                                        <li><Link to="/privacy" title={"Privacy Policy"}>Privacy</Link></li>
                                        <li><Link to="/terms" title={"Terms Of Use"}>Terms Of Use</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className={"col-3"}>
                            <div className={"widget__item"}>
                                <div className={"social"}>
                                    <a href="https://twitter.com/CorawayHQ" target={"_blank"} title={"Twitter"}><img alt={"Twitter"} src={iconTwitter}/></a>
                                    <a href="https://www.facebook.com/Coraway-103325114996782" target={"_blank"} title={"Facebook"}><img alt={"Facebook"} src={iconFacebook}/></a>
                                    <a href="https://linkedin.com/coraway" target={"_blank"} title={"LinkedIn"}><img alt={"LinkedIn"} src={iconLinkedin}/></a>
                                    <a href="https://www.instagram.com/coraway/" target={"_blank"} title={"Instagram"}><img alt={"Instagram"} src={iconInstagram}/></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"copyright"}>
                        <p>Copyright {new Date().getFullYear()}, {` `} <a href="https://coraway.co" title={"Coraway"}>Coraway</a>. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )}/>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
