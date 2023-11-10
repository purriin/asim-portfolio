import React from "react";
import '../App.css';
import Header from "../navigation/header.js"

export default function Home() {
    return (
  
        <div className="bg-bg">
            <Header />
        
            {/* Home Page: */}
            <div className="isolate pt-14 bg-wave">
                <div className="mx-auto max-w-4xl py-56 sm:py-56 lg:py-56">
                    <div className="lg:grid lg:grid-cols-2 md:gap-0 md:flex">

                        {/* Profile Picture + Links: */}
                        <div className="fadeinslow lg:mx-0 md:mx-24 mx-10">
                            <img src={require('../assets/Asim2.png')} alt="Asim" class="object-scale-down h-96 w-96 rounded-t-[24px] md:items-right justify-center items-center" />

                            <div class="bg-elevation rounded-b-[24px] h-18 w-96">
                                <div className="flex space-x-10 justify-center align-middle py-5">
                                    <a href="https://www.github.com/purriin/" target="_blank" rel="noreferrer" class="transition-all ease-in-out duration-200 text-txt hover:text-bright hover:-translate-y-1">
                                        <svg class="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M18.88 1.099C18.147.366 17.265 0 16.233 0H3.746C2.714 0 1.832.366 1.099 1.099C.366 1.832 0 2.714 0 3.746v12.487c0 1.032.366 1.914 1.099 2.647c.733.733 1.615 1.099 2.647 1.099H6.66c.19 0 .333-.007.429-.02a.504.504 0 0 0 .286-.169c.095-.1.143-.245.143-.435l-.007-.885c-.004-.564-.006-1.01-.006-1.34l-.3.052c-.19.035-.43.05-.721.046a5.555 5.555 0 0 1-.904-.091a2.026 2.026 0 0 1-.872-.39a1.651 1.651 0 0 1-.572-.8l-.13-.3a3.25 3.25 0 0 0-.41-.663c-.186-.243-.375-.407-.566-.494l-.09-.065a.956.956 0 0 1-.17-.156a.723.723 0 0 1-.117-.182c-.026-.061-.004-.111.065-.15c.07-.04.195-.059.378-.059l.26.04c.173.034.388.138.643.311a2.1 2.1 0 0 1 .631.677c.2.355.44.626.722.813c.282.186.566.28.852.28c.286 0 .533-.022.742-.065a2.59 2.59 0 0 0 .585-.196c.078-.58.29-1.028.637-1.34a8.907 8.907 0 0 1-1.333-.234a5.314 5.314 0 0 1-1.223-.507a3.5 3.5 0 0 1-1.047-.872c-.277-.347-.505-.802-.683-1.365c-.177-.564-.266-1.215-.266-1.952c0-1.049.342-1.942 1.027-2.68c-.32-.788-.29-1.673.091-2.652c.252-.079.625-.02 1.119.175c.494.195.856.362 1.086.5c.23.14.414.257.553.352a9.233 9.233 0 0 1 2.497-.338c.859 0 1.691.113 2.498.338l.494-.312a6.997 6.997 0 0 1 1.197-.572c.46-.174.81-.221 1.054-.143c.39.98.424 1.864.103 2.653c.685.737 1.028 1.63 1.028 2.68c0 .737-.089 1.39-.267 1.957c-.177.568-.407 1.023-.689 1.366a3.65 3.65 0 0 1-1.053.865c-.42.234-.828.403-1.223.507a8.9 8.9 0 0 1-1.333.235c.45.39.676 1.005.676 1.846v3.11c0 .147.021.266.065.357a.36.36 0 0 0 .208.189c.096.034.18.056.254.064c.074.01.18.013.318.013h2.914c1.032 0 1.914-.366 2.647-1.099c.732-.732 1.099-1.615 1.099-2.647V3.746c0-1.032-.367-1.914-1.1-2.647z"/>
                                        </svg>
                                        <span class="sr-only">Github page</span>
                                    </a>
                                        
                                    <a href="https://www.linkedin.com/in/purriin/" target="_blank" rel="noreferrer" class="transition-all ease-in-out duration-200 text-txt hover:text-bright hover:-translate-y-1">
                                        <svg class="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                            <path fill="currentColor" fill-rule="evenodd" d="M3 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3Zm1.102 4.297a1.195 1.195 0 1 0 0-2.39a1.195 1.195 0 0 0 0 2.39Zm1 7.516V6.234h-2v6.579h2ZM6.43 6.234h2v.881c.295-.462.943-1.084 2.148-1.084c1.438 0 2.219.953 2.219 2.766c0 .087.008.484.008.484v3.531h-2v-3.53c0-.485-.102-1.438-1.18-1.438c-1.079 0-1.17 1.198-1.195 1.982v2.986h-2V6.234Z" clip-rule="evenodd"/>
                                        </svg>
                                        <span class="sr-only">Linkedin page</span>
                                    </a>

                                    <a href="mailto: shan.jones@mail.utoronto.ca" target="_blank" rel="noreferrer" class="transition-all ease-in-out duration-200 text-txt hover:text-bright hover:-translate-y-1 mt-1">
                                        <svg class="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M3 7.511a3.247 3.247 0 0 0-1.5 2.739v6c0 2.9 2.35 5.25 5.25 5.25h9c1.15 0 2.161-.598 2.739-1.5H6.75A3.75 3.75 0 0 1 3 16.25V7.511Zm1 .599v7.64a3.25 3.25 0 0 0 3.066 3.245L7.25 19h11.5a3.25 3.25 0 0 0 3.245-3.066L22 15.75V8.11l-8.65 4.554a.75.75 0 0 1-.7 0L4 8.11ZM18.75 4H7.25a3.251 3.251 0 0 0-3.155 2.466L13 11.152l8.905-4.686a3.252 3.252 0 0 0-2.966-2.46L18.75 4Z"/>
                                        </svg>
                                        <span class="sr-only">Email</span>
                                    </a>
                                </div>
                           </div>

                        </div>    

                        {/* Introduction: */}
                        <div className="md:text-left text-center mx-10 md:py-0 py-20">
                            <h1 class="md:text-9xl text-6xl md:font-bold text-primary fadein title"> 
                                ASIM
                            </h1>
                            <h1 class="md:text-8xl text-5xl font-bold text-primary fadein title"> 
                                RAHMAN
                            </h1>
                            <h2 class="mt-2 md:text-4xl text-2xl font-medium text-secondary fadein paragraph">
                                Software Engineer
                            </h2>
                            <p className="mt-8 text-xl text-txt fadein paragraph">
                                I'm currently a 3rd year Computer Engineering student studying at the University of Toronto. 
                            </p>

                        </div>
                    </div>
                </div>
            </div>

            {/* About Page: */}
            <section id="about" />
            <div className="relative isolate pt-4 bg-bg">
                <div className="mx-auto max-w-5xl py-32">
                    <div className="md:text-left text-center md:mx-0 mx-10 md:py-0 py-20">
                        <h1 class="md:text-6xl text-6xl md:font-bold text-primary fadein title"> 
                            ABOUT
                        </h1>

                        <p className="mt-8 text-xl text-txt fadein paragraph">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>

            {/* Education: */}
            <section id="education" />
            <div>
                <div className="relative isolate pt-4 bg-wave">
                    <div className="mx-auto max-w-5xl py-32">
                        <div className="md:text-left text-center md:mx-0 mx-10 md:py-0 py-20">
                            <h1 class="md:text-6xl text-6xl md:font-bold text-primary fadein title"> 
                                EDUCATION
                            </h1>

                            <div class="mt-10 bg-elevation rounded-[24px] h-auto w-auto">
                                <div className="justify-left mx-10 py-5">
                                    <h2 className="font-bold text-3xl text-secondary paragraph">
                                        University of Toronto
                                    </h2>

                                    <div className="lg:flex justify-between">
                                        <p className="md:mt-0 mt-10 text-2xl text-bright paragraph">
                                            Bachelors in Computer Engineering
                                        </p>

                                        <p className="md:mt-0 mt-10 text-2xl text-txt paragraph">
                                            September 2021 - April 2025
                                        </p>
                                    </div>

                                    <div class="h-px my-8 bg-txt border-0 dark:bg-txt"> </div>

                                    <p className="md:mt-0 mt-4 text-2xl font-medium text-bright paragraph">
                                        Extracurriculars
                                    </p>
                                    <ul className="text-xl text-txt paragraph mt-2">
                                        <li>• Worked as a 3rd Year ECE Class Representative and an ECE Academic Director</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="mt-10 bg-elevation rounded-[24px] h-auto w-auto">
                                <div className="justify-left mx-10 py-5">
                                    <h2 className="font-bold text-3xl text-secondary paragraph">
                                        High School
                                    </h2>

                                    <div className="lg:flex justify-between">
                                        <p className="md:mt-0 mt-10 text-2xl text-bright paragraph">
                                            Ontario Secondary School Diploma
                                        </p>

                                        <p className="md:mt-0 mt-10 text-2xl text-txt paragraph">
                                            Date - Date
                                        </p>
                                    </div>

                                    <div class="h-px my-8 bg-txt border-0 dark:bg-txt"> </div>

                                    <p className="md:mt-0 mt-4 text-2xl font-medium text-bright paragraph">
                                        Extracurriculars
                                    </p>
                                    <ul className="text-xl text-txt paragraph mt-2">
                                        <li>• Worked as a 3rd Year ECE Class Representative and an ECE Academic Director</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Projects: */}
            <section id="projects" />
            <div className="relative isolate pt-4">
                <div className="mx-auto max-w-5xl py-32">
                    <div className="md:text-left text-center md:mx-0 mx-10 md:py-0 py-20">
                        <h1 class="md:text-6xl text-6xl md:font-bold text-primary fadein title"> 
                            PROJECTS
                        </h1>

                        <div class="mt-10 bg-elevation rounded-[24px] h-auto w-auto">
                                <div className="justify-left mx-10 py-5">
                                    

                                    <div className="lg:flex justify-between">
                                        <h2 className="font-bold text-3xl text-secondary paragraph">
                                            University of Toronto
                                        </h2>

                                        <p className="md:mt-0 mt-10 text-2xl text-txt paragraph">
                                            September 2021 - April 2025
                                        </p>
                                    </div>

                                    <div class="h-px my-8 bg-txt border-0 dark:bg-txt"> </div>

                                    <ul className="text-xl text-txt paragraph mt-2">
                                        <li>• Worked as a 3rd Year ECE Class Representative and an ECE Academic Director</li>
                                    </ul>
                                </div>
                            </div>
                    </div>
                </div>
            </div>

            {/* Contact: */}
            <section id="contact" />

        </div>     
    )
  }