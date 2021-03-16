import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import featureImage from "../../static/images/hero-v2.png";
import thumbnailEvent from "../../static/images/feature-event-v2.png"
import thumbnailBoard from "../../static/images/feature-board-v2.png"
import thumbnailNews from "../../static/images/feature-news-v2.png"
import thumbnailTeams from "../../static/images/feature-team-v2.png"
import thumbnailStaff from "../../static/images/feature-user-v2.png"

const IndexPage = () => (
    <Layout>
        <SEO title="Home showings, on-demand."/>

        <div className={"page-header home"}>
            <h1>Outsource real estate tasks, on-demand.</h1>
            {/* <p>Landlords, real estate agents, and property managers can have their property shown<br/> to potential renters and buyers. Cut vacancy costs by up to 90% today!</p> */}
            <p className={"centered-text header"}>Outsource your property showings, inspections and more to reliable, customer-focused agents and partners. Close more leads and cut vacancy costs by up to 90% today! </p>
            <img alt={"Dashboard"} src={featureImage}/>
        </div>
        <div className={"page-header about"}>
            <h2 className={"subtitle"}>Are you a real estate professional looking to make extra money?</h2>
            <p className={"centered-text desc"}>Show homes, attend inspections, and more as a Coraway partner agent. You'll work directly with customers on your schedule earning competitive pay for every event. No real estate license? Don't worry! We can help you get one.</p>
            <div className={"get-started"}>
                <div className={"button"}>
                    <a href="https://coraway.typeform.com/to/Ttjs8g" target={"_blank"}>Apply now</a>
                </div>
            </div>
        </div>
        <div className={"container"}>
            <div className={"features"}>
                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Event"} src={thumbnailEvent}/>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Leverage your time</h2>
                                <p>Trained local market experts will streamline your property management process by showing your property to lead buyers or renters.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Get feedback quickly</h2>
                                <p>Book virtual or in-person showings online and get detailed feedback on the showing instantly.</p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Board"} src={thumbnailBoard}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"News"} src={thumbnailNews}/>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Meet customer needs</h2>
                                <p>Showing agents are top-of-the-line local experts ready to provide a seamless, personalized experience for each customer.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Get your time back</h2>
                                <p>Now you can focus on growing, streamlining and systematizing your business.</p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Team"} src={thumbnailStaff}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Users"} src={thumbnailTeams}/>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Contactless & Self check-in</h2>
                                <p>Coordinate in-person and video showings more efficiently utilIzing smart locks to show property to potential buyers or renters.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={"call-to-action"}>
            <div className={"container"}>
                <div className={"call-to-action__content"}>
                    <h2>Get started today</h2>
                    <p>Sign up and start increasing your productivity today.</p>
                </div>

                <div className={"button"}>
                    <a href="https://coraway.typeform.com/to/hHz4zJBn" target={"_blank"}>Get Started</a>
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage
