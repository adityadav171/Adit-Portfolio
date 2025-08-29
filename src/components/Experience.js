import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Award, Building, Clock, Star, CheckCircle } from 'lucide-react';
import '../styles/components/Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'LogicLoom IT Solutions',
      position: 'Node.js Developer',
      duration: 'June 2025 - Present',
      location: 'Remote',
      type: 'Full-time',
      current: true,
      description: 'Currently developing scalable backend solutions and optimizing database performance for enterprise applications.',
      achievements: [
        'Engineered 15+ robust RESTful APIs using Node.js and Express.js with JWT authentication, achieving 99.9% uptime',
        'Optimized PostgreSQL database schemas using Sequelize ORM, improving query performance by 40% and reducing latency',
        'Architected advanced API that converts natural language queries to JSON, enabling dynamic data fetching across 20+ tables'
      ],
      technologies: ['Node.js', 'Express.js', 'PostgreSQL', 'Sequelize ORM', 'JWT', 'RESTful APIs']
    },
    {
      company: 'OctaNet Services Pvt Ltd',
      position: 'Software Developer Intern',
      duration: 'June 2024 - July 2024',
      location: 'Remote',
      type: 'Internship',
      current: false,
      description: 'Developed responsive web applications and enhanced user experience through modern design practices.',
      achievements: [
        'Developed a comprehensive to-do list application using HTML, CSS, and JavaScript, improving task organization for 500+ users',
        'Implemented advanced task management features with 30% faster task updates',
        'Enhanced UI/UX with responsive design, reducing bounce rate by 25% on mobile devices'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'UI/UX']
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2>Experience & Education</h2>
          <p>My professional journey and academic achievements</p>
        </motion.div>

        <div className="experience-content">
          {/* Professional Experience */}
          <div className="experience-section">
            <div className="section-title">
              <Building size={24} />
              <h3>Professional Experience</h3>
            </div>
            
            <div className="timeline">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className={`experience-card ${exp.current ? 'current' : ''}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="experience-header">
                    <div className="experience-title">
                      <h4>{exp.position}</h4>
                      <div className="company-name">
                        <Building size={16} />
                        {exp.company}
                      </div>
                    </div>
                    
                    <div className="experience-meta">
                      <div className="duration">
                        <Calendar size={16} />
                        {exp.duration}
                      </div>
                      <div className="location">
                        <MapPin size={16} />
                        {exp.location}
                      </div>
                      <span className={`type ${exp.type.toLowerCase().replace('-', '')}`}>
                        {exp.current && <Clock size={14} />}
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  
                  <p className="experience-description">{exp.description}</p>
                  
                  <div className="achievements">
                    <h5>
                      <Star size={16} />
                      Key Achievements
                    </h5>
                    <ul>
                      {exp.achievements.map((achievement, achieveIndex) => (
                        <li key={achieveIndex}>
                          <CheckCircle size={16} />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="technologies">
                    <h5>Technologies Used:</h5>
                    <div className="tech-tags">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="education-section">
            {/* Education */}
            <div className="section-title">
              <Award size={24} />
              <h3>Education</h3>
            </div>
            
            <motion.div
              className="education-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="education-header">
                <div className="education-details">
                  <h4>Bachelor of Technology - Computer Science Engineering</h4>
                  <div className="institution-name">
                    <Building size={16} />
                    Chaudhary Charan Singh University
                  </div>
                  <div className="education-meta">
                    <span className="duration">
                      <Calendar size={16} />
                      Aug 2021 - May 2025
                    </span>
                    <span className="location">
                      <MapPin size={16} />
                      Meerut, UP, India
                    </span>
                  </div>
                </div>
                <div className="gpa-badge">
                  <span className="gpa-label">CGPA</span>
                  <span className="gpa-value">7.0/10</span>
                </div>
              </div>

              <div className="coursework">
                <h5>Relevant Coursework:</h5>
                <div className="coursework-tags">
                  <span className="course-tag">Data Structures & Algorithms</span>
                  <span className="course-tag">Database Management Systems</span>
                  <span className="course-tag">Web Technologies</span>
                  <span className="course-tag">Software Engineering</span>
                  <span className="course-tag">Operating Systems</span>
                  <span className="course-tag">Computer Networks</span>
                </div>
              </div>

              <div className="education-achievements">
                <h5>Academic Achievements:</h5>
                <ul>
                  <li>
                    <CheckCircle size={16} />
                    Specialized in Full-Stack Development and Database Design
                  </li>
                  <li>
                    <CheckCircle size={16} />
                    Active participation in coding competitions and hackathons
                  </li>
                  <li>
                    <CheckCircle size={16} />
                    Member of Computer Science Society and Programming Club
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Certifications */}
            <div className="section-title">
              <Award size={24} />
              <h3>Certifications & Achievements</h3>
            </div>
            
            <div className="certifications-grid">
              <motion.div
                className="certification-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="cert-header">
                  <div className="cert-icon">
                    <CheckCircle size={20} />
                  </div>
                  <div className="cert-date">2024</div>
                </div>
                <h4>Robotics Operating System (ROS) Certification</h4>
                <p>ROS Foundation</p>
                <span className="verified-badge">Verified</span>
              </motion.div>

              <motion.div
                className="certification-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="cert-header">
                  <div className="cert-icon">
                    <CheckCircle size={20} />
                  </div>
                  <div className="cert-date">2024</div>
                </div>
                <h4>All India Rank 11,635 in NCAT</h4>
                <p>Naukri Campus</p>
                <span className="verified-badge">Verified</span>
              </motion.div>

              <motion.div
                className="certification-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="cert-header">
                  <div className="cert-icon">
                    <CheckCircle size={20} />
                  </div>
                  <div className="cert-date">Ongoing</div>
                </div>
                <h4>400+ DSA Problems Solved</h4>
                <p>LeetCode, HackerRank, CodeChef</p>
                <span className="verified-badge">Verified</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
