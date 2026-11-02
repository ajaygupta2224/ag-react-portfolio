import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Contact() {
    return (
        <div id="contact" className="pb-24 pt-8">
            <motion.h2 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8 }}
                className="my-16 text-center text-4xl bg-clip-text tracking-tight font-black text-neutral-900">
                Get In Touch
            </motion.h2>

            <motion.p
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="text-center text-neutral-600 max-w-lg mx-auto mb-10 text-sm">
                Feel free to reach out for software engineering opportunities, collaborations, or tech discussions.
            </motion.p>

            <div className="max-w-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <motion.div 
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="p-6 rounded-2xl border border-neutral-200 bg-white/80 shadow-sm flex flex-col items-center">
                    <div className="p-3 rounded-full bg-blue-100 text-blue-700 text-xl mb-3">
                        <FaMapMarkerAlt />
                    </div>
                    <span className="text-xs uppercase font-bold text-neutral-500 tracking-wider mb-1">Location</span>
                    <p className="text-sm font-medium text-neutral-800">{CONTACT.address}</p>
                </motion.div>

                <motion.div 
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="p-6 rounded-2xl border border-neutral-200 bg-white/80 shadow-sm flex flex-col items-center">
                    <div className="p-3 rounded-full bg-green-100 text-green-700 text-xl mb-3">
                        <FaPhoneAlt />
                    </div>
                    <span className="text-xs uppercase font-bold text-neutral-500 tracking-wider mb-1">Phone</span>
                    <a 
                        href={`tel:${CONTACT.phoneNo.replace(/\s+/g, '')}`} 
                        className="text-sm font-medium text-neutral-800 hover:text-green-700 transition-colors">
                        {CONTACT.phoneNo}
                    </a>
                </motion.div>

                <motion.div 
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="p-6 rounded-2xl border border-neutral-200 bg-white/80 shadow-sm flex flex-col items-center">
                    <div className="p-3 rounded-full bg-purple-100 text-purple-700 text-xl mb-3">
                        <FaEnvelope />
                    </div>
                    <span className="text-xs uppercase font-bold text-neutral-500 tracking-wider mb-1">Email</span>
                    <a 
                        href={`mailto:${CONTACT.email}?subject=Inquiry`} 
                        className="text-xs font-semibold text-purple-800 hover:underline break-all">
                        {CONTACT.email}
                    </a>
                </motion.div>
            </div>

            <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-16 text-center text-xs text-neutral-500">
                &copy; {new Date().getFullYear()} Ajay Gupta. All rights reserved.
            </motion.div>
        </div>
    );
}

export default Contact;
