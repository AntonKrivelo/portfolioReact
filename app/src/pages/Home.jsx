import React from "react";
import Header from "../components/Header/Header"

const Home = () => {
    return (
        <>
            <Header />
                <main className="section">
                    <div className="container">
                        <ul className="content-list">
                            <li className="content-list__item">
                                <h2 className="title-2">Frontend</h2>
                                <p>JavaScript, TypeScript, ReactJS, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents</p>
                            </li>
                            <li className="content-list__item">
                               
                            </li>
                        </ul>
                    </div>
                </main>
        </>
    )
}


export default Home;