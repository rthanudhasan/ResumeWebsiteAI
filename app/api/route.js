import { OpenAIClient, AzureKeyCredential } from '@azure/openai';
import { NextResponse } from 'next/server';

const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
const apiKey = process.env.AZURE_OPENAI_API_KEY;
const model = process.env.AZURE_OPENAI_MODEL;

export async function POST(req){
	
	const { messages } = await req.json();

	const client = new OpenAIClient(endpoint, new AzureKeyCredential(apiKey));

	messages.unshift({
		role: 'system',
		content: `You are PortfolioGPT, answering only questions based on the resume provided.
Resume:
${DATA_RESUME}

Help users learn more about Raj from his resume.`
	})

	const response = await client.getChatCompletions(model, messages, {
		maxTokens: 128,
	})

	return NextResponse.json({ 
		message: response.choices[0].message.content
	 })
}

const DATA_RESUME = `Rajkumar Thanudhasan
Email: rajkumar.thanudhasan@gmail.com
Phone: (407)409-0749
LinkedIn: linkedin.com/in/rajkumarthanudhasan/
Master's in engineering management with I.T specialization, from Christian Brothers University with 4.0 GPA. 
Bachelor’s in computer science, from Amrita Vishwa Vidyapeetham, Coimbatore with a 3.2 GPA. 
RPA Certification: RPA Developer Certificate – UiPath ID: 335060836941348828 
RPA Orchestrator 2018.2 Diploma – UiPath ID: 379 30 191172 1553965257 
RPA Security Training Diploma – UiPath ID: 458 57 191172 1553974181 
RPA Business Analyst Diploma – UiPath ID: 386 23 191172 1554061465 
Robotic Process Automation Professional – Blue Prism ID: Verify
 Technical Skills 
Requirement Gathering Tools: MS Word, MS Excel, MS PowerPoint
Project Management: MS Project, Service Now, JIRA, Confluence, Agilecraft
Design and Development Tools: MS Visio, Oracle EBS and Oracle Fusion Cloud ERP, Visual Studio, NuGet 
Package Explorer, MS SQL, Cache, HTML, XML, Bitbucket, GitLab, Postman 
Automation Tool: RIDE, UiPath, Selenium WebDriver, Sikuli, AutoIT, SharePoint, HP UFT 12, HP 
ALM, Eclipse IDE, QTP/UFT11.5, Zephyr, ABBYY, PyCharm, and IntelliJ 
Automation Framework Knowledge: RobotFramework (robotic process automation (RPA)), .NET, C#, TestNG, Junit
 Work Experience 
1. Dish Network May 2024 – till Date
Senior Software Developer (Intelligent Automation) 
● Implemented a couple of full life cycles of RPA Automation here at Dish for the Fixed Assets Team involving 
applications like Oracle Fusion Cloud ERP, Aura Player, NexSysOne, and Orbit reports. 
● Used OCR tools like ABBYY and AI tools like Appzen to improve efficiency and optimize RPA projects for the 
Accounts Payable team. 
● Reviewing the applications involved for each process and deciding the Automation approach, which is most 
important for every automation to get the best results. 
● Constant communication with the business partners to develop and deploy their ideas. Also, ensuring that there 
is a clear establishment of what can be created within what timeframe and what are its requirements. 
● Well-experienced in understanding the API documentation and building the required API call for the process. 
● Used Python for some of the automation where it was required to read HTML and PDF documents. Also used 
UiPath Document Understanding for automations that require getting data from the PDF. 
● Expertise in handling exceptions and involved in optimizing the business process to get 95% success rates by 
Automation. 
2. Nielsen June 2019 – May 2024
Robotic Process Automation Developer/Architect 
Products: TLR (Total Line Reporting) SalesForce, Bi Reports, iHeart Reporting 
● Collaborated with senior leaders and key stakeholders to design and implement RPA solutions that met business 
needs and reduced annual expenses by nearly $500,000. 
● Provided process analysis and recommendations to Senior Management on the RPA ecosystem, license types 
and numbers, and resource, time, and cost savings. 
● Established robust and scalable development, testing, and production environments for end-to-end automation 
projects that generated over a million dollars in revenue annually. 
● Conducted architectural discussions/reviews of RPA stories and implemented the BOT using RE Framework, 
dispatcher, performer BOTs, queues, and triggers. 
● Designed stable/reusable and scalable RPA solutions for automation involving Oracle EBS ERP using the UiPath 
RE framework and followed the best practices agreed upon in the organization. 
● Coordinated with the CoE and the stakeholders on the best practices for RPA solutions. 
● Started identifying processes using Process Mining and improved them using Communications Mining, and 
Document Understanding. 
● Optimized most processes by utilizing API and improved its efficiency by 35% on average while maintaining high 
data quality and accuracy. 
● Reviewed codes, managed licensing requirements, and orchestrated the process (robots, schedules, 
configuration files, assets, queues, etc.). 
● Documented the efforts in a process definition document (PDD) and a solution design document (SDD) (AS-IS, 
TO-BE, and flow diagrams) using Task Mining, and Automation Hub. 
Environment: UiPath Studio, UiPath Cloud Orchestrator, NET4.0, ASP.NET 4.0, C#, SQL Server, Oracle EBS ERP, 
SalesForce, Visual Studio 2017, Alteryx, NuGet Package Manager, GitLab, Postman and AWS. 
3. Nielsen Audio (Client) February 2017 – June 2019
RPA Developer 
Products: PPM (Portable People Meter), PPM wearable, PPM BT Collector 
● Worked on RPA automation for PPM (Portable People Meter), PPM wearable, and PPM BT Collector projects 
using UiPath and RobotFramework to ensure the best quality of the applications, in an Agile practicing 
environment. 
● Worked with SMEs to create POD (Process Definition Document), and SDD (Solution Design Documents), plan 
RPA test strategy, develop RPA automation suite, and execute and maintain the RPA test scenarios for PPM and 
all related projects. 
● Developed automated solution containing PPM test cases, work queues, and environment using UiPath (RPA 
testing framework) and integrated everything using Jenkins for CI/CD purposes. 
● Played a significant role in successfully increasing PPM automation footprint coverage percentage from ~40% to 
~82% by developing and updating the Automation Regression Suite using custom .NET libraries. Those updates 
enable the automation suite to execute more efficiently. 
● Experienced in using UiPath Studio, Orchestrator, Screen, Data & Web scraping tools. Also, used Visual Studio 
and NuGet package manager to create custom libraries for UiPath. 
● Built four Automated Regression Test (ART) systems (i.e. PCs that integrated Motion simulation hardware, 
Network power strips for BT beacons, Power circuit timers, Decibel meters, and Audio playback devices) to 
support our RPA automation testing. This helped the team significantly to reduce the time to complete a 
regression cycle from 60 days to two sprint cycles (20 days). 
● Experienced in controlling the BOTs using RPA administrative/Orchestrator. Also, used the Windows task 
scheduler to substitute the work done by Orchestrator. 
● Part of a PPM wearable (Prototype) team to develop a RobotFramework Automation using Selenium library on 
RIDE and PyCharm editor for keyword-driven development (KDD) to test PPM wearable devices. Also, was part of 
a wearable proof of concept panel, and provided feedback to the field panel administrator. 
● Part of a PPM Collector (Prototype) team in automating the functionality of the prototype PPM Collector made 
from Raspberry Pi. Used the RPA tool UiPath to automate the entire test suite. 
● Analyzed, developed, and documented business/test processes using Jira, Zephyr, and Confluence. Also, was part 
of the FMEA team in identifying potential failure points in the BT Collector, PPM, and its related devices. 
Environment: UiPath Studio, UiPath OnPerm Orchestrator, NET4.0, ASP.NET 4.0, C#, SQL Server, Visual Studio 2017, 
NuGet Package Manager, Jenkins, Automation Anywhere, Microsoft Power Automate, Blue Prism. 
4. Christian Brothers University August 2016 – December 2016
Research Assistant - RPA 
● Analyzed the requirements of the stakeholders and prepared RPA design documents. 
● The data collected was processed using open-source RPA tools and forwarded in the form of CSV files to a Ph.D. 
student for further research. The work has been completely automated using RPA, and scripts are now 
automatically run, and data is collected daily. 
Environment: RIDE, PyCharm, SQL Server, GitHub, Sikuli, AutoIT. 
5. BWAY Corporation June 2016 – August 2016
Summer Intern – RPA Analyst 
Products: IMS (Inventory Management System) 
Clients: In House Products
● Implemented end-to-end robotic process automation (RPA) by combining different types of applications (Webbased, Windows-based, and mainframe) using UiPath. 
● Supported the development of product deliverables in the product roadmap with the functional requirements 
documents. Also, gradually built a knowledge base of new and existing functionality to improve requirements 
process efficiency. 
● Developed robotic bots using UiPath to automate the process which was done using manual interference. 
● Performed database imports of client inventory, employee, supplier, and cost center data into various platforms 
of SQL Server instances using RPA. 
● Identified root cause and developed numerous custom activity libraries using Visual Studio and NuGet package 
manager. Also, maintained various development builds using GitHub. 
● Worked with the development team, QA team, and non-technical stakeholders throughout the SDLC process on 
a story-by-story basis in identifying bottlenecks, testing, and refining each feature. 
● Managed the backlog of user stories by working closely with the developers and assisting them with the business 
and design questions as needed. 
● Was responsible for User Acceptance Testing (UAT). Worked with the product owner to create UAT scripts. 
● Developed standard operating procedures document and conducted user orientation and training on the 
products. 
Environment: UiPath Studio, UiPath Orchestrator, NET4.0, ASP.NET 4.0, C#, SQL Server, Visual Studio 2015, NuGet 
Package Manager, GitHub, Oracle DB. 
6. Christian Brothers University January 2016 – May 2016
Graduate Assistant 
● Assisting the professor in teaching classes and grading assignments as well as clearing questions of students. 
● Also conducting labs for the students to give them a practical knowledge of the subject. 
7. Atlas Healthcare Software December 2011 – July 2015
Analyst 
Products: Atlas LabWorks EMR, Enterprise Master Patient Index, EHR 
Clients: Mayo Labs, Sunrise Labs, St. Jude, Baptist, AEL,.200 Clients. 
● Supervised a team of 3 Junior Analysts, each specializing in a different product line. 
● Member of the change management committee and was involved in change order proposal meetings with 
clients. Managed the functional design portion of SDLC across multiple product lines utilizing both Waterfall and 
Agile methodologies. 
● Liaise between the business and technical personnel to ensure a mutual understanding of HIPAA processes and 
applications. 
● Engineered product designs, FSDs, BRDs, and UMLs to document the enhancement when required. 
● Used Data Scraping method for extracting structured data from browser applications or documents into a CSV 
file or Excel Spreadsheet. 
● Worked on standard RPA framework for creating and designing the Sequences and processes. 
● Built a system for statistical reports and conceptualized designs for an entire billing module for the application. 
● Responsible for providing functional training and support to members across all teams in the organization. 
● Designed RPA test case suits and performed user acceptance testing (UAT), monitored client workflows for 
possible design and UI gaps. 
8. Sri Balaji Web Hosting May 2011 – December 2011
PHP developer 
Products: In-house e-mail and SMS module 
● Worked as a PHP developer for 6 months gaining insight about how to develop and host websites. 
● Engineered user activity diagrams to chart the functional workflow across the product. 
● Have done many projects in PHP, one of which is an SMS and E-MAIL Module for Experts Academy (a consulting 
firm located in Chennai) and two plug-in modules. 
● Provided full-end testing support to all departments across SDLC.`

