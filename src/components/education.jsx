import { EDUCATION } from '../constants';
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
    return (
        <div id="education" className="border-b border-neutral-900 pb-16">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8 }}
                className="my-16 text-center text-4xl bg-clip-text tracking-tight font-black text-neutral-900">
                Education
            </motion.h2>
            <div className="max-w-4xl mx-auto space-y-6">
                {EDUCATION.map((item, index) => (
                    <motion.div
                        key={index}
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        className="p-6 rounded-2xl border border-neutral-200 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-xl bg-purple-100 text-purple-800 text-2xl mt-1">
                                <FaGraduationCap />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-neutral-900">{item.degree}</h3>
                                <p className="text-sm text-neutral-600 mt-0.5">{item.institution}</p>
                            </div>
                        </div>
                        <div className="md:text-right">
                            <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-sm font-semibold">
                                {item.score}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Education;
