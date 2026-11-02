import { EXPERIENCES } from '../constants';
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

function Experience() {
    return (
        <div id="experience" className="border-b border-neutral-900 pb-16">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8 }}
                className="my-16 text-center text-4xl bg-clip-text tracking-tight font-black text-neutral-900">
                Work Experience
            </motion.h2>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className="mb-12 flex flex-wrap lg:justify-center items-start">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -60 }}
                            transition={{ duration: 0.8 }}
                            className="w-full lg:w-1/4 mb-4 lg:mb-0">
                            <div className="flex items-center gap-2 text-neutral-800 font-semibold text-lg">
                                <FaBriefcase className="text-purple-700" />
                                <span>{experience.year}</span>
                            </div>
                            <span className="inline-block mt-2 text-xs font-semibold px-2.5 py-1 rounded bg-purple-50 text-purple-800 border border-purple-200">
                                Full-Time
                            </span>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 60 }}
                            transition={{ duration: 0.8 }}
                            className="w-full max-w-2xl lg:w-3/4">
                            <h3 className="mb-2 text-xl font-bold text-neutral-900">
                                {experience.role}{' '}
                                <span className="text-purple-800 font-semibold">| {experience.company}</span>
                            </h3>

                            {Array.isArray(experience.description) ? (
                                <ul className="mb-6 space-y-2.5 text-neutral-700 text-sm leading-relaxed list-disc pl-5">
                                    {experience.description.map((bullet, idx) => (
                                        <li key={idx} className="marker:text-purple-700">
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="mb-6 text-neutral-700 text-sm leading-relaxed">
                                    {experience.description}
                                </p>
                            )}

                            <div className="flex flex-wrap gap-2 mt-4">
                                {experience.technologies.map((tech, tIdx) => (
                                    <span 
                                        key={tIdx} 
                                        className="rounded border border-purple-300 bg-purple-50/70 px-2.5 py-1 text-xs font-medium text-purple-900">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;
