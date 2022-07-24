import Card from "../../components/Card";
import Header from "../../components/Header";
import Link from "../../components/Link";
import iconTraducao from "../../assets/icons/icontraducao.svg"
import iconCv from "../../assets/icons/icon-cv.svg"
import Table from "../../components/tabela";

import cv from "../../assets/docs/Profile.pdf"

import "./style.css";


function Work() {
    return (
        <>
            <Header />
            <body>
                <section className="sec-6">
                    <div className="but-div">
                        <button className="butt-2"><img src={iconTraducao} alt="tradução" /><Link texto="português" redirect="/aboutpt" color="escuro" targett={undefined} /></button>
                        <button className="butt-2"><img src={iconCv} alt="tradução" /><Link texto="cv" redirect={cv} color="escuro" targett={"_blank"} /></button>
                    </div>
                    <h2 className="tit-1">About</h2>
                    <div className="div-9">
                        <p className="text-7">
                            I have training in eng.civil and web development. I discovered the interest in coda within the course
                            of Engineering, at first I started to solve course questions using javascript and
                            I took an interest in more complex issues that needed a little more
                            knowledge of the language, there was an opportunity to learn and deepen
                            and today I have knowledge in technologies such as nodejs, express, react,
                            sequelize, bem/sass/scss and others, one of the qualities I like the most
                            I always try to keep my code clean and look for new things to
                            apply in my projects, especially if it is practical, because a
                            thing I learned "is that you don't program for a machine, but
                            yes to people".
                        </p>
                        <p className="text-7">
                        As reference
                            in addition to the portfolio I worked on a teaching platform, I also worked in the private sector in a company directly linked to the sector
                            public and that's where I learned to solve unexpected problems quickly, and in
                            many of the cases I needed to learn, as many of these were outside my field of expertise.
                            Which in the end showed me that I could solve any problem. I did too
                            part of a team that would be responsible for the new login/registration/of the
                            lacrei platform, where "It's a portal to connect the LGBTQIA+ community to professionals
                            of health, lawyers and others".
                        </p>
                        <p className="text-11">"I may not know... but I know how to learn"</p>
                    </div>
                    <div className="div-8">
                        <div className="div-12">
                            <h3 className="tit-2"> soft skill</h3>
                            <p>
                            <Table texto="working under pressure;"></Table>
                                <Table texto="Critical thinking;"></Table>
                                <Table texto="Be a bridge between the backend and the UX/UI;"></Table>
                                <Table texto="Troubleshooting your area of coverage;"></Table>
                                <Table texto="Collaborative spirit;"></Table>
                                <Table texto="Flexibility;"></Table>
                                <Table texto="Autodidatismo.;"></Table>
                                <Table texto="Always studying;"></Table>
                                <Table texto="Agile Methodologies;"></Table>
                                <Table texto="Emotional Intelligence;"></Table>
                                <Table texto="Time and Productivity Management;"></Table>
                                <Table texto="Collaboration and Teamwork;"></Table>
                            </p>
                        </div>
                        <div className="div-12">
                            <h3 className="tit-2"> hard skills</h3>
                            <p>
                                <Table texto="HTML5;"></Table>
                                <Table texto="CSS3;"></Table>
                                <Table texto="JavaScript;"></Table>
                                <Table texto="React;"></Table>
                                <Table texto="typescript"></Table>
                                <Table texto="Code versioning (like Git);"></Table>
                                <Table texto="Database / MySQL;"></Table>
                                <Table texto="Test"></Table>
                                <Table texto="Programming logic;"></Table>
                                <Table texto="Sass/LESS/BEM/SCSS;"></Table>
                                <Table texto="Bootstrap/tailwind;"></Table>
                                <Table texto="Libs.js"></Table>
                                <Table texto="Node.js"></Table>
                                <Table texto="Express.js"></Table>
                            </p>
                        </div>
                    </div>

                </section>
            </body>
        </>
    )
}

export default Work;