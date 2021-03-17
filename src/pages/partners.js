import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'
import informationImage from "../../static/images/Information-document.svg";
import eventImage from "../../static/images/Event-managment.svg";
import ProductivityImage from "../../static/images/Increase-Productivity.svg";
import happinessImage from "../../static/images/Make-happiness.svg";

const PartnerPage = () => (
    <Layout>
        <SEO title="Partners"/>

        <div className={"page-header"}>
            <h2>Want to become a Showing Partner with Coraway?</h2>
            <p>Show homes to clients, attend inspections, and more. At Coraway, we support you and your business as an<br />  independent contractor with us whether you are a landlord, property manager,
             or agent looking to make extra cash. <br />Our goal is to help your business grow by connecting you with clients, initiating powerful relationships for the future.</p>
                <div className={"get-started-landing"}>
                    <a href={"https://coraway.typeform.com/to/Ttjs8g"} target={"_blank"} onClick ={e => { trackCustomEvent({
                        category: "Apply Now Partners Page", action: "Click", label: "Apple now partners page button clicked"
                    })}}>Apply now</a>
                </div>
        </div>

        <div className={"container"}>
            <div className={"targets"}>
                <div className={"title"}>
                    <h2>Get Paid to Show Homes</h2>
                </div>

                <div className={"row"}>
                    <div className={"col-6"}>
                        <div className={"item"}>
                            <img alt={"Information"} src={informationImage}/>
                            <h3>Flexibly Earn Extra Income</h3>
                            <p>Work how and when you want. We'll send you home showing opportunities wherever you are. Set up your weekly availability and we'll do the rest.</p>
                        </div>
                    </div>

                    <div className={"col-6"}>
                        <div className={"item"}>
                            <img alt={"Event"} src={eventImage}/>
                            <h3>Time is Money. Grow your Business</h3>
                            <p>Coraway connects you with clients in your area, and ways to market yourself — so you can focus on what you do best, on your own terms.</p>
                        </div>
                    </div>
                </div>

                <div className={"row"}>
                    <div className={"col-6"}>
                        <div className={"item"}>
                            <img alt={"Productivity"} src={ProductivityImage}/>
                            <h3>The better the reviews, the better the reward</h3>
                            <p>Gain recognition for your great work through reviews and your Showing Success Score. The more great reviews you recieve from clients, the more pay and opportunity!</p>
                        </div>
                    </div>

                    <div className={"col-6"}>
                        <div className={"item"}>
                            <img alt={"Happiness"} src={happinessImage}/>
                            <h3>Enhance your Skills and Real Estate Expertise</h3>
                            <p>Becoming a Showing Partner is an amazing opportunity for both seasoned agents looking to make extra cash and new agents looking to get their feet wet in the industry.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default PartnerPage
