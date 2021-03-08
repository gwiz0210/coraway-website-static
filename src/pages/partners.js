import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import informationImage from "../../static/images/Information-document.svg";
import eventImage from "../../static/images/Event-managment.svg";
import ProductivityImage from "../../static/images/Increase-Productivity.svg";
import happinessImage from "../../static/images/Make-happiness.svg";

const PartnerPage = () => (
    <Layout>
        <SEO title="Partners"/>

        <div className={"page-header"}>
            <h2>Want to become a Showing Partner with Coraway?</h2>
            <p>Coraway is a technology that boost productivity for long distance landlords, property managers, and real estate agents <br />by offering new ways to show property to buyers and sellers, increasing overall productivity and happiness.</p>
                <div className={"get-started-landing"}>
                    <a href={"https://coraway.typeform.com/to/Ttjs8g"}>Apply now</a>
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
                            <h3>Earn Extra Income</h3>
                            <p>Having a human management software for businesses and startups is not always cost-effective. HiStaff allows companies to archive their employees' documents and information free of charge.</p>
                        </div>
                    </div>

                    <div className={"col-6"}>
                        <div className={"item"}>
                            <img alt={"Event"} src={eventImage}/>
                            <h3>Time is Money. Grow your Business</h3>
                            <p>How to hold internal events is one of the problems of companies. HiStaff by presenting new ideas allows event management to be done as easily as possible.</p>
                        </div>
                    </div>
                </div>

                <div className={"row"}>
                    <div className={"col-6"}>
                        <div className={"item"}>
                            <img alt={"Productivity"} src={ProductivityImage}/>
                            <h3>Increase Productivity</h3>
                            <p>Many factors are affecting the staff's productivity in the workplace, the relationship between manager and staff and environmental factors are the main factors, therefore we will focus on these two factors in achieving our goal. Ultimately, increasing employee's productivity results in increasing the quality of products and services that are going to be provided.</p>
                        </div>
                    </div>

                    <div className={"col-6"}>
                        <div className={"item"}>
                            <img alt={"Happiness"} src={happinessImage}/>
                            <h3>Grow your Skills and Expertise</h3>
                            <p>It is Obvious that a happy employee will make the environment happy and energetic! We are constantly attempting to provide solutions for maximizing employee’s motivation and joy.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default PartnerPage
