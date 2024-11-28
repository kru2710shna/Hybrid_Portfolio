import React from "react";
import "./Skills.css";
import { useNavigate } from 'react-router-dom';

const Skills = () => {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate('/main_page');

  }

  const skills = [
    { name: "JavaScript", logo: "Images/js.png" },
    { name: "Python", logo: "Images/python.png" },
    { name: "React", logo: "Images/react.png" },
    { name: "C", logo: "Images/letter-c.png" },
    { name: "Java", logo: "/Images/java.png" },
    { name: "HTML", logo: "/Images/html.png" },
    { name: "CSS", logo: "https://banner2.cleanpng.com/20190409/ioc/kisspng-cascading-style-sheets-logo-css3-html-javascript-1713898812459.webp" },
    { name: "R", logo: "/Images/r.png" },
    { name: "MERN", logo: "https://miro.medium.com/v2/resize:fit:678/0*kxPYwfJmkXZ3iCWy.png" },
    { name: "Docker", logo: "https://cdn.worldvectorlogo.com/logos/docker.svg" },
    { name: "Kubernetes", logo: "https://banner2.cleanpng.com/20190220/ehr/kisspng-logo-kubernetes-transparency-font-computer-softwar-1713906561749.webp" },
    { name: "SQL", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Sql_data_base_with_logo.svg/2560px-Sql_data_base_with_logo.svg.png" },
    { name: "NoSQL", logo: "https://www.okoone.com/wp-content/uploads/2024/04/no-sql-logo.png" },
    { name: "AWS", logo: "https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png" },
    { name: "Azure", logo: "https://c8.alamy.com/comp/2XX3N5M/microsoft-azure-logo-2XX3N5M.jpg" }, // Added
    { name: "GCP", logo: "https://www.serviops.ca/wp-content/uploads/2015/07/Google-Cloud-Platform-GCP-Logo.png" },     // Added
    { name: "Google Colab", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Google_Colaboratory_SVG_Logo.svg/977px-Google_Colaboratory_SVG_Logo.svg.png" }, // Added
    { name: "TensorFlow", logo: "https://banner2.cleanpng.com/20180815/plh/2a1ec88891e3f7d3d78e2fcb16694e14.webp" },
    { name: "PyTorch", logo: "https://miro.medium.com/v2/resize:fit:691/1*VSQ0XEywxSgZBwW05GsZtw.png" },
    { name: "Flask", logo: "https://icon2.cleanpng.com/20180829/okc/kisspng-flask-python-web-framework-representational-state-flask-stickker-1713946755581.webp" },
    { name: "Django", logo: "https://icon2.cleanpng.com/20180805/eb/6fc2ff82895f3cd929ccf166c45578fb.webp" },
    { name: "Scikit-Learn", logo: "https://sklearn.vercel.app/sklearn-logo.png" },
    { name: "NumPy", logo: "https://e7.pngegg.com/pngimages/39/4/png-clipart-logo-scikit-learn-python-github-machine-learning-text-orange.png" },
    { name: "Pandas", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZd37oUzVXPHOsl-Ygg5hzYpZs7Djvk-vSw&s" },
    { name: "OpenCV", logo: "https://e7.pngegg.com/pngimages/755/671/png-clipart-opencv-c-python-computer-vision-library-numpy-text-logo.png" },
    { name: "Matplotlib", logo: "https://i.namu.wiki/i/QAax45jgOehPZ2oX7i1bJGZxFV5IbjBqOub2I1eETCEGyjXui8LPpTZRjt2rXeOmNcM8XxFcofkAzRDP7TxNkg.webp" },
    { name: "Keras", logo: "https://w7.pngwing.com/pngs/571/118/png-transparent-keras-logo-thumbnail.png" },
    { name: "XGBoost", logo: "https://miro.medium.com/v2/resize:fit:720/0*2LQ7VkdK9d2WaPVJ.png" },
    { name: "Apache", logo: "https://banner2.cleanpng.com/20180821/hiq/9f7b88ea056260609205d2b1aa78aa96.webp" },
    { name: "OpenShift", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-3W8NkqUF5N4tR-j-0S5oJSg2bXCkciWRKQ&s" },
    { name: "Tableau", logo: "https://logos-world.net/wp-content/uploads/2021/10/Tableau-Emblem.png" },
    { name: "Hadoop", logo: "https://cdn.worldvectorlogo.com/logos/hadoop.svg" },
    { name: "AWS Redshift", logo: "https://d2mkz4zdclmlek.cloudfront.net/blog/wp-content/uploads/2023/05/redshift.png" },
    { name: "DAX", logo: "https://miro.medium.com/v2/resize:fit:836/1*eoFoxRAZMW8icMn6jybgwA.png" },
    { name: "MLFlow", logo: "https://miro.medium.com/v2/resize:fit:1056/0*5Hubk4Nwe7BdQS2D" },
    { name: "DagHub", logo: "https://user-images.githubusercontent.com/611655/181510038-e38f4001-c304-411e-8f45-f71554eb9763.png" },
    { name: "DVC", logo: "https://miro.medium.com/v2/resize:fit:944/1*6NurvtM2jzw0V9eWwOtGuA.png" },
    { name: "Time Management", logo: "https://static1.bigstockphoto.com/9/1/1/large2/119336579.jpg" },
    { name: "Critical Thinking", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIDr97kBZNMiYImpHglN2zKg9bTbEWIq5B_A&s" },
    { name: "Model Compression", logo: "https://thumbs.dreamstime.com/b/data-compression-concept-line-icon-simple-element-illustration-data-compression-concept-outline-data-compression-concept-line-icon-159015189.jpg" },
    { name: "Cloud Computing", logo: "https://t3.ftcdn.net/jpg/01/45/45/84/360_F_145458464_jwzxq2PMdnFnqQC5pmDZ0jYWyDLx7iEg.jpg" },
    { name: "Golang", logo: "https://w7.pngwing.com/pngs/566/160/png-transparent-golang-hd-logo-thumbnail.png" },
    { name: "Agile", logo: "https://www.seguetech.com/wp-content/uploads/2015/11/segue-blog-agile-testing-symphony-of-people-ideas-tech..png" },
    { name: "Jira", logo: "https://1000logos.net/wp-content/uploads/2021/05/Atlassian-Logo-2010s1.png" },
    { name: "Slack", logo: "https://www.travelperk.com/wp-content/uploads/Slack-Logo.png" },
    { name: "Leadership", logo: "https://cdn.prod.website-files.com/61bba0d8d5db9a402afc2065/65e05420123726cc23a74ee0_new_leaders_eduation_leadership_development_synonyms_for_leadership.webp" },
    { name: "Communication", logo: "https://cdn.aib.edu.au/public-website/uploads/p/2014/06/form-submission-7472-6reasonseffectivecommunicationfocusbusiness-2-desktop-768x432-1608079236-85.jpg" },
    { name: "Teamwork", logo: "https://eu-images.contentstack.com/v3/assets/blt4175b16074920322/bltd6cd4f8d49caa4f3/6485e874ca61417c3fad07f1/mgmt-matters-teamwork-katleho-Seisa-GettyImages.jpg" }
  ];

  return (
    <div className="skills-container">
      <h1 className="skills-title">Skills</h1>
      <p className="skills-quote">" Learning is a treasure that will follow its owner everywhere " </p>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <img
              src={skill.logo}
              alt={`${skill.name} logo`}
              className="skill-logo"
            />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
      <div className="back-button-container007 text-center my-4">
        <button
          className="back-button007 animate__animated animate__pulse animate__infinite"
          onClick={handleBackButtonClick}
        >
          <span className="back-icon007">&#8592;</span> Back
        </button>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>Creator: Krushna Thakkar</p>
      </footer>
    </div>
  );
};

export default Skills;
