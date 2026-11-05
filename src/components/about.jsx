import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import { FaServer, FaCode, FaCogs, FaUsers } from "react-icons/fa";

function About() {
  const highlights = [
    {
      icon: <FaCode className="text-2xl text-purple-700" />,
      title: "Full-Stack & Microfrontends",
      desc: "Angular, React, TypeScript, Module Federation, RxJS and NgRx",
    },
    {
      icon: <FaServer className="text-2xl text-blue-700" />,
      title: "High-Volume Backend",
      desc: "Golang microservices, Kafka, Redis, and PostgreSQL handling 250M+ req/day",
    },
    {
      icon: <FaCogs className="text-2xl text-emerald-700" />,
      title: "Data Pipelines & DevOps",
      desc: "ClickHouse, Elasticsearch, Docker, Kubernetes, CI/CD, Azure & GCP",
    },
    {
      icon: <FaUsers className="text-2xl text-amber-700" />,
      title: "Agile Leadership",
      desc: "End-to-end feature delivery, code refactoring, mentoring, and sprint tracking",
    },
  ];

  return (
    <div id="about" className="border-b border-neutral-900 pb-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        className="my-16 text-center text-4xl font-black bg-clip-text tracking-tight text-neutral-900">
        About Me
      </motion.h2>

      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -60 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2">
          <p className="text-neutral-700 text-lg leading-relaxed font-normal">
            {ABOUT_TEXT}
          </p>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 60 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-neutral-200 bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-3">{item.icon}</div>
              <h4 className="font-semibold text-neutral-900 mb-1">{item.title}</h4>
              <p className="text-xs text-neutral-600 leading-normal">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default About;
