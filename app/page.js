"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [ messageInput, setMessageInput ] = useState('');

  const [messages, setMessages] = useState([
		{
			role: 'assistant',
			content: 'How can I help you learn more about Raj and his Resume?'
		}
  ]);

  const submitForm = async (e) => {
    e.preventDefault();
    let newMessages = [...messages, { role: 'user', content: messageInput }]
    setMessages(newMessages);
    setMessageInput('');
    const apiMessage = await fetch(
      '/api',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: newMessages })
      }
    ).then(res => res.json());
    setMessages([...newMessages, { role: 'assistant', content: apiMessage.message }]);
  }

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <header>
        <a href="#" className="logo-holder">
          <div className="logo">R</div>
        </a>
        <nav>
          <ul id="menu" className={menuOpen ? "active" : ""}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
			<li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="mailto:rajkumar.thanudhasan@gmail.com" className="button">Contact Me</a>
            </li>
          </ul>
          <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h10"/>
            </svg>
          </a>
        </nav>
      </header>
      <main>
        <section className="hero container">
          <div className="hero-blue">
            <div>
              <h1><small>Hi I'm</small>
                Rajkumar Thanudhasan
              </h1>
              <p>
                As a seasoned RPA professional, I specialize in designing and implementing automation solutions that drive business efficiency, reduce costs, and enhance productivity. <span>With a proven track record of delivering high-impact results, including $500,000 in annual expense reductions and 95% automation success rates, I excel at bridging technical and business processes to drive digital transformation.</span>
              </p>
              <div className="call-to-action">
                <a href="./Rajkumar_Thanudhasan_Resume.pdf" className="button black">
                  View Resume
                </a>
                <a href="mailto:rajkumar.thanudhasan@gmail.com" className="button white">
                  Contact Me
                </a>
              </div>
              <div className="social-links">
                <a href="#">
                  <img src="./imgs/github.png" alt="GitHub" width="48" />
                </a>
                <a href="https://www.linkedin.com/in/rajkumarthanudhasan/"target="_blank">
                  <img src="./imgs/linkedin.png" alt="LinkedIn" width="48" />
                </a>
              </div>
            </div>
          </div>
          <div className="hero-yellow">
            <img src="./imgs/hero-image.png" alt="Rajkumar Thanudhasan" width="100%" />
          </div>
        </section>
        <section className="logos container">
          <div className="marquee">
            <div className="track">
				<img src="./imgs/html.png" alt="HTML" width="128" />
				<img src="./imgs/css.png" alt="CSS" width="128" />
				<img src="./imgs/javascript.png" alt="JS" width="128" />
				<img src="./imgs/PATH.png" width="128" alt="UiPath" />
				<img src="./imgs/Prism.png" width="128" alt="Prism" />
				<img src="./imgs/AWS.png" width="128" alt="AWS" />
				<img src="./imgs/azure.png" width="128" alt="Azure" />
				<img src="./imgs/vscode.png" width="128" alt="VS Code" />
				<img src="./imgs/python.png" width="128" alt="Python" />
				<img src="./imgs/Abbyy.png" alt="Abbyy" width="128" />
				<img src="./imgs/MS_Power_Automate.png" alt="Power Automate" width="128" />
				<img src="./imgs/xml.png" alt="xml" width="128" />
				<img src="./imgs/Selenium.png" width="128" alt="Selenium" />
				<img src="./imgs/Oracle.png" width="128" alt="Oracle" />
				<img src="./imgs/salesforce.png" width="128" alt="salesforce" />
				<img src="./imgs/GTLB.png" width="128" alt="GTLB" />
				<img src="./imgs/github.png" width="128" alt="github" />
				<img src="./imgs/postman.png" width="128" alt="postman" />
				<img src="./imgs/pycharm.png" width="128" alt="pycharm" />
				<img src="./imgs/ServiceNow.png" width="128" alt="ServiceNow" />
				<img src="./imgs/jira.png" width="128" alt="jira" />
				<img src="./imgs/ChatGpt.png" width="128" alt="ChatGpt" />
				<img src="./imgs/html.png" alt="HTML" width="128" />
            </div>
          </div>
        </section>
        <section id="skills" className="skills container">
          <h2>
            <small>About Me</small>
            Skills
          </h2>
          <div className="holder-blue">
            <div className="left-column">
				<h3>Cloud Platforms</h3>
				<ul>						
					<li>AWS</li>
					<li>UiPath Cloud Orchestrator</li>
					<li>Azure</li>
				</ul>
				<h3>Automation Tools / Framework</h3>
				<ul>
					<li>UiPath Studio</li>
					<li>Blue Prism</li>
					<li>RIDE</li>
					<li>Selenium</li>
					<li>ABBYY</li>
					<li>Appzen</li>
					<li>Microsoft Power Automate</li>
					<li>RobotFramework (RPA)</li>
					<li>TestNG</li>
					<li>Junit</li>
				</ul>
				<h3>Programming Languages</h3>
				<ul>
					<li>C#</li>
					<li>.NET</li>
					<li>Python</li>
					<li>XML</li>
				</ul>
				<h3>DBMS / ERP / CRM Tools</h3>
				<ul>
					<li>Oracle DB</li>
					<li>SQL Server</li>
					<li>Cache</li>
					<li>Oracle EBS</li>
					<li>Oracle Fusion Cloud</li>
					<li>Salesforce</li>
				</ul>
				<h3>Design and Development Tools</h3>
				<ul>
					<li>Visual Studio 2017</li>
					<li>NuGet Package Manager</li>
					<li>GitLab</li>
					<li>GitHub</li>
					<li>Postman</li>
					<li>PyCharm</li>
				</ul>
				<h3>Project Management Tools</h3>
				<ul>
					<li>Service Now</li>
					<li>JIRA</li>
					<li>Confluence</li>
					<li>Agilecraft</li>
					<li>MS Word</li>
					<li>MS Excel</li>
					<li>MS PowerPoint</li>
					<li>MS Visio</li>
				</ul>
            </div>
            <div className="right-column">
              <h3>A bit about me</h3>
				<p>
					As a seasoned IT professional with 11+ years of experience, I specialize in Robotic Process Automation (RPA), application development, and team leadership. With a Master's degree in Engineering Management and expertise in UiPath, Blue Prism, and Automation Anywhere, I drive digital transformation by designing and implementing scalable RPA solutions that reduce costs, boost efficiency, and enhance revenue growth.
				</p>
				<p>
					Throughout my career, I've had the privilege of working with renowned organizations, including Dish Network, Nielsen, and Atlas Healthcare Software. My expertise spans multiple industries, including healthcare, finance, and technology. I'm passionate about leveraging my technical expertise to solve complex business problems and deliver tangible results.
				</p>
				<p>
					As a leader, I'm committed to fostering a culture of innovation, collaboration, and continuous learning. I've successfully mentored and managed high-performing teams, empowering them to achieve exceptional results. My approach is centered around open communication, transparency, and a customer-centric mindset. I'm excited to continue pushing the boundaries of what's possible with RPA and emerging technologies.
				</p>
				<p>
					I'm a lifelong learner, and I stay up-to-date with the latest advancements in RPA, AI, and automation. I'm certified in UiPath and have a strong foundation in programming languages like C#, Python, and Java. My technical expertise, combined with my business acumen and leadership skills, enables me to drive strategic initiatives that deliver lasting impact.
				</p>
            </div>
          </div>
        </section>
        <section className="work-experience container">
          <h2>
            <small>Recent</small>
            Work Experience
          </h2>
          <div className="jobs">
				<article>
					<figure>
						<div>
							<img src="./imgs/workplace-1.jpg" alt="Dish Network" width="100%" />
							<figcaption>
								Dish Network
							</figcaption>
						</div>
					</figure>
					<h5>Sr. Software Developer (Intelligent Automation)</h5>
					<div><h6>May 2024 – Till Date</h6></div>
					<p>Implemented RPA automation for Fixed Assets and Accounts Payable teams, utilizing tools like ABBYY, Appzen, and UiPath. Successfully optimized business processes, achieving 95% automation success rates through efficient exception handling and API integration.</p>
				</article>
				<article>
					<figure>
						<div>
							<img src="./imgs/workplace-2.jpg" alt="Nielsen" width="100%" />
							<figcaption>
								Nielsen
							</figcaption>
						</div>
					</figure>
					<h5>RPA Developer/Architect</h5>
					<div><h6>June 2019 – May 2024</h6></div>
					<p>Collaborated with senior leaders to design and implement RPA solutions, reducing annual expenses by $500,000 and generating over $1 million in revenue. Successfully optimized business processes, improving efficiency by 35% on average, and maintained high data quality and accuracy through API integration and best practices.</p>
				</article>
				<article>
					<figure>
						<div>
							<img src="./imgs/workplace-3.jpg" alt="Nielsen Audio (Client)" width="100%" />
							<figcaption>
								Nielsen Audio (Client)
							</figcaption>
						</div>
					</figure>
					<h5>RPA Developer</h5>
					<div><h6>February 2017 – June 2019</h6></div>
					<p>Developed and implemented RPA automation solutions for PPM projects using UiPath and RobotFramework, increasing automation footprint coverage from 40% to 82%. Successfully designed and executed automated test suites, reducing regression cycle time from 60 days to 20 days, and provided process improvements through business process analysis and documentation.</p>
				</article>
				<article>
					<figure>
						<div>
							<img src="./imgs/workplace-4.jpg" alt="BWAY Corporation" width="100%" />
							<figcaption>
								BWAY Corporation
							</figcaption>
						</div>
					</figure>
					<h5>Summer Intern – RPA Analyst</h5>
					<div><h6>June 2016 – August 2016</h6></div>
					<p>Implemented end-to-end RPA solutions using UiPath, automating manual processes and integrating various applications. Collaborated with cross-functional teams to develop and deliver product features, managed backlogs, and ensured successful User Acceptance Testing (UAT) and user adoption.</p>
				</article>
				<article>
					<figure>
						<div>
							<img src="./imgs/workplace-5.jpg" alt="Atlas Healthcare Software" width="100%" />
							<figcaption>
								Atlas Healthcare Software
							</figcaption>
						</div>
					</figure>
					<h5>Analyst</h5>
					<div><h6>December 2011 – July 2015</h6></div>
					<p>Led a team of junior analysts and managed functional design across multiple product lines, utilizing Waterfall and Agile methodologies. Designed and implemented RPA solutions, engineered product designs, and provided training and support, ensuring seamless integration of technical and business processes.</p>
				</article>            
          </div>
        </section>
        <section id="education" class="work-experience container">
          <h2>
            <small>
              Previous
            </small>
            Education
          </h2>
          <div class="jobs">
				<article>
					<figure>
						<div>
							<img src="./imgs/education-1.jpg" alt="Christian Brothers University" width="100%" />
							<figcaption>
								Christian Brothers University
							</figcaption>
						</div>
					</figure>
					<h5>Master's in Engineering Management</h5>
					<div><h6>January 2016 – December 2016</h6></div>
					<p>Earned a Master of Science in Engineering Management with a perfect 4.0 GPA, demonstrating academic excellence and a strong foundation in engineering management principles. Completed graduate coursework in key areas including Information Systems, Engineering Law, Technical Project Management, and Quality Assurance, enhancing expertise in managing complex engineering projects.</p>
				</article>
				<article>
					<figure>
						<div>
							<img src="./imgs/education-2.jpg" alt="Florida Institute of Technology" width="100%" />
							<figcaption>
								Florida Institute of Technology
							</figcaption>
						</div>
					</figure>
					<h5>Master's in Management Information System</h5>
					<div><h6>August 2015 – December 2015</h6></div>
					<p>Pursued a Master of Science in Management Information Systems, completing graduate coursework in critical areas such as Computer and Information Security, Computer Networks, and Data Structures. After the first semester, transferred to Christian Brothers University (CBU) to continue academic pursuits, ultimately completing a Master's degree in Engineering Management.</p>
				</article>
				<article>
					<figure>
						<div>
							<img src="./imgs/education-3.jpg" alt="Amrita University" width="100%" />
							<figcaption>
								Amrita University
							</figcaption>
						</div>
					</figure>
					<h5>Bachelor’s in computer science</h5>
					<div><h6>June 2007 – May 2011</h6></div>
					<p>Earned a Bachelor of Technology in Computer Science and Engineering, establishing a solid foundation in computer science principles and software engineering methodologies. Completed undergraduate coursework in a range of technical areas, including Software Engineering, Data Structures, Algorithms, Computer Architecture, and Business Intelligence, preparing for a career in software development and technology management.</p>
				</article>
          </div>
        </section>
        <section className="chatbot container">
          <h2>
            <small>
              Talk to me
            </small>
            Chatbot
          </h2>
          <div className="chatbot-blue">
            <div className="chat-info">
              <h3>Azure AI Chatbot</h3>
              <p>I've put together a chatbot here which knows all my skills, work experience and has a copy of my CV/Resume. You can use it to ask questions about me to get a better idea of who I am and what I've done.</p>
              <p>You can also download my resume here if you want to take a look at it.  I'm currently looking for new opportunities so if you have a project you think I'd be a good fit for, please get in touch!</p>
              <a href="./Rajkumar_Thanudhasan_Resume.pdf" className="button black">Download Resume</a>
            </div>
            <div className="chat-box">
              <div className="scroll-area">
                <ul id="chat-log">
                  {messages.map((message, index) => (
                    <li key={index} className={`${message.role}`}>
                      <span className={`avatar`}>{message.role === 'user' ? 'You' : 'AI'}</span>
                      <div className="message">{message.content}</div>
                    </li>
                  ))}
                </ul>
              </div>
              <form onSubmit={submitForm} className="chat-message">
                <input type="text" placeholder="Hey Raj, what skills are you best at?" value={messageInput} onChange={e => setMessageInput(e.target.value)} />
                <button className="button black">Send</button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
