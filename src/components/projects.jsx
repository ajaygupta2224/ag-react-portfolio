import { PROJECTS } from '../constants';
import { motion } from "framer-motion";

function Projects() {
    return (
        <div id="projects" className="border-b border-neutral-900 pb-16">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8 }}
                className="my-16 text-center text-4xl font-black bg-clip-text tracking-tight text-neutral-900">
                Key Projects & Systems
            </motion.h2>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-14 flex flex-wrap lg:justify-center items-start">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -60 }}
                            transition={{ duration: 0.8 }}
                            className="w-full lg:w-1/4 flex justify-center lg:justify-start mb-6 lg:mb-0">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="rounded-xl h-36 w-52 object-cover border-2 border-neutral-200 shadow-md hover:scale-105 transition-transform duration-300" />
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 60 }}
                            transition={{ duration: 0.8 }}
                            className="w-full max-w-2xl lg:w-3/4">
                            <h3 className="mb-2 font-bold text-2xl text-neutral-900">{project.title}</h3>

                            {Array.isArray(project.description) ? (
                                <ul className="mb-4 space-y-1.5 text-neutral-700 text-sm leading-relaxed list-disc pl-5">
                                    {project.description.map((point, idx) => (
                                        <li key={idx} className="marker:text-blue-600">
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="mb-4 text-neutral-700 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                            )}

                            {project.technologies && (
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {project.technologies.map((tech, tIdx) => (
                                        <span 
                                            key={tIdx} 
                                            className="rounded-md border border-neutral-300 bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-800">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
