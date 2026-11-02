import { RiReactjsLine } from "react-icons/ri";
import { 
  SiAngular, 
  SiTypescript, 
  SiGo, 
  SiNodedotjs, 
  SiApachekafka, 
  SiPostgresql, 
  SiRedis, 
  SiDocker, 
  SiKubernetes, 
  SiClickhouse, 
  SiElasticsearch 
} from "react-icons/si";
import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from '../constants';

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  },
});

function Technologies() {
  const coreTech = [
    { icon: <SiGo className="text-6xl text-cyan-500" />, name: "Golang", duration: 2.5 },
    { icon: <SiAngular className="text-6xl text-red-600" />, name: "Angular", duration: 3.5 },
    { icon: <RiReactjsLine className="text-6xl text-cyan-400" />, name: "React", duration: 2.8 },
    { icon: <SiTypescript className="text-6xl text-blue-600" />, name: "TypeScript", duration: 4.2 },
    { icon: <SiNodedotjs className="text-6xl text-green-600" />, name: "Node.js", duration: 3.2 },
    { icon: <SiApachekafka className="text-6xl text-neutral-800" />, name: "Kafka", duration: 4.8 },
    { icon: <SiPostgresql className="text-6xl text-sky-700" />, name: "PostgreSQL", duration: 2.6 },
    { icon: <SiRedis className="text-6xl text-red-500" />, name: "Redis", duration: 3.8 },
    { icon: <SiClickhouse className="text-6xl text-amber-500" />, name: "ClickHouse", duration: 4.5 },
    { icon: <SiElasticsearch className="text-6xl text-teal-600" />, name: "Elasticsearch", duration: 3.1 },
    { icon: <SiDocker className="text-6xl text-blue-500" />, name: "Docker", duration: 4.0 },
    { icon: <SiKubernetes className="text-6xl text-blue-600" />, name: "Kubernetes", duration: 2.9 },
  ];

  return (
    <div id="technologies" className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        className="my-16 text-center text-4xl font-black bg-clip-text tracking-tight text-neutral-900">
        Technical Skills & Stack
      </motion.h2>

      {/* Floating Animated Icons */}
      <motion.div
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap items-center justify-center gap-4 mb-16">
        {coreTech.map((tech, index) => (
          <motion.div
            key={index}
            variants={iconVariants(tech.duration)}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center justify-center rounded-2xl border-2 border-neutral-300 bg-white/80 p-4 shadow-sm hover:shadow-md transition-shadow">
            {tech.icon}
            <span className="mt-2 text-xs font-semibold text-neutral-700">{tech.name}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Categorized Skills Breakdown */}
      <motion.div 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <div 
            key={idx} 
            className="rounded-xl border border-neutral-200 bg-white/80 p-5 shadow-sm hover:border-neutral-400 transition-colors">
            <h3 className="text-sm font-bold uppercase tracking-wider text-purple-900 mb-3 border-b border-neutral-200 pb-2">
              {cat.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, sIdx) => (
                <span 
                  key={sIdx} 
                  className="rounded-md bg-neutral-100 border border-neutral-300 px-2.5 py-1 text-xs font-medium text-neutral-800 hover:bg-neutral-200 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Technologies;
