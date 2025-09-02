import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import '../styles/components/Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="floating-shapes">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`shape shape-${i + 1}`}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      <div className="hero-container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-text" variants={itemVariants}>
            <motion.h1 
              className="hero-title"
              variants={itemVariants}
            >
              Hi, I'm <span className="highlight">Adit Yadav</span>
            </motion.h1>

            <motion.h2 
              className="hero-subtitle"
              variants={itemVariants}
            >
              Full-Stack Developer & Node.js Expert
            </motion.h2>

            <motion.p 
              className="hero-description"
              variants={itemVariants}
            >
              Passionate about creating robust web applications with modern technologies. 
              Currently building scalable APIs and full-stack solutions at LogicLoom IT Solutions.
            </motion.p>

            <motion.div 
              className="hero-actions"
              variants={itemVariants}
            >
              <motion.a
                href="#contact"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={18} />
                Get In Touch
              </motion.a>

              <motion.a
                href="https://drive.google.com/file/d/14RMVrGVXyRgDhnNnal7Ja_90ZtASfz0i/view?usp=drivesdk"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                download
              >
                <Download size={18} />
                Download CV
              </motion.a>
            </motion.div>

            <motion.div 
              className="social-links"
              variants={itemVariants}
            >
              <motion.a
                href="https://github.com/adityadav171"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/adit-yadav-74794822a/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="mailto:Adityadav171@gmail.com"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={20} />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div className="hero-image" variants={itemVariants}>
            <div className="image-container">
              <img 
                src="/images/default-avatar.jpeg" 
                alt="Adit Yadav Profile Photo"
                className="avatar-image"
              />
              <div className="image-overlay"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
