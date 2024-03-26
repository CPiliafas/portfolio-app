import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <title>Christos Piliafas Portfolio Page</title>
        <meta name="description" content="portfolio page of my works" />
        <meta name="keywords" content="christos piliafas web design development portfolio page website" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />    
        <link rel="stylesheet" href="style.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300&display=swap" rel="stylesheet" />
        <header>
          <h1>Christos Piliafas Portfolio</h1>
        </header>    
        <section>
          <nav>
            <ul>
              <h3>Proficiencies</h3>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>WordPress/Elementor</li>
              <li>Squarespace</li>
              <li>C#</li>
              <li>Website Moderation/Admin.</li>
              <li>Microsoft Office</li>
              <li>Web Support</li>
              <li>Some Java Knowledge</li>
              <li>Some experience utilizing SEO (Yoast Plugin on WordPress)</li>
              <li>Some SQL Knowledge</li>
              <li>Some AWS Experience</li>
              <br />
              <li>Willing to Learn More Python</li>
            </ul>
          </nav>
          <article>
            <img src="images/portrait.jpg" alt="Christos Piliafas Jr. photo" /> 
            <p>Hello! I am Christos. Ever since I was young I have always had a fascination with websites and how they function, how they're designed, and the purposes and benefits websites can provide. On this site you will find some of my work and some of my proficiencies with web design and web development.</p>
            <p>I'm very passionate about creating websites that help benefit lots of people at large. Whether these pages are informative, filled with resources, or simply for entertainment purposes, I'm very passionate about working towards leaving a positive impact on others, and I feel that programming and web design is a great way for me to work towards that goal.</p>
            <p>I gradauted from Ferris State University in 2023, with both a Bachelor's Degree and Associate's Degree in Computer Information Systems.</p>
            <h2>Select DME Interns Work</h2>
            <ul>
              <li><a href="https://www.dmeinterns.org/intern-policy/">Intern Policy</a></li>
              <li><a href="https://www.dmeinterns.org/web-development/">Web Development</a></li>
              <li><a href="https://www.dmeinterns.org/social-media/">Social Media</a></li>
            </ul>
            <h2>U.S. Embassy of Tokyo Daily Trade Site (private, hosted on SquareSpace)</h2>
            <h2><a href="https://github.com/CPiliafas">Github Repository</a></h2>
            <br></br>
            <br></br>
            <h2>Some Example Work + Links to GitHub Repositories</h2>
            <h3 href="https://github.com/CPiliafas/GalacticCafe">Galactic Cafe Page</h3>
            <p>(insert image)</p>
            <p>This project was for me to begin learning React.js as a framework as well as practicing with media queries. I wanted to create a mock up of a cafe business' web page. Through this project I was able to learn the basics of React and how much I enjoy the framework and wish to use it in the future.</p>
            <br></br>
            <br></br>
            <h3 href="https://github.com/CPiliafas/MKXCompendium">Mortal Kombat X Fan Page</h3>
            <p>(insert image)</p>
            <p>This project was more for fun and to put some of my personality and interests into my work, something I really enjoy doing. I wanted to create a site of sorts with multiple links and different layouts of content. I was inspired by similar styled web pages for other video games I enjoy and wanted to try creating something similar and I'm satisfied with how it turned out.</p>
          </article>
        </section>
        <footer>
          <a href="mailto:piliafasc@gmail.com" className="fa fa-google" />
          <a href="https://www.linkedin.com/in/christos-piliafas/" className="fa fa-linkedin" />
        </footer>
      </div>
    </div>
  );
}

export default App;
