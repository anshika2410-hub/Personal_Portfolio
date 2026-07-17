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
    <a href="Resume2(1).pdf" download className="resume-btn">
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

        <p className="text">
          Software Developer | Computer Science Engineering Graduate (AI & ML specialization)
        </p>

        <p className="text">
          I am passionate about building intelligent and user-friendly applications using modern technologies.
        </p>

        <p className="text">
          I have hands-on experience in Python, Flask, OpenCV, React, and MySQL.
        </p>

        <p className="text">
          I am actively seeking opportunities to grow as a Software Developer.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <h2 className="heading">Skills</h2>
        <div className="grid">
          {[
            "Python","JavaScript","React","Flask",
            "OpenCV","Git","MySQL","HTML","CSS"
          ].map((skill, i) => (
            <span key={i} className="chip">{skill}</span>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2 className="heading">Projects</h2>

        <div className="cards">
          <div className="card">
            <h3>AI Attendance System</h3>
            <p>Face recognition based attendance system using OpenCV & Flask.</p>
          </div>

          <div className="card">
            <h3>Portfolio Website</h3>
            <p>Modern responsive portfolio built using React.</p>
          </div>

          <div className="card">
            <h3>E-Commerce UI</h3>
            <p>Frontend shopping UI with modern design system.</p>
          </div>
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
</footer>

    </div>
  );
}
