import React from 'react';
import './App.css';

const quotes = [
  'Self-belief and hard work will always earn you success',
  'Every thought is a cause & every condition is an effect',
  'The only path by which another person can upset you is through your own thoughts',
  'Just keep your conscious mind busy with the expectation of the best',
  'Whatever you want to do, do with full passion and work really hard towards it',
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function App() {
  const randomQuote = getRandomQuote();
  return (
    <div className="App">
      <nav className="navbar">
        <div className="container">
          <div className="logo">DG</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#achievements">Achievements</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#interests">Interests</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <main>
        <section id="home" className="section home-section">
          {/* <img src="/profile.jpg" alt="Profile" className="profile-img" /> */}
          <h2 style={{color:'#ff2d55', margin:'0.5rem 0'}}>Welcome to my portfolio</h2>
          <h1>DHANAJEYAN GANESAN</h1>
          <p><b>Location:</b> Tirunelveli &nbsp; | &nbsp; <b>Phone:</b> +91 7418651750 &nbsp; | &nbsp; <b>Email:</b> DHANAJEYAN112004@GMAIL.COM</p>
          <p>
            Final-year B.TECH Information Technology student with strong background in Java, web development (HTML/CSS). Keen to learn full-stack development and AI-based solutions, with hands-on experience as part of mini projects, hackathons, and an AI-based green finance platform developed recently. Quick learner with proven flexibility, leadership potential, and a learn-and-grow outlook. Open to improvement of aptitude, communication, and technical skills to contribute effectively within a fast-paced IT environment.
          </p>
          <div style={{marginTop: '1.5rem'}}>
            <a href="https://github.com/Dhanajeyan-1/Dhanajeyan-1" className="profile-link" target="_blank" rel="noopener noreferrer">GITHUB</a> &nbsp;|&nbsp; <a href="https://www.linkedin.com/in/dhanajeyan-ganesan" className="profile-link" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
          </div>
        </section>
        <section id="about" className="section about-section">
          <h2>About</h2>
          <p>
            Final-year B.TECH Information Technology student with strong background in Java, web development (HTML/CSS). Keen to learn full-stack development and AI-based solutions, with hands-on experience as part of mini projects, hackathons, and an AI-based green finance platform developed recently. Quick learner with proven flexibility, leadership potential, and a learn-and-grow outlook. Open to improvement of aptitude, communication, and technical skills to contribute effectively within a fast-paced IT environment.
          </p>
        </section>
        <section id="education" className="section education-section">
          <h2>Education</h2>
          <div className="card">
            <h3>Muthayammal Engineering College</h3>
            <p>Bachelor of Technology, Information Technology<br/>CGPA: 8.2 | November 2022 - May 2026</p>
          </div>
          <div className="card">
            <h3>Sri Jayendra Swamigal Silver Jubilee Higher Secondary School</h3>
            <p>Higher Secondary Certificate<br/>74.5% | Year of Passing: 2022</p>
          </div>
          <div className="card">
            <h3>Sri Jayendra Swamigal Silver Jubilee Higher Secondary School</h3>
            <p>Secondary School Leaving Certificate<br/>61% | Year of Passing: 2020</p>
          </div>
        </section>
        <section id="projects" className="section projects-section">
          <h2>Projects</h2>
          <div className="card">
            <h3>Hotel Booking Management System</h3>
            <p>A full-stack web application that enables users to book hotel rooms, check availability, and manage bookings online.</p>
            <p>The Hotel Booking Management System is a full-stack web application designed to simplify hotel room reservations and Registration, searching rooms for availability, and booking rooms online are possible for the users. Safe login, booking confirmation, and client database management are provided by the system. An admin panel assists hotel managers to manage rooms, booking, and payment history effectively.</p>
            <p><b>Skills used:</b> JAVA, HTML, CSS, MYSQL</p>
          </div>
          <div className="card">
            <h3>Task Management System</h3>
            <p>A console-based Java application that allows users to create, update, delete, and track tasks.</p>
            <p>The Task Management System is a Java console application programmed to assist users to create, modify, delete, and keep track of their day-to-day tasks. Setting deadlines, reminders, and marking as complete are some features. The system is designed to comply with concepts of Object-Oriented Programming to ensure a clean and modular codebase. Task data is stored using Java's file management or, as an optional feature, MySQL database.</p>
            <p><b>Skills used:</b> JAVA, MYSQL</p>
          </div>
        </section>
        <section id="achievements" className="section achievements-section">
          <h2>Achievements & Certifications</h2>
          <div className="card">
            <h3>🏆 HackIndia 2025 - All India Hackathon</h3>
            <p>Participant<br/>HackIndia Organizing Committee<br/>March 2025</p>
            <p>Participated in a national-level hackathon and contributed to building an AI-based green finance tool.</p>
          </div>
          <div className="card">
            <h3>🥇 Shaastra 2025 IndustrAI Hackathon</h3>
            <p>IIT MADRAS<br/>January 2025</p>
            <p>Participated in the all india level hackathon and built a Real-Time Credit Risk Assessment Using Alternative Data.</p>
          </div>
        </section>
        <section id="skills" className="section skills-section">
          <h2>Skills & Strengths</h2>
          <div className="skills-grid">
            <span>Quick Learner</span>
            <span>Adaptability</span>
            <span>Team Collaboration</span>
            <span>Leadership Qualities</span>
          </div>
          <h3 style={{color:'#ff2d55', marginTop:'2rem'}}>Programming Languages</h3>
          <div className="skills-grid">
            <span>JAVA</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>BOOTSTRAP</span>
          </div>
          <h3 style={{color:'#ff2d55', marginTop:'2rem'}}>Database</h3>
          <div className="skills-grid">
            <span>MYSQL</span>
          </div>
          <h3 style={{color:'#ff2d55', marginTop:'2rem'}}>AI & Machine Learning</h3>
          <div className="skills-grid">
            <span>Basic knowledge applied in projects</span>
          </div>
          <h3 style={{color:'#ff2d55', marginTop:'2rem'}}>Languages</h3>
          <div className="skills-grid">
            <span>TAMIL</span>
            <span>ENGLISH</span>
          </div>
        </section>
        <section id="interests" className="section interests-section">
          <h2>Interests & Hobbies</h2>
          <div className="interests-grid">
            <span>Exploring New Technology Trends<br/><small>Playing and Watching Cricket, Learning About Finance and New Saving Habits</small></span>
            <span>Finance<br/><small>Market Analysis</small></span>
            <span>Tech Trends<br/><small>Latest Innovations</small></span>
            <span>Smart Saving<br/><small>Financial Planning</small></span>
            <span>Reading<br/><small>Technical Blogs</small></span>
            <span>Open Source<br/><small>Contributing</small></span>
            <span>Music<br/><small>Relaxation</small></span>
            <span>Photography<br/><small>Nature & Tech</small></span>
          </div>
        </section>
        <section id="contact" className="section contact-section">
          <h2>Contact</h2>
          <div className="contact-grid">
            <div className="contact-card">
              <h3>Email</h3>
              <p>DHANAJEYAN112004@GMAIL.COM</p>
            </div>
            <div className="contact-card">
              <h3>Phone</h3>
              <p>+91 7418651750</p>
            </div>
            <div className="contact-card">
              <h3>LinkedIn</h3>
              <p><a href="https://www.linkedin.com/in/dhanajeyan-ganesan" target="_blank" rel="noopener noreferrer">Connect with me</a></p>
            </div>
            <div className="contact-card">
              <h3>GitHub</h3>
              <p><a href="https://github.com/Dhanajeyan-1/Dhanajeyan-1" target="_blank" rel="noopener noreferrer">Check out my code</a></p>
            </div>
            <div className="contact-card">
              <h3>Instagram</h3>
              <p><a href="https://www.instagram.com/erebus_11_2004/" target="_blank" rel="noopener noreferrer">Follow my journey</a></p>
            </div>
          </div>
        </section>
        <section className="section quote-section" style={{textAlign:'center',marginTop:'2rem',background:'none',boxShadow:'none'}}>
          <h3 style={{color:'#ff2d55'}}>&quot;{randomQuote}&quot;</h3>
        </section>
      </main>
    </div>
  );
}

export default App;
