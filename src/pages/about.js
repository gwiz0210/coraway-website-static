import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import informationImage from "../../static/images/Information-document.svg";
import eventImage from "../../static/images/Event-managment.svg";
import ProductivityImage from "../../static/images/Increase-Productivity.svg";
import happinessImage from "../../static/images/Make-happiness.svg";

const AboutPage = () => (
    <Layout>
        <SEO title="About"/>

        <div className={"page-header"}>
            <h2>What’s Coraway?</h2>
            <p>At Coraway, we believe there is a better, cost-efficient way to find tenants and fill vacancies. Coraway is boosting <br />productivity for landlords, property managers, and real estate agents by offering new ways to show<br /> property to buyers and sellers, increasing overall productivity and happiness.
            </p>
            <div className={"get-started-landing"}>
                    <a href={"https://coraway.typeform.com/to/Ttjs8g"}>Get Started</a>
                </div>
        </div>

        <div className={"container"}>
            <div className={"targets"}>
                <div className={"title"}>
                    <h2>Reimagining Home Showings</h2>
                </div>

                <div className={"row"}>
                    <div className={"col-6"}>
                        <div className={"item"}>
                            <img alt={"Information"} src={informationImage}/>
                            <h3>Empowering Landlords and Property Managers</h3>
                            <p>Finding tenants to fill a vacancy is often time consuming and not always cost-effective. Coraway's technology driven solution empowers landlords to show their properties effectively.</p>
                        </div>
                    </div>

                    <div className={"col-6"}>
                        <div className={"item"}>
                            <img alt={"Event"} src={eventImage}/>
                            <h3>Agents Sell Faster with Increased Lead Conversions</h3>
                            <p>Outsourcing home showings to potential setting allows a real estate broker to quickly pre-qualify prospective properties, shortens the sales cycle, increases productivity, revenue, and profitability.</p>
                        </div>
                    </div>
                </div>

                <div className={"row"}>
                    <div className={"col-6"}>
                        <div className={"item"}>
                            <img alt={"Productivity"} src={ProductivityImage}/>
                            <h3>Increase Productivity with Flexible Scheduling </h3>
                            <p>The life of a  real estate professional is a busy one, especially as business grows. Focus more on what matters, automate home showing scheduling and feedback responses.</p>
                        </div>
                    </div>

                    <div className={"col-6"}>
                        <div className={"item"}>
                            <img alt={"Happiness"} src={happinessImage}/>
                            <h3>Showings Handled by Trained Professionals</h3>
                            <p>Each Showing Partner has been thoroughly vetted with an excellent track record and passion for customer service, satisfaction, and extensively communicates showing feedback immediately. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default AboutPage
