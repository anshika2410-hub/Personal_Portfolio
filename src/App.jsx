import "./App.css"; 
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiSun, FiMoon } from "react-icons/fi";

export default function App() {
  const [dark, setDark] = useState(true);
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText("anshikaagrawal2410@gmail.com");

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000); // 2 sec baad reset
  } catch (err) {
    console.log("Copy failed", err);
  }
};
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    
    <div className={dark ? "container dark" : "container light"}>

       <div className="floating-socials">
        <a href="https://www.linkedin.com/in/contact-anshikaagrawal/" target="_blank" rel="noopener noreferrer">
           <FaLinkedin />
        </a>

        <a href="https://github.com/anshika2410-hub" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
      <div className="bg-orbs">
  <span></span>
  <span></span>
  <span></span>
</div>
    

      {/* NAVBAR */}
      <nav className="navbar">

  <div className="profile">
    <div className="avatar" onClick={() => setMenuOpen(!menuOpen)}>
      👩‍💻
    </div>

    <h2 className="logo">Anshika Agrawal</h2>

    {menuOpen && (
      <div className="dropdown">
        <p onClick={() => scrollToSection("about")}>About Me</p>
        <p onClick={() => scrollToSection("skills")}>Skills</p>
        <p onClick={() => scrollToSection("projects")}>Projects</p>
        <p onClick={() => scrollToSection("certifications")}>Certifications</p>
      </div>
    )}
  </div>

  <div className="nav-actions">
    <a
  href={`${import.meta.env.BASE_URL}Resume2(1).pdf`}
  target="_blank"
  rel="noopener noreferrer"
  className="resume-btn"
>
  📄 Resume
</a>

    <button
      onClick={() => setDark(!dark)}
      className="theme-btn"
    >
      {dark ? <FiSun size={20}/> : <FiMoon size={20}/>}
    </button>
  </div>

