export const projectsData = [
    {
        title: "Scenic Routing",
        subtitle: "Computer Networking, Algorithm Design, Open Source",
        imagePath: "/scenicRouting.png",
        imageTitle: "image 1",
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
                url: "https://github.com/crumbj/Scenic-Routing"
            },
        ],
        date: "Fall 2020 - Spring 2021",
        course: "CS 498: Senior Capstone",
        technologies: "C/C++, OpenWRT, VirtualBox"
    },
    {
        title: "Bluetooth Qualification Results UI",
        subtitle: "Full-stack Development",
        imagePath: "/logo192.png",
        imageTitle: "image 2",
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
        imagePath: "/tempHeatMap.png",
        imageTitle: "image 3",
        description: <>
            <p>
                I supported a project management and application migration team to migrate 47 applications to a new cloud environment for use by thousands of users. In order to better inform the client of migration progress, I designed and implemented automated reporting for tracking migration task progress and deadlines using C# and Python. As a result, 15 hours of manpower was saved per day manually inputting and sharing data. This improvement allowed for daily reporting and consistency across the data shared.
            </p>
        </>,
        date: "Winter 2021",
        technologies: "Python, C#"
    },
    {
        title: "Bluetooth SIG Compliance: Firmware Testing Tool Suite",
        subtitle: "Python Scripting, Test Automation, Automated Reporting",
        imagePath: "/bluetoothsig.png",
        imageTitle: "image 3",
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
        imagePath: "/adf.png",
        imageTitle: "image 3",
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