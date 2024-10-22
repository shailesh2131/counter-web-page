import React from 'react';
import {Link} from 'react-router-dom';

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                         Front End Developer
                        </h2>
                        <p className="mt-6 text-gray-600">
                        A front-end developer creates websites and applications using web languages such as HTML, CSS,
                        and JavaScript that allow users to access and interact with the site or app. When you visit a website,
                        the design elements you see were created by a front-end developer.
                        </p>
                        <p className="mt-4 text-gray-600">
                        A front-end developer is a type of software developer who specializes in 
                        creating and designing the user interface (UI) and user experience (UX) of websites and web applications
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}