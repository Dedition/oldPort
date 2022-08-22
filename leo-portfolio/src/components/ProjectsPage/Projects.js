import { useState } from "react";
import { motion } from "framer-motion";



const Projects = () => {
    const [isVideo1Displayed, setIsVideo1Displayed] = useState(false);
    const [isVideo2Displayed, setIsVideo2Displayed] = useState(false);
    const [isVideo3Displayed, setIsVideo3Displayed] = useState(false);
    const [isVideo4Displayed, setIsVideo4Displayed] = useState(false);
    const [isVideo5Displayed, setIsVideo5Displayed] = useState(false);
    const [isVideo6Displayed, setIsVideo6Displayed] = useState(false);

    const getVideoDisplayed = (index) => {
        if (`isVideo${index}Displayed`) return 3;
        else return -2;
    };

    const onWheel = (e) => {
        if (window.innerWidth <= 768) return;

        const container = document.querySelector(".projectsScroll");
        const containerScrollPosition =
            document.querySelector(".projectsScroll").scrollLeft;
        container.scrollTo({
            top: 0,
            left: containerScrollPosition + e.deltaY * 7.5,
            behaviour: "smooth",
        });
    };

    return (
        <>
            <motion.main
                className="mainContainer mainContainerProjects"
                exit={{ opacity: 0 }}
            >
                <section className="projectsScroll" onWheel={onWheel}>
                    <div className="project">
                        <div className="thumbnail project6">
                            <img
                                src="/assets/logos/flickrlogo.png"
                                alt="Flickr clone icon"
                            />
                            <h2>Flickr Clone</h2>
                        </div>
                        <div className="thumbnail thumbnailDetails">
                            <div className="textDetails">
                                <h2>Flickr Clone</h2>
                                <>
                                    <div className="textDetailsResponsive">
                                        <p>
                                            The FlickrClone is a website for users to upload and browse images about anything they want.
                                            It is heavily inspired by <a href="https://flickr.com/">Flickr.</a>
                                        </p>
                                        <p>
                                            I  did this fullstack application on a deadline of 5 days and
                                            it was a great challenge to see how well I understood
                                            React, Redux and REST API's.
                                            Frontend is built with React. Backend is built with NodeJS,
                                            Express, and Sequelize. The relational database management
                                            system is a SQL database, that I've managed with
                                            PostgresSQL on MAC OS.
                                        </p>
                                    </div>
                                </>
                                <>
                                    <div className="textDetails__buttons">
                                        <button
                                            onClick={() => {
                                                setIsVideo1Displayed(true);
                                            }}
                                        >
                                            <div>Watch the video</div>
                                            <div className="barHover"></div>
                                        </button>
                                        <button>
                                            <a href="https://flickrpixelclone.herokuapp.com/">
                                                Go to website
                                            </a>
                                            <div className="barHover"></div>
                                        </button>
                                    </div>
                                </>
                            </div>
                        </div>
                        {isVideo1Displayed ? (
                            <div
                                style={{
                                    zIndex: getVideoDisplayed(1),
                                }}
                                className={
                                    isVideo1Displayed ? "thumbnail thumbnailVideo" : "hidden"
                                }
                                onClick={() => {
                                    setIsVideo1Displayed(false);
                                }}
                            >
                                <div className="videoContainer">
                                    <video
                                        autoPlay={true}
                                        muted={true}
                                        loop={false}
                                        controls={true}
                                    >
                                        <source
                                            src={"/assets/videos/flickrdemo.mkv"}
                                            type="video/mp4"
                                        />
                                    </video>
                                </div>
                            </div>
                        ) : null}
                    </div>
                    <div className="project">
                        <div className="thumbnail project5">
                            <img
                                src="/assets/logos/facebooklogo.ico"
                                alt="Facebook clone icon"
                            />
                        </div>
                        <div className="thumbnail thumbnailDetails">
                            <div className="textDetails">
                                <h2>Facebook-Cap</h2>
                                <>
                                    <div className="textDetailsResponsive">
                                        <p>
                                            Facebook-Cap was my last project mandated by
                                            appAcademy. This is a small social app mimicking
                                            some social media functionality.
                                            You can create your account, write some
                                            posts with/without images. View, like, and comment on other
                                            people's posts.
                                            Some features are currently under development so
                                            may not be shown.
                                        </p>
                                        <p>
                                            This project is a fullstack app. The front part is coded
                                            with ReactJS and Redux. Back-end is coded with Flask-SQLAlchemy, and
                                            Python. The database is an SQL database, that I've
                                            managed with PostgresSQL on MAC OS.
                                            This apps main focus was to do a completely bug-free project in 3 days
                                            that would take full advantage of the fullstack development skills I've acquired
                                            along with a seamless user experience with AWS S3 and sockets.io.
                                        </p>
                                    </div>
                                </>

                                <>
                                    <div className="textDetails__buttons">
                                        <button
                                            onClick={() => {
                                                setIsVideo1Displayed(true);
                                            }}
                                        >
                                            <div>Watch the video</div>
                                            <div className="barHover"></div>
                                        </button>
                                        <button>
                                            <a href="https://facebook-cap.herokuapp.com/">
                                                Go to website
                                            </a>
                                            <div className="barHover"></div>
                                        </button>
                                    </div>
                                </>
                            </div>
                        </div>
                        {isVideo2Displayed ? (
                            <div
                                style={{
                                    zIndex: getVideoDisplayed(2),
                                }}
                                className={
                                    isVideo2Displayed ? "thumbnail thumbnailVideo" : "hidden"
                                }
                                onClick={() => {
                                    setIsVideo2Displayed(false);
                                }}
                            >
                                <div className="videoContainer">
                                    <video
                                        autoPlay={true}
                                        muted={true}
                                        loop={false}
                                        controls={true}
                                    >
                                        <source
                                            src={"/assets/videos/facebookdemo.mkv"}
                                            type="video/mp4"
                                        />
                                    </video>
                                </div>
                            </div>
                        ) : null}
                    </div>
                    <div className="project">
                        <div className="thumbnail project4">
                            <img src="/assets/logos/whodislogo.png" alt="whodis icon" />
                        </div>
                        <div className="thumbnail thumbnailDetails">
                            <div className="textDetails">
                                <h2>WhoDis</h2>
                                <>
                                    <div className="textDetailsResponsive">
                                        <p>
                                            WhoDis is a Discord clone that's primary service is as a
                                            messaging app that allows users to make servers,
                                            channels inside servers and message their friends through those channels.
                                            It is heavily inspired by <a href="https://discord.com/">Discord.</a> and was
                                            created as a collaborative project with a group of
                                            3 other developers. It was a great challenge to see how well I
                                            could work in a group of other engineers who have their own
                                            style of development.
                                        </p>
                                        <p>
                                            This project was coded with ReactJS, Redux for the frontend and Flask-SQLAlchemy, Python for the backend.
                                            The database is an SQL database, that I've managed with PostgresSQL on MAC OS.
                                        </p>
                                    </div>
                                </>

                                <>
                                    <div className="textDetails__buttons">
                                        <button
                                            onClick={() => {
                                                setIsVideo1Displayed(true);
                                            }}
                                        >
                                            <div>Watch the video</div>
                                            <div className="barHover"></div>
                                        </button>
                                        <button>
                                            <a href="https://who-dis-app.herokuapp.com/">
                                                Go to website
                                            </a>
                                            <div className="barHover"></div>
                                        </button>
                                    </div>
                                </>
                            </div>
                        </div>
                        {isVideo3Displayed ? (
                            <div
                                style={{
                                    zIndex: getVideoDisplayed(3),
                                }}
                                className={
                                    isVideo3Displayed ? "thumbnail thumbnailVideo" : "hidden"
                                }
                                onClick={() => {
                                    setIsVideo3Displayed(false);
                                }}
                            >
                                <div className="videoContainer">
                                    <video
                                        autoPlay={true}
                                        muted={true}
                                        loop={false}
                                        controls={true}
                                    >
                                        <source
                                            src={"/assets/videos/whodisdemo.mkv"}
                                            type="video/mp4"
                                        />
                                    </video>
                                </div>
                            </div>
                        ) : null}
                    </div>
                    <div className="project">
                        <div className="thumbnail project3">
                            <img src="/assets/logos/snacklogo.png" alt="Snack Overflow icon" />
                        </div>
                        <div className="thumbnail thumbnailDetails">
                            <div className="textDetails">
                                <h2>Snack-Overflow</h2>
                                <>
                                    <div className="textDetailsResponsive">
                                        <p>
                                            Snack Overflow Premium is a full-snack application to read and
                                            learn about all of your favorite snacks.
                                            A user will be able to read and post any inquiries as well as edit and delete their own.
                                            This application was created as a collaborative project with a group of
                                            3 other developers. This was actually my very first project and doing it with
                                            a group of others was incredibly challenging as I was constantly learning how to
                                            connect the data flow together.
                                        </p>
                                        <p>
                                            This is my very first project and it was made using
                                            vanilla JavaScript, HTML, and CSS along with PugJS.
                                            The backend was a NodeJS server that was created with ExpressJS.
                                            The database is an SQL database, that I've managed with PostgresSQL on MAC OS.
                                            A LOT of new skills and small details went into this project and learning how
                                            to create my own API's and create randomly generated JSON data was
                                            a great fun experience.
                                        </p>
                                    </div>

                                </>

                                <>
                                    <div className="textDetails__buttons">
                                        <button
                                            onClick={() => {
                                                setIsVideo1Displayed(true);
                                            }}
                                        >
                                            <div>Watch the video</div>
                                            <div className="barHover"></div>
                                        </button>
                                        <button>
                                            <a href="https://snack-overflow-premium.herokuapp.com/">
                                                Go to website
                                            </a>
                                            <div className="barHover"></div>
                                        </button>
                                    </div>
                                </>
                            </div>
                        </div>
                        {isVideo4Displayed ? (
                            <div
                                style={{
                                    zIndex: getVideoDisplayed(4),
                                }}
                                className={
                                    isVideo4Displayed ? "thumbnail thumbnailVideo" : "hidden"
                                }
                                onClick={() => {
                                    setIsVideo4Displayed(false);
                                }}
                            >
                                <div className="videoContainer">
                                    <video
                                        autoPlay={true}
                                        muted={true}
                                        loop={false}
                                        controls={true}
                                    >
                                        <source
                                            src={"/assets/videos/snackoverflowdemo.mkv"}
                                            type="video/mp4"
                                        />
                                    </video>
                                </div>
                            </div>
                        ) : null}
                        {/* </div>
                    <div className="project">
                        <div className="thumbnail project2">
                            <img src="/assets/" alt="" />
                        </div>
                        <div className="thumbnail thumbnailDetails">
                            <div className="textDetails">
                                <h2></h2>
                                <>
                                    <div className="textDetailsResponsive">
                                        <p>

                                        </p>
                                        <p>

                                        </p>
                                    </div>
                                </>

                                <>
                                    <div className="textDetails__buttons">
                                        <button
                                            onClick={() => {
                                                setIsVideo1Displayed(true);
                                            }}
                                        >
                                            <div>Watch the video</div>
                                            <div className="barHover"></div>
                                        </button>
                                        <button>
                                            <a href="">
                                                Go to website
                                            </a>
                                            <div className="barHover"></div>
                                        </button>
                                    </div>
                                </>
                            </div>
                        </div> */}
                    </div>
                </section>
            </motion.main>
        </>
    );
};

export default Projects;
