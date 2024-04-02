import logo from './logo.svg';
import './App.css';
import gc1 from './images/gc1.png';
import gc2 from './images/gc2.png';
import mkx1 from './images/mkx1.png';
import mkx2 from './images/mkx2.png';
import mkx3 from './images/mkx3.png';
import mkx4 from './images/mkx4.png';
import mkx5 from './images/mkx5.png';

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
          <div id="scrollable">
          <article>
            <img src="images/portrait.jpg" alt="Christos Piliafas Jr. photo" /> 
            <p>Hello! I am Christos. Ever since I was young I have always had a fascination with websites and how they function, how they're designed, and the purposes and benefits websites can provide. On this site you will find some of my work and some of my proficiencies with web design and web development.</p>
            <p>I'm very passionate about creating websites that help benefit lots of people at large. Whether these pages are informative, filled with resources, or simply for entertainment purposes, I'm very passionate about working towards leaving a positive impact on others, and I feel that programming and web design is a great way for me to work towards that goal.</p>
            <p>I gradauted from Ferris State University in 2023, with both a Bachelor's Degree and Associate's Degree in Computer Information Systems.</p>
            <h2>Select DME Interns Work</h2>
              <ol><a href="https://www.dmeinterns.org/intern-policy/">Intern Policy</a></ol>
              <ol><a href="https://www.dmeinterns.org/web-development/">Web Development</a></ol>
              <ol><a href="https://www.dmeinterns.org/social-media/">Social Media</a></ol>
            <h2>U.S. Embassy of Tokyo Daily Trade Site (private, hosted on SquareSpace)</h2>
              <ol>During this internship, I was given the opportuniity to help create a website through SquareSpace that displayed and archived various Daily Trade Newsletter articles for the U.S. Embassy of Tokyo, Japan. Alongside another web developer intern, the two of us designed, updated, and managed the website. We also wrote documentation for updating and managing the website for when we left. We also formatted various articles near daily during the course of the internship.</ol>
            <h2>Grand Traverse Internists Contract Work</h2>
              <ol>Over time, I have helped change aspects of the site's visuals. Such as layout, fonts, images, etc., while also testing functionality, accessibility, and SEO.</ol>
              <ol><a href="https://gtinternists.com/">Grand Traverse Internists Website</a></ol>
            <ol><a href="https://github.com/CPiliafas">Github Repository</a></ol>
            <br></br>
            <h2>Some Example Work + Links to GitHub Repositories</h2>
            <ol><a href="https://github.com/CPiliafas/GalacticCafe">Galactic Cafe Page</a></ol>
            <img src={gc1} alt="Galactic Cafe Image 1" width="900px" height="600px"/>
            <br />
            <img src={gc2} alt="Galactic Cafe Image 2" width="900px" height="600px"/>
            <p>This project was for me to begin learning React.js as a framework as well as practicing with media queries. I wanted to create a mock up of a cafe business' web page. Through this project I was able to learn the basics of React and how much I enjoy the framework and wish to use it in the future.</p>
            <br />
            <ol><a href="https://github.com/CPiliafas/MKXCompendium">Mortal Kombat X Fan Page</a></ol>
            <div class="responsive">
            <div class="gallery">
              <a target="_blank" href="/images/mkx1.png">
                <img src={mkx1} alt="Mortal Kombat X Index Page" width="800" height="500"/>
              </a>
              <div class="desc">This index page delivers a brief paragraph about the video game Mortal Kombat X. On the right half of the page is a grid featuring each of the playable fighters available in the game. Clicking one takes you to that character's dedidcated page.</div>
            </div>
          </div>
          <br />

        <div class="responsive">
          <div class="gallery">
            <a target="_blank" href="./images/mkx2.png">
              <img src={mkx2} alt="Sub-Zero Character Info Page" width="800" height="500" />
            </a>
            <div class="desc">Each character page features information about them.</div>
          </div>
        </div>
        <br />

        <div class="responsive">
          <div class="gallery">
            <a target="_blank" href="./images/mkx3.png">
              <img src={mkx3} alt="Sub-Zero Character Move List Section" width="800" height="500" />
            </a>
            <div class="desc">Each character page features gameplay information such as their special moves and the inputs players need to do to use them.</div>
          </div>
        </div>
        <br />

        <div class="responsive">
          <div class="gallery">
            <a target="_blank" href="./images/mkx4.png">
              <img src={mkx4} alt="Mortal Kombat X About Page" width="800" height="500" />
            </a>
            <div class="desc">The About page dives a little more into why I made the project as well as listing out resources I used.</div>
          </div>
        </div>
        <br />

        <div class="responsive">
          <div class="gallery">
            <a target="_blank" href="./images/mkx5.png">
              <img src={mkx5} alt="Gameplay Information Page" width="800" height="500" />
            </a>
            <div class="desc">The Gameplay Info page dives more into the mechanics and features of Mortal Kombat X.</div>
          </div>
        </div>
        <br />
            <p>This project was more for fun and to put some of my personality and interests into my work, something I really enjoy doing. I wanted to create a site of sorts with multiple links and different layouts of content. I was inspired by similar styled web pages for other video games I enjoy and wanted to try creating something similar and I'm satisfied with how it turned out.</p>
          </article>
            </div>
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
