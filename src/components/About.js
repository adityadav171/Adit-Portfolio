import React from 'react';
import { motion } from 'framer-motion';
import { Code, GraduationCap, Award } from 'lucide-react';
import '../styles/components/About.css';

const About = () => {
  const stats = [
    { icon: Code, label: 'DSA Problems Solved', value: '400+' },
    { icon: GraduationCap, label: 'CGPA', value: '7.0' },
    { icon: Award, label: 'NCAT Rank', value: '11,635' }
  ];

  const highlights = [
    'Bachelor of Technology in Computer Science Engineering',
    'Currently working as Node.js Developer at LogicLoom IT Solutions',
    'All India Rank 11,635 in NCAT by Naukri Campus',
    'Solved 400+ Data Structures and Algorithms problems',
    'Completed Robotics Operating System (ROS) Certification'
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2>About Me</h2>
          <p>Get to know more about my journey and passion for technology</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Hello! I'm Adit Yadav</h3>
            <p className="intro-text">
              A passionate Full-Stack Developer with expertise in modern web technologies. 
              I'm currently working as a Node.js Developer at LogicLoom IT Solutions, 
              where I build robust APIs and scalable web applications.
            </p>
            
            <p>
              My journey began during my Computer Science studies, and I've developed 
              a strong foundation in both frontend and backend technologies. I love 
              solving complex problems and creating efficient solutions that make a real impact.
            </p>

            <p>
              When I'm not coding, you can find me solving algorithmic challenges on 
              competitive programming platforms or exploring new technologies.
            </p>

            <div className="highlights">
              <h4>Key Achievements</h4>
              <ul>
                {highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {highlight}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="stats-container">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="stat-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  viewport={{ once: true }}
                >
                  <div className="stat-icon">
                    <stat.icon size={28} />
                  </div>
                  <div className="stat-content">
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="personal-note"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4>Philosophy</h4>
              <p>
                "I believe that great software is built with empathy for users 
                and a commitment to continuous improvement."
              </p>
            </motion.div>

            <motion.div
              className="current-focus"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4>Currently Learning</h4>
              <div className="learning-tags">
                <span>System Design</span>
                <span>Microservices</span>
                <span>DevOps</span>
                <span>Machine Learning</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
