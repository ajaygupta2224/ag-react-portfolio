import { HERO_CONTENT, CONTACT } from "../constants";
import profilePic from "../assets/profile-photo.jpg";
import "./profile.scss";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Profile() {
    return (
        <div className="border-b border-neutral-900 pb-12 lg:mb-20 profile-root">
            <div className="flex flex-wrap items-center">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <motion.h1 
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="pb-4 text-5xl font-light tracking-tight lg:mt-8 lg:text-7xl">
                            Ajay Gupta
                        </motion.h1>
                        <motion.span
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="bg-gradient-to-r from-neutral-900 via-purple-900 to-blue-800 bg-clip-text text-2xl lg:text-3xl tracking-tight font-black text-transparent mb-4">
                            Software Developer Engineer
                        </motion.span>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="flex flex-wrap gap-2 mb-4 justify-center lg:justify-start">
                            <span className="bg-purple-100 text-purple-900 text-xs font-semibold px-3 py-1 rounded-full border border-purple-300">
                                4+ Years Experience
                            </span>
                            <span className="bg-blue-100 text-blue-900 text-xs font-semibold px-3 py-1 rounded-full border border-blue-300">
                                Jio Platforms Limited
                            </span>
                            <span className="bg-lime-100 text-lime-900 text-xs font-semibold px-3 py-1 rounded-full border border-lime-300">
                                Microfrontends & Distributed Systems
                            </span>
                        </motion.div>
                        <motion.p 
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="my-2 max-w-xl text-neutral-700 leading-relaxed font-normal">
                            {HERO_CONTENT}
                        </motion.p>
                        <motion.div
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start items-center">
                            <a
                                href="#contact"
                                className="px-6 py-2.5 rounded-lg bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-colors shadow">
                                Contact Me
                            </a>
                            <a
                                href={`mailto:${CONTACT.email}`}
                                className="px-6 py-2.5 rounded-lg border border-neutral-400 text-neutral-800 text-sm font-medium hover:bg-neutral-100 transition-colors flex items-center gap-2">
                                <FaEnvelope /> Email Me
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ajay-gupta-4281311ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 rounded-lg border border-neutral-300 text-blue-700 hover:bg-blue-50 transition-colors text-lg"
                                aria-label="LinkedIn">
                                <FaLinkedin />
                            </a>
                            <a
                                href="https://github.com/ajaygupta2224"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 rounded-lg border border-neutral-300 text-neutral-800 hover:bg-neutral-100 transition-colors text-lg"
                                aria-label="GitHub">
                                <FaGithub />
                            </a>
                        </motion.div>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8 flex justify-center items-center mt-10 lg:mt-0'>
                    <div className='flex justify-center'>
                        <motion.img 
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            src={profilePic}
                            className='profile-pic rounded-2xl shadow-xl object-cover border-4 border-white'
                            alt="Ajay Gupta" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
