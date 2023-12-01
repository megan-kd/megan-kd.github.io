export const projectsData = [
    {
        title: "Scenic Routing",
        subtitle: "Computer Networking, Algorithm Design, Open Source",
        imagePath: "/projectpics/2.png",
        imageTitle: "image 1",
        location: 'Pacific University',
        description:  <>
        <p>
            Learning about computer networking often requires access to college courses, which are not accessible to everyone who is interested in the topic. Scenic Routing is an open source resource that walks computer science students through the process of creating their own computer networking projects. The project is divided into three components:
            <ol>
                <li>Creating a virtual network of computers that can be scaled up using Docker, Kubernetes, and VrNetLab’s containerized OpenWRT routers.</li>
                <li>Designing and implementing a “longest path” routing algorithm combining the Graph Coloring algorithm, Kruskal’s Algorithm, and Breadth First Search and a routing protocol</li>
                <li>Creating a visualization of the network running the protocol to show the path of the packets of data being routed using a CentOS Virtual Machine, Unity, Elasticsearch, and Zeek.</li>
            </ol>
            I was responsible for the the Routing Algorithm portion of the project, resulting in the completion of the routing algorithm design routing configuration file, and hello protocol. The research, implementation, and design for each of these parts of the project have been documented and uploaded to the open-source repository. The routing algorithm and hello protocol have executable programs written for users to see how these parts of a routing protocol work. 
        </p>
        </>,
        links: [
            {
                title: "Github Repository",
                url: "https://github.com/crumbj/Scenic-Routing"
            },
            {
                title: "Final Report",
                url: "https://github.com/crumbj/Scenic-Routing/blob/main/Final%20Report%20-%20Scenic%20Routing.pdf"
            },
        ],
        date: "Fall 2020 - Spring 2021",
        course: "CS 498: Senior Capstone",
        technologies: "C/C++, OpenWRT, VirtualBox"
    },
    {
        title: "Bluetooth Qualification Results UI",
        subtitle: "Full-stack Development",
        imagePath: "/projectpics/1.png",
        imageTitle: "image 2",
        location: 'Intel Corporation',
        links: null,
        description: <>
            <p>
                I redesigned and implemented a UI for a bluetooth qualification results database by updating previous functionality and improving performance of original GUI. My improvements allowed the users to query test case results based on firmware builds or host builds, compare results across different builds, keep track of failures specific to certain bluetooth cards, and manually update results in the database. The new design cut query times by more than half and was used across several teams.
            </p>
        </>,
        date: "Spring 2020",
        technologies: "Django, Javascript, HTML, CSS, SQL"
    },
    {
        title: "Data Migration Progress Reporting",
        subtitle: "Python Scripting, Automated Reporting",
        imagePath: "/projectpics/5.png",
        imageTitle: "image 3",
        location: 'KPMG',
        links: null,
        description: <>
            <p>
                I supported a project management and application migration team to migrate 47 applications to a new cloud environment for use by thousands of users. In order to better inform the client of migration progress, I designed and implemented automated reporting for tracking migration task progress and deadlines using C# and Python. As a result, 15 hours of manpower was saved per day manually inputting and sharing data. This improvement allowed for daily reporting and consistency across the data shared.
            </p>
        </>,
        date: "Winter 2021",
        technologies: "Python, C#"
    },
    {
        title: "Bluetooth SIG Compliance Tool Suite",
        subtitle: "Python Scripting, Test Automation, Automated Reporting",
        imagePath: "/projectpics/3.png",
        imageTitle: "image 3",
        location: 'Intel Corporation',
        links: null,
        description: <>
            <p>
            In order to maintain compliance with Bluetooth SIG Product qualification and rigorously test bluetooth chipset firmware, I created the following tools:
                <ul>
                    <li><b>RHT Sensor Automation:</b> The Bluetooth SIG included a new criteria that required the monitoring of the humidity and temperature of the lab with our Bluetooth testing equipment. Using an RHT sensor, this automation collects the current humidity and temperature in the lab hourly into weekly reports using color to differentiate between measurements in and out of the desired range.</li>
                    <li><b>Automatic Test Case Updates:</b> Any updates to the test case requirements and criteria from the Bluetooth SIG Test Plan Generator need to be captured by current test executions. I built a tool to compare legacy TPG resources with current documents to grab newly required test cases for use in other automation and reporting.</li>
                    <li><b>Nightly Test Cycle Report Generator:</b> In order to deseminate the results of the nightly testing of the current firmware build, I built this tool to generate an excel document and email that included:
                        <ul>
                            <li>Relevant firmware build information</li>
                            <li>A chart containing the pass rate and test case pass/fail counts for each firmware build</li>
                            <li>A chart containing information about current open bugs impacting the test cases</li>
                        </ul>
                    </li>
                    <li><b>Multiple Builds Runner:</b> In order to find firmware regressions, I built a script that allows the user to run the same set of test cases on multiple different firmware builds and compare test case results. This automated the downloading of firmware to test, running the test cases using the downloaded firmware, and reporting the test case results.</li>
                </ul>
            </p>
        </>,
        date: "Fall 2019 - Summer 2020",
        technologies: "Python, Batch Scripting, RHT Sensors/Serial Ports"
    },
    {
        title: "Data Accelerator UI",
        subtitle: "Full-stack Development, Azure Data Factory, Informatica",
        imagePath: "/projectpics/4.png",
        imageTitle: "image 3",
        location: 'KPMG',
        links: null,
        description: <>
            <p>
            This UI allowed users to access information relevant to their data and metric accelerators. The features included:
                <ul>
                    <li>Tracking the progress, examining the history of, and kicking off Azure and Informatica pipeline runs across multiple data accelerators</li>
                    <li>A searchable, filterable library of machine learning and data accelerators.</li>
                </ul>
            </p>
        </>,
        date: "Fall 2022 - Summer 2023",
        technologies: "ReactJS, Flask, Python, Azure REST API, Informatica REST API, Figma, Terraform, Azure Pipelines"
    }
];

export const skillsData = [
    {
        "title": "Programming",
        "icon": 4,
        "skillList": ['ReactJS', 'Python', 'C/C++', 'SQL', 'HTML', 'CSS', 'Flask, Django', 'NodeJS', 'JavaScript', 'Java']
    },
    {
        "title": "Tools",
        "icon": 3,
        "skillList": ['Linux CLI', 'Windows CLI', 'Git', 'Docker', 'Kubernetes', 'Terraform', 'Azure Pipelines', 'Azure App Service']
    },
    {
        "title": "Certificates",
        "icon": 2,
        "skillList": ['AWS Certified Cloud Practitioner', 'Azure Fundamentals', 'Azure Data Fundamentals']
    },
    {
        "title": "UX Design",
        "icon": 1,
        "skillList": ['Figma', 'Wireframes', 'Miro']
    },
];

export const aboutMeData = <>
 <p >I am a software engineer interested in full-stack development, automation, and diversifying tech. It is so fulfilling to work on applications knowing that it will make the lives of real people easier! I thrive best in roles where I am collaborating with many different teams. My favorite part of software engineering is the iteration— getting to the best solution through meaningful discussions, taking problems head on, and finding any improvements (no matter how small) is what makes me most energized. I am drawn to full-stack development because I have so much fun on the frontend and the backend!</p>
 <p>I graduated from Pacific University as a Computer Science major in 2021 where my instruction was largely based around C and C++. Because of my interest in computer networking, I capped off my education on a senior project with two other students to create and fully document a virtual network, routing protocol, and network visualization tool. Our goal was to make a comprehensive, open source project to help computer science students dive into learning about networking and use it as a foundation for their own projects.</p>
 <p>While pursuing my degree, I worked at Intel for a year on a Software Validation team. I built scripts and tools in Python to help automate their Bluetooth Qualification CI testing processes. I was most excited about working with hardware for the first time and using sensors to gather real time data! This job exposed me to working with front-end technologies and allowed me to hone my skills on the backend!</p>
 <p>In my last position at KPMG I led and contributed to several UI projects as a full-stack developer for 2 years. On these projects I was involved at every step of the process from gathering requirements, collaborating with designers, implementing and testing frontend features and backend APIs, and writing scripts and working with infrastructure teams to deploy apps to production environments in Azure and AKS. What I enjoyed most was working with wonderful UI/UX designers and bring their vision to life, as well as continuously work with clients to build UIs that speak to their needs. </p>
 <p>In my free time, I enjoy baking, reading horror novels, and playing Slay the Spire! You can find me hiking or playing PokemonGO outdoors if it’s not too hot and there’s not too many hills ( ‾́ ◡ ‾́ )</p>
</>;