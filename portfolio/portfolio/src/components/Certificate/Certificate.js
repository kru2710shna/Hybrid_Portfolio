import React from 'react';
import './Certificate.css'; // Import the CSS for styling

const certificates = [
    {
        image: 'Images/Screenshot 2024-11-23 at 5.08.03 PM.png',
        name: 'Generative Adversarial Networks Specialization (GANs)',
        organization: 'DeepLearning.AI',
        date: 'November 2024',
        description: 'The Generative Adversarial Networks (GANs) Specialization offers an in-depth exploration of GANs, a powerful machine learning model for generating realistic data. The course covers the theory behind GANs, including their architecture, components (generator and discriminator), and the training process. Participants learn how to apply GANs to a variety of domains, such as image, video, and text generation, and how to use advanced models like conditional GANs and CycleGANs. Hands-on projects enable learners to implement and optimize GANs using frameworks like TensorFlow and PyTorch. By the end of the specialization, learners will have the skills to create and deploy generative models for real-world applications in AI, computer vision, and creative content generation.',
        link: 'https://www.coursera.org/account/accomplishments/specialization/SGAJ43Z6I3KD'
    },
    {
        image: 'Images/Screenshot 2024-11-27 at 8.28.48 AM.png',
        name: 'AI For Medicine',
        organization: 'Udemy',
        date: 'November 2024',
        description: 'The AI for Medicine course or specialization focuses on applying artificial intelligence techniques to the field of healthcare. It covers key topics such as diagnostic tools, medical imaging, predictive models for patient outcomes, and personalized treatment plans using machine learning and deep learning algorithms. The program also delves into the ethical and privacy considerations of using AI in medicine, ensuring that AI tools enhance healthcare while maintaining patient confidentiality and safety. Participants learn how to build AI systems to aid in early disease detection, optimize clinical workflows, and improve patient care. This field is essential for advancing modern healthcare through data-driven solutions.',
        link: 'https://www.coursera.org/account/accomplishments/specialization/PT4N66YJT7SK?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=s12n'
    },
    {
        image: 'Images/Screenshot 2024-11-27 at 8.30.11 AM.png',
        name: 'AWS Certified Machine Learning Engineer Associate: Hands On!',
        organization: 'Organization Name 2',
        date: 'November 2024',
        description: 'The AWS Certified Machine Learning Engineer - Associate: Hands On! course is designed to provide practical, hands-on experience for individuals looking to become proficient in deploying machine learning (ML) models on Amazon Web Services (AWS). It covers the core services of AWS related to ML, such as SageMaker, Lambda, and Elastic Inference, while helping learners build, train, and deploy scalable ML models using these tools. The course includes exercises in real-world scenarios, guiding learners through the creation of end-to-end ML workflows—from data preprocessing and model training to deployment and monitoring. The certification helps validate ones ability to implement ML solutions using AWS infrastructure.',
        link: 'https://www.udemy.com/certificate/UC-c4227fe5-f7b4-4e68-894e-2f10a90d5c46/'
    },
    {
        image: 'Images/Screenshot 2024-11-27 at 8.32.43 AM.png',
        name: 'AWS Certified Machine Learning Engineer - Associate Early Adopter',
        organization: 'AWS',
        date: 'November 2024',
        description: 'The AWS Certified Machine Learning Engineer - Associate Early Adopter certification is designed for individuals who are looking to validate their skills in applying machine learning (ML) on the Amazon Web Services (AWS) platform. This certification demonstrates proficiency in using AWSs ML services, including SageMaker, Lambda, and other AWS tools for building, training, deploying, and optimizing machine learning models. It covers areas such as data preprocessing, model evaluation, and the application of ML algorithms across various domains like computer vision, natural language processing, and time series analysis. The Early Adopter program offers hands-on experience and helps individuals gain the expertise to solve real-world machine learning challenges using AWS infrastructure. This certification is ideal for aspiring ML engineers and professionals who want to prove their ability to implement end-to-end machine learning solutions in AWS.',
        link: 'https://www.credly.com/badges/299a0108-3459-41de-9212-4c85748cdb6e/linked_in_profile'
    },
    {
        image: 'Images/Screenshot 2024-11-27 at 8.34.44 AM.png',
        name: 'Deep Learning Specialization',
        organization: 'Deep Learing.ai',
        date: 'October 2024',
        description: 'The Deep Learning Specialization is an in-depth online program designed to provide comprehensive knowledge and practical experience in deep learning techniques. It covers essential topics such as neural networks, convolutional networks, sequence models, and generative adversarial networks (GANs). The specialization delves into the theory behind deep learning models and their real-world applications in fields like computer vision, natural language processing, and reinforcement learning. Learners gain hands-on experience by building and training deep learning models using frameworks like TensorFlow and Keras. The course also includes practical projects to solidify the knowledge and help learners become proficient in solving complex machine learning problems using deep learning method',
        link: 'https://www.coursera.org/account/accomplishments/specialization/EC59WFALF34A'
    },
    {
        image: 'Images/Screenshot 2024-11-27 at 8.36.07 AM.png',
        name: 'Databases and SQL for Data Science with Python',
        organization: 'IBM',
        date: 'July 2024',
        description: 'The Databases and SQL for Data Science with Python course provides essential skills for managing and analyzing data using relational databases and SQL, with a focus on Python integration. It teaches how to use SQL for querying databases, retrieving, and manipulating data, as well as connecting Python to databases with libraries like SQLite and SQLAlchemy. Learners will gain hands-on experience with SQL syntax, joins, subqueries, and aggregation techniques to extract and analyze data efficiently. Additionally, the course covers best practices for working with large datasets and demonstrates how to leverage Python for further analysis, visualization, and data science tasks, making it ideal for aspiring data scientists..',
        link: 'https://www.coursera.org/account/accomplishments/verify/ZJ64TD5F8PYS'
    },
    {
        image: 'Images/Screenshot 2024-11-27 at 8.39.04 AM.png',
        name: 'Introduction to Data Engineering',
        organization: 'IBM',
        date: 'July 2024',
        description: 'The Introduction to Data Engineering course provides a foundational understanding of the processes involved in building and managing data systems. It covers the key concepts of data engineering, including data pipelines, data warehousing, ETL (Extract, Transform, Load) processes, and data integration. Learners are introduced to tools and technologies commonly used in the field, such as SQL, Python, Apache Hadoop, Apache Spark, and cloud platforms like AWS and Google Cloud. The course focuses on designing efficient and scalable data systems that can handle large volumes of data, enabling users to transform raw data into actionable insights. This course is perfect for those interested in data architecture and preparing for roles such as data engineers and data architects.',
        link: 'https://coursera.org/share/474706768004487637c75c10aa6386a2'
    },
    {
        image: 'Images/Screenshot 2024-11-27 at 8.37.41 AM.png',
        name: 'Hands-on Introduction to Linux Commands and Shell Scripting',
        organization: 'IBM',
        date: 'July 2024',
        description: 'The Hands-on Introduction to Linux Commands and Shell Scripting course provides practical knowledge and skills for using Linux command-line tools and writing shell scripts. It introduces the basic Linux commands for file manipulation, text processing, system navigation, and managing processes. The course emphasizes hands-on exercises, helping learners become proficient in automating tasks using shell scripting, which can significantly enhance productivity. Topics include working with files and directories, piping and redirection, using regular expressions, managing users, and writing scripts for system administration tasks. This course is ideal for those looking to improve their efficiency with Linux and gain a solid foundation in scripting for automating processes in a Unix-based environment.',
        link: 'https://www.coursera.org/account/accomplishments/verify/ATFCAKUJGTRC'
    },
    {
        image: 'Images/Screenshot 2024-11-27 at 8.40.44 AM.png',
        name: 'Introduction to Relational Databases (RDBMS)',
        organization: 'IBM',
        date: 'July 2024',
        description: 'The Introduction to Relational Databases (RDBMS) course provides a foundational understanding of relational database management systems, which are used to store, manage, and query structured data. It covers key concepts such as tables, rows, columns, primary keys, foreign keys, and relational integrity. The course introduces SQL (Structured Query Language) for querying and manipulating data, focusing on essential operations like SELECT, INSERT, UPDATE, DELETE, and JOIN. Learners will gain practical experience in creating, designing, and normalizing databases, ensuring data consistency and efficiency. Additionally, the course covers indexing, transactions, and basic database optimization techniques, making it a vital resource for beginners interested in database management and data-driven applications.',
        link: 'https://www.coursera.org/account/accomplishments/verify/SSFH572SDDAD'
    },
    {
        image: 'Images/Screenshot 2024-11-27 at 8.41.56 AM.png',
        name: 'Introduction to Relational Databases (RDBMS)',
        organization: 'IBM',
        date: 'July 2024',
        description: 'The Python Project for Data Engineering course focuses on applying Python programming skills to real-world data engineering challenges. It covers the full lifecycle of data engineering projects, from data collection and transformation to storage and analysis. Learners gain hands-on experience using Python libraries like Pandas, NumPy, and SQLAlchemy to clean, preprocess, and integrate data from various sources. The course also introduces working with cloud services, automating ETL (Extract, Transform, Load) processes, and managing large datasets. Students will design and implement scalable data pipelines, working with both structured and unstructured data. This project-based course helps learners build the practical skills needed for data engineering roles, providing a portfolio-worthy project upon completion.',
        link: 'https://www.coursera.org/account/accomplishments/certificate/5RBG4VT4E3K5'
    },
    {
        image: 'Images/Screenshot 2024-11-27 at 9.19.20 AM.png',
        name: 'Python for Data Science, AI & Development',
        organization: 'IBM',
        date: 'July 2024',
        description: 'The Python for Data Science, AI & Development course is designed to equip learners with essential Python programming skills for applications in data science, artificial intelligence (AI), and software development. It introduces Python fundamentals, including data structures, functions, and libraries like Pandas, NumPy, and Matplotlib, for data manipulation, analysis, and visualization. The course also covers foundational concepts in machine learning, AI algorithms, and their implementation using Python libraries such as Scikit-learn and TensorFlow. By engaging in hands-on projects and real-world examples, learners build practical expertise, preparing them for careers in data science, AI development, and related fields.',
        link: 'https://www.coursera.org/account/accomplishments/verify/VJ3UEKQ896EJ?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course'
    },
    {
        image: 'Images/Screenshot 2024-11-27 at 9.20.53 AM.png',
        name: 'Intro to AI Ethics.',
        organization: 'Kaggle',
        date: 'March 2024',
        description: 'The Intro to AI Ethics course explores the ethical implications of artificial intelligence, focusing on responsible AI development and deployment. It examines critical topics such as fairness, transparency, accountability, privacy, and the societal impacts of AI systems. Learners delve into real-world case studies to understand how bias, discrimination, and misinformation can arise from AI technologies and the strategies to mitigate these challenges. The course also addresses regulatory frameworks, ethical decision-making, and the role of diverse perspectives in shaping AI policies. Designed for technologists, policymakers, and enthusiasts, this course provides foundational knowledge for ensuring that AI systems benefit society while minimizing harm.',
        link: 'https://www.kaggle.com/learn/certification/krushna27/intro-to-ai-ethics'
    },
    {
        image: 'Images/Screenshot 2024-11-27 at 7.22.36 PM.png',
        name: 'Supervised Machine Learning: Regression and Classification',
        organization: 'Standford University',
        date: 'February 2024',
        description: 'The Supervised Machine Learning: Regression and Classification course provides a comprehensive introduction to the core concepts and techniques of supervised learning. It covers regression models, used to predict continuous outcomes, and classification models, designed to categorize data into distinct classes. Learners explore algorithms like linear regression, logistic regression, decision trees, and support vector machines, with a focus on understanding model performance metrics such as RMSE, precision, recall, and F1 score. Through hands-on projects, participants gain practical experience in implementing these models using tools like Python, Scikit-learn, and Jupyter Notebooks. This course is ideal for those aiming to build expertise in solving predictive modeling problems across industries..',
        link: 'https://www.coursera.org/account/accomplishments/verify/96U7RSLCMPTC'
    },
    {
        image: 'Images/Screenshot 2024-11-27 at 9.24.44 AM.png',
        name: 'C Programming with Linux',
        organization: 'Institut Mines-Télécom & Dartmouth Colleg',
        date: 'January 2024',
        description: 'The C Programming with Linux course introduces learners to the fundamentals of C programming while leveraging the Linux operating system as a development environment. It covers essential topics such as variables, data types, control structures, functions, and pointers, along with advanced concepts like memory management, file handling, and debugging techniques. The course emphasizes hands-on practice through compiling and running C programs in a Linux terminal, providing a solid foundation for system-level programming. By the end, participants will have the skills to write efficient C code, understand the Linux command-line tools, and explore opportunities in software development, embedded systems, and operating system design',
        link: 'https://www.coursera.org/account/accomplishments/specialization/FCJE69EFTSGF'
    },
    {
        image: 'Images/Screenshot 2024-11-27 at 9.25.51 AM.png',
        name: 'Computer Vision.',
        organization: 'Kaggle',
        date: 'January 2024',
        description: 'The Computer Vision course provides a deep dive into the field of enabling machines to interpret and analyze visual data from the world. It covers fundamental concepts such as image processing, feature extraction, and object detection, progressing to advanced topics like convolutional neural networks (CNNs) and deep learning techniques. Learners gain practical experience with tools and frameworks like OpenCV, TensorFlow, and PyTorch to implement algorithms for tasks like facial recognition, image segmentation, and motion tracking. Through hands-on projects, this course equips participants with the skills to build and deploy computer vision applications in areas such as healthcare, autonomous vehicles, and augmented reality..',
        link: 'https://www.kaggle.com/learn/certification/krushna27/computer-vision'
    },
    {
        image: 'Images/Screenshot 2024-11-27 at 9.28.15 AM.png',
        name: 'Data Analysis and Visualization with Power BI',
        organization: 'Microsoft',
        date: 'November 2023',
        description: 'The Data Analysis and Visualization with Power BI course equips learners with the skills to transform raw data into actionable insights using Microsoft Power BI. It covers key concepts such as importing and cleaning data, creating relationships between datasets, and leveraging DAX (Data Analysis Expressions) for advanced calculations. Participants will learn to design dynamic dashboards, craft compelling visualizations, and build interactive reports to communicate findings effectively. The course emphasizes real-world applications, helping learners analyze trends, identify patterns, and make data-driven decisions. By mastering Power BI’s tools and features, learners are prepared for roles in data analysis and business intelligence across various industries.',
        link: 'https://www.coursera.org/account/accomplishments/verify/Q89DX54XTGS5'
    },
    {
        image: 'Images/Screenshot 2024-11-27 at 9.30.59 AM.png',
        name: 'Extract, Transform and Load Data in Power BI',
        organization: 'Microsoft',
        date: 'November 2023',
        description: 'The Extract, Transform, and Load (ETL) Data in Power BI course focuses on the ETL process using Power BI’s built-in tools to prepare data for analysis and visualization. Learners explore how to connect to various data sources, including databases, spreadsheets, and cloud services, and extract relevant data. The course covers data transformation techniques such as cleaning, filtering, shaping, and combining datasets using Power Query Editor. Students will also learn how to load the transformed data into Power BI for building interactive reports and dashboards. Additionally, the course emphasizes best practices for optimizing ETL workflows, ensuring data accuracy, and automating data refresh processes.',
        link: 'https://www.coursera.org/account/accomplishments/verify/Q89DX54XTGS5'
    },
    {
        image: 'Images/Screenshot 2024-11-27 at 9.33.19 AM.png',
        name: 'Harnessing the Power of Data with Power BI',
        organization: 'Microsoft',
        date: 'November 2023',
        description: 'The Harnessing the Power of Data with Power BI course empowers learners to unlock insights and drive decision-making through data visualization and analytics. It covers the end-to-end process of importing, modeling, and analyzing data in Power BI. Learners will create interactive dashboards, design compelling reports, and utilize advanced features such as DAX calculations, Power Query, and AI-driven insights. The course emphasizes practical applications, enabling participants to handle real-world datasets and uncover actionable trends. By the end, learners will be proficient in leveraging Power BI to transform raw data into meaningful visual narratives, supporting strategic goals across industries.',
        link: 'https://linktothecertificate.com'
    },
    {
        image: 'Images/Screenshot 2024-11-27 at 9.35.16 AM.png',
        name: 'Preparing Data for Analysis with Microsoft Excel',
        organization: 'Microsoft',
        date: 'November 2023',
        description: 'The Preparing Data for Analysis with Microsoft Excel course equips learners with the skills to clean, organize, and transform data for effective analysis. It covers essential techniques such as handling missing data, filtering and sorting, using formulas for data manipulation, and applying conditional formatting. Learners will also explore advanced features like pivot tables, data validation, and Excels Power Query tool to automate data preparation tasks. Through hands-on exercises, participants will develop the ability to manage large datasets, ensure data accuracy, and streamline workflows. This course is ideal for anyone looking to enhance their data analysis capabilities using Microsoft Excel.',
        link: 'https://www.coursera.org/account/accomplishments/verify/SJTEFMBKD8BQ'
    },
    {
        image: 'Images/Screenshot 2024-11-27 at 7.02.58 PM.png',
        name: 'Data Modeling in Power BI',
        organization: 'Microsoft',
        date: 'November 2023',
        description: 'The Data Modeling in Power BI course provides a comprehensive understanding of designing and optimizing data models for effective analysis and reporting. Participants learn to structure data using best practices, such as implementing star schemas, creating relationships between tables, and managing hierarchies. The course dives into advanced concepts like calculated tables, measures, and DAX (Data Analysis Expressions) for custom aggregations and logic. Learners will also explore techniques for optimizing model performance and handling complex datasets. By mastering these skills, participants can create scalable and efficient data models in Power BI, enabling insightful and accurate business intelligence solutions.',
        link: 'https://www.coursera.org/account/accomplishments/verify/D475A4382L7Y'
    },
    {
        image: 'Images/Screenshot 2024-11-27 at 7.23.51 PM.png',
        name: 'Pandas',
        organization: 'Kagle University',
        date: 'March 2023',
        description: 'The Pandas course introduces learners to the powerful Python library for data manipulation and analysis. It covers fundamental concepts such as creating and managing DataFrames, indexing and selecting data, and handling missing values. Learners will explore advanced techniques, including data aggregation, merging and joining datasets, and applying functions for transformation. The course emphasizes real-world applications, such as cleaning data, exploring trends, and preparing datasets for machine learning or visualization. With hands-on practice, participants gain the skills to efficiently manage large datasets and perform complex data operations, making Pandas an essential tool for data science and analysis tasks.',
        link: 'https://www.kaggle.com/learn/certification/krushna27/pandas'
    },
    {
        image: 'Images/Screenshot 2024-11-27 at 7.06.39 PM.png',
        name: 'Intermediate Machine Learning',
        organization: 'Kagle University',
        date: 'March 2023',
        description: 'The Intermediate Machine Learning course builds on foundational concepts to deepen learners understanding of machine learning techniques and their applications. It covers essential topics such as handling missing data, feature engineering, and model evaluation using advanced metrics. Learners explore algorithms like gradient boosting, ensemble methods, and hyperparameter tuning to enhance model performance. The course also introduces techniques for working with time-series data, categorical variables, and pipelines for automating workflows. Through practical projects, participants gain hands-on experience in applying these techniques to real-world problems, equipping them with the skills to build robust and scalable machine learning solutions',
        link: 'https://www.kaggle.com/learn/certification/krushna27/intermediate-machine-learning'
    },
    {
        image: 'Images/Screenshot 2024-11-27 at 7.07.21 PM.png',
        name: 'Data Visualization',
        organization: 'Kagle University',
        date: 'March 2023',
        description: 'The Data Visualization course focuses on transforming data into meaningful visual stories using various tools and techniques. It covers core principles such as choosing the right charts, understanding color theory, and designing layouts for clear communication. Learners will explore tools like Tableau, Power BI, or Python libraries (Matplotlib, Seaborn) to create bar charts, scatter plots, heatmaps, and dashboards. The course emphasizes best practices for data storytelling, ensuring visualizations are both insightful and aesthetically pleasing. Through hands-on projects, participants learn to convey trends, patterns, and insights effectively, enabling data-driven decision-making across business and research contexts..',
        link: 'https://www.kaggle.com/learn/certification/krushna27/data-visualization'
    },
    {
        image: 'Images/Screenshot 2024-11-27 at 7.08.41 PM.png',
        name: 'Intro to SQL',
        organization: 'Kagle University',
        date: 'March 2023',
        description: 'The Intro to SQL course provides a foundational understanding of Structured Query Language (SQL) for managing and querying relational databases. Participants learn key concepts such as creating and manipulating tables, filtering and sorting data with SELECT statements, and using WHERE clauses for conditional queries. The course covers essential functions, joins for combining tables, and basic aggregation techniques like GROUP BY and HAVING. Learners gain hands-on experience writing queries to extract insights from real-world datasets. By the end, participants will have the skills to efficiently work with SQL databases, a critical tool for data analysis, software development, and database management.',
        link: 'https://www.kaggle.com/learn/certification/krushna27/intro-to-sql'
    },
    {
        image: 'Images/Screenshot 2024-11-27 at 7.10.04 PM.png',
        name: 'Feature Engineering',
        organization: 'Kagle University',
        date: 'March 2023',
        description: 'The Feature Engineering course focuses on transforming raw data into meaningful features that improve machine learning model performance. It covers key concepts such as handling missing data, encoding categorical variables, scaling and normalizing features, and creating interaction terms. Learners will explore advanced techniques like dimensionality reduction, feature selection, and leveraging domain knowledge for custom feature creation. The course emphasizes practical applications, including feature extraction from text, time-series data, and images. Through hands-on projects, participants develop the skills to preprocess data effectively, enhance model accuracy, and solve real-world challenges in predictive analytics and machine learning.',
        link: 'https://linktothecertificate.com'
    },
    {
        image: 'Images/Screenshot 2024-11-27 at 7.11.26 PM.png',
        name: 'Intro to AI Ethics',
        organization: 'Kagle University',
        date: 'March 2023',
        description: 'The Intro to AI Ethics course explores the ethical considerations surrounding artificial intelligence development and deployment. It covers key topics such as bias in algorithms, data privacy, transparency, accountability, and the societal impact of AI technologies. Learners examine real-world case studies to understand the challenges of ensuring fairness, inclusivity, and responsible AI use. The course also introduces frameworks and guidelines for ethical decision-making in AI projects. By the end, participants will be equipped to identify potential ethical risks, foster trust in AI systems, and contribute to the development of AI technologies that prioritize human values and societal well-being.',
        link: 'https://www.kaggle.com/learn/certification/krushna27/intro-to-ai-ethics'
    },
    {
        image: 'Images/Screenshot 2024-11-27 at 7.12.51 PM.png',
        name: 'Data Cleaning',
        organization: 'Kagle University',
        date: 'March 2023',
        description: 'The Data Cleaning course equips learners with the essential skills to prepare raw data for analysis. Participants learn techniques to handle missing or inconsistent values, detect and correct errors, and standardize datasets for improved accuracy. The course covers common data cleaning tools like Python’s Pandas library, Microsoft Excel, and SQL. Topics include removing duplicates, dealing with outliers, converting data types, and managing categorical data. Through practical exercises and real-world datasets, learners develop the expertise to transform messy data into reliable, structured formats, ensuring high-quality inputs for machine learning models, visualizations, and decision-making processes.',
        link: 'https://www.kaggle.com/learn/certification/krushna27/data-cleaning'
    },
    {
        image: 'Images/Screenshot 2024-11-27 at 7.13.59 PM.png',
        name: 'Time Series in Machine Learning',
        organization: 'Kagle University',
        date: 'March 2023',
        description: 'This is a brief description of the certificate.',
        link: 'https://www.kaggle.com/learn/certification/krushna27/time-series'
    },
    {
        image: 'Images/Screenshot 2024-11-27 at 7.15.36 PM.png',
        name: 'Into to Git and GitHub',
        organization: 'Google',
        date: 'June 2023',
        description: 'The Intro to Git and GitHub course provides a foundational understanding of version control systems, specifically Git, and how to collaborate using GitHub. Learners start with basic Git concepts, such as creating repositories, committing changes, branching, and merging. The course covers essential commands for managing local and remote repositories, tracking changes, and resolving conflicts. Participants also learn how to use GitHub for collaboration, including forking repositories, creating pull requests, and managing contributions in team projects. By the end of the course, learners will be proficient in using Git and GitHub for version control, collaboration, and project management in both individual and team-based environments.',
        link: 'https://www.coursera.org/account/accomplishments/verify/TDYGE9YXGA7F'
    },
    {
        image: 'Images/Screenshot 2024-11-27 at 7.18.22 PM.png',
        name: 'Advanced SQL',
        organization: 'Kaggle University',
        date: 'September 2023',
        description: 'The Advanced SQL course builds on basic SQL knowledge to cover more complex querying techniques and optimizations for working with large datasets. It dives into advanced topics like subqueries, window functions, Common Table Expressions (CTEs), and complex joins (e.g., self-joins and cross joins). Learners will explore advanced aggregation, grouping, and filtering techniques, as well as how to manage transactions and ensure data integrity using SQL constraints. The course also includes optimization strategies for query performance, indexing, and execution plans. Through hands-on exercises, participants develop the skills to write efficient, scalable SQL queries and solve sophisticated data challenges in relational databases.',
        link: 'https://www.kaggle.com/learn/certification/krushna27/advanced-sql'
    },
    {
        image: 'Images/Screenshot 2024-11-27 at 7.20.05 PM.png',
        name: 'Intro to Deep Learning',
        organization: 'Kagle University',
        date: 'October 2024',
        description: 'The Intro to Deep Learning course provides a foundational understanding of deep learning, a subset of machine learning focused on neural networks. It introduces the basic concepts behind deep learning, including artificial neurons, activation functions, layers, and how these elements are combined to build deep neural networks. The course covers essential topics such as forward propagation, backpropagation, loss functions, and optimization techniques like gradient descent. Learners explore key deep learning architectures, including convolutional neural networks (CNNs) and recurrent neural networks (RNNs), and gain hands-on experience with popular frameworks like TensorFlow or Keras. By the end, participants will be equipped to apply deep learning techniques to solve problems in fields like computer vision, natural language processing, and speech recognition..',
        link: 'https://www.kaggle.com/learn/certification/krushna27/intro-to-deep-learning'
    }
];

const Certificate = () => {
    return (
        <div className="certificate-page">
            <div className="content">
                <h1 className="title">Certifications</h1>
                <p className="quote">Behind every great achievement, there is a dreamer of great dreams</p>
                <div className="card-container">
                    {certificates.map((cert, index) => (
                        <div key={index} className="card">
                            <img src={cert.image} alt="Certificate" className="certificate-image" />
                            <div className="card-body">
                                <h5 className="card-title">{cert.name}</h5>
                                <p className="card-text-org"><strong>Organization:</strong> {cert.organization}</p>
                                <p className="card-text-date"><strong>Date:</strong> {cert.date}</p>
                                <p className="card-text-desc">{cert.description}</p>
                                <a href={cert.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Certificate</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Certificate;