</nav>

      {/* HERO */}
      <header className="hero">
        <p className="tag">👋 Hello, I'm</p>
        <h1 className="name">Anshika Agrawal</h1>

        <h2 className="typing">
          <Typewriter
            words={[
              "Software Developer",
              "Python Developer",
              "AI Enthusiast",
              "Web Developer"
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1200}
          />
        </h2>

        <p className="desc">
          I build modern, responsive and intelligent web applications using AI and web technologies.
        </p>
      </header>

      {/* ABOUT */}
<section id="about" className="section">
  <h2 className="heading">About Me</h2>

  <div className="about-content">
    <p>
      Computer Science Engineering Graduate with a specialization in
      Artificial Intelligence & Machine Learning, passionate about building
      modern web applications and AI-powered solutions.
    </p>

    <p>
      Skilled in <strong>React</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, <strong>MongoDB</strong>, <strong>Python</strong>, <strong>FastAPI</strong>, <strong>LangGraph</strong>, <strong>SQL</strong>, <strong>Git</strong>, <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript
      </strong> through hands-on academic and personal projects.
    </p>

    <p>
      Currently seeking <strong>Software Developer</strong> and
      <strong> Full Stack Developer</strong> opportunities to build
      impactful products and continuously grow as a developer.
    </p>
  </div>
</section>

      {/* SKILLS */}
<section id="skills" className="section">
  <h2 className="heading">Skills</h2>

  <div className="skills-container">

    <div className="skill-category">
      <h3>Frontend</h3>
      <div className="skill-list">
        {[
          "React",
          "JavaScript",
          "HTML5",
          "CSS3",
          "Vite"
        ].map((skill) => (
          <span key={skill} className="chip">{skill}</span>
        ))}
      </div>
    </div>

    <div className="skill-category">
      <h3>Backend</h3>
      <div className="skill-list">
        {[
          "Node.js",
          "Express.js",
          "FastAPI"
        ].map((skill) => (
          <span key={skill} className="chip">{skill}</span>
        ))}
      </div>
    </div>

    <div className="skill-category">
      <h3>Database</h3>
      <div className="skill-list">
        {[
          "MongoDB",
          "SQLite",
          "MySQL"
        ].map((skill) => (
          <span key={skill} className="chip">{skill}</span>
        ))}
      </div>
    </div>

    <div className="skill-category">
      <h3>AI & Tools</h3>
      <div className="skill-list">
        {[
          "Python",
          "LangGraph",
          "Socket.IO",
          "Git",
          "GitHub",
          "REST API"
        ].map((skill) => (
          <span key={skill} className="chip">{skill}</span>
        ))}
      </div>
    </div>

  </div>
</section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2 className="heading">Projects</h2>

        <div className="cards">
          <a
  href="https://github.com/anshika2410-hub/AI-First-CRM"
  target="_blank"
  rel="noopener noreferrer"
  className="project-link"
>
  <div className="card">
    <h3>🤖 AI First CRM</h3>
<p>
AI-powered CRM with AI chat, conversation summaries, sentiment analysis, and follow-up recommendations.
</p>

<div className="tech-stack">
  <span>React</span>
  <span>FastAPI</span>
  <span>Python</span>
  <span>LangGraph</span>
  <span>SQLite</span>
</div>
  </div>
  </a>
  <a
  href="https://github.com/anshika2410-hub/realtime-chat-app"
  target="_blank"
  rel="noopener noreferrer"
  className="project-link"
>
  <div className="card">
    <h3>💬 Real-Time Chat Application</h3>
  <p>
    Real-time MERN chat app with authentication, instant messaging, online status, typing indicators, and image sharing.
  </p>

  <div className="tech-stack">
  <span>React</span>
  <span>Node.js</span>
  <span>Express</span>
  <span>MongoDB</span>
  <span>Socket.IO</span>
</div>
  </div>
  </a>

  <a
  href="https://github.com/anshika2410-hub/AI-based-Attendance-management-system"
  target="_blank"
  rel="noopener noreferrer"
  className="project-link"
>
  <div className="card">
    <h3>🧑‍💻 AI Attendance System</h3>
<p>
Face recognition attendance system that automatically detects users and records attendance with improved accuracy.
</p>

<div className="tech-stack">
  <span>Python</span>
  <span>Flask</span>
  <span>OpenCV</span>
  <span>Face Recognition</span>
</div>
  </div>
  </a>

  <a
  href="https://github.com/anshika2410-hub/Personal_Portfolio"
  target="_blank"
  rel="noopener noreferrer"
  className="project-link"
>
  <div className="card">
    <h3>🌐 Personal Portfolio</h3>
<p>
Responsive portfolio showcasing projects, skills, certifications, resume, and contact information.
</p>

<div className="tech-stack">
  <span>React</span>
  <span>Vite</span>
  <span>CSS3</span>
  <span>HTML5</span>
  <span>Javascript</span>
</div>
  </div>
  </a>

</div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="section">
        <h2 className="heading">Certifications</h2>

        <div className="list">
          <p>✔ Web Development Hackathon 1.0 – Tutedude</p>
          <p>✔ AI Masterclass – ISO Certified Program</p>
          <p>✔ Cybersecurity Training – ICT Academy</p>
          <p>✔ Frontend Web Development Internship – CodSoft</p>
          <p>✔ Full Stack Web Development Internship – Internship Studio</p>
        </div>
      </section>

      {/* CONTACT */}
      <footer className="footer">
  <h2 className="heading">Contact</h2>

  <p>
    📧 Email: <a href="mailto:anshikaagrawal2410@gmail.com">anshikaagrawal2410@gmail.com</a>
    
  </p>

  <button onClick={copyEmail} className="copy-btn">
  {copied ? "Copied ✓" : "📋 Copy Email"}
</button>
  <p>📍 India</p>

  <div className="socials">
    <a
      href="https://www.linkedin.com/in/contact-anshikaagrawal/"
      target="_blank"
      rel="noreferrer"
    >
      <FaLinkedin size={28} />
    </a>

    <a
      href="https://github.com/anshika2410-hub"
      target="_blank"
      rel="noreferrer"
    >
      <FaGithub size={28} />
    </a>
    <a
  href="https://wa.me/9140420641"
  target="_blank"
  className="whatsapp-btn"
>
  💬 Hire Me
</a>
  </div>

  <p className="copyright">
  © 2026 Anshika Agrawal. Built with React & Vite.
</p>
</footer>

    </div>
  );
}
