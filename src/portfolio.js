/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Jai Joshi's Personal Portfolio Website",
  description:
    "Being interested in computers since a young age, it feels wonderful to solve problems with the tools that just fit your hands. Made significant progress from a novice to self-learning new and interesting technologies and implementing them in projects. Eager to be challenged in order to provide simple and efficient solutions. Enthusiastic to learn new technologies as the need arises and improve my skills",
  og: {
    title: "JJ Personal Portfolio Website",
    type: "website",
    url: "https://joshijai2.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Jai Joshi",
  logo_name: "Jai Joshi",
  nickname: "JJ",
  subTitle:
    "Being interested in computers since a young age, it feels wonderful to solve problems with the tools that just fit your hands. Made significant progress from a novice to self-learning new and interesting technologies and implementing them in projects. Eager to be challenged in order to provide simple and efficient solutions. Enthusiastic to learn new technologies as the need arises and improve my skills.",
  resumeLink:
    "https://1drv.ms/b/s!AtCZstbAX3wx-js-OYwEa6UNnMLa?e=57lpvG",
  portfolio_repository: "https://github.com/joshijai2/joshijai2",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/joshijai2",
  // linkedin: "https://www.linkedin.com/in/joshijai2/",
  // gmail: "joshi.jai232@gmail.com",
  // gitlab: "https://gitlab.com/joshijai2",
  // facebook: "https://www.facebook.com/joshijai2/",
  // twitter: "https://twitter.com/joshi_jai2",
  // instagram: "https://www.instagram.com/joshijai2/"

  {
    name: "Github",
    link: "https://github.com/joshijai2",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/joshijai2/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:joshi.jai232@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/joshi_jai2",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/joshijai2/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/joshijai2/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Regression and Classification projects",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Scikit-Learn",
          fontAwesomeClassname: "simple-icons:scikit-learn",
          style: {
            backgroundColor: "white",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using HTML, CSS, Bootstrap and React",
        "⚡ Creating application backend in Node and Express",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#4DB33D",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/joshijai2",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/joshijai2",
    },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@joshijai2",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/joshijai2",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Vellore Institute of Technology, Vellore",
      subtitle: "B.Tech. in Information Technology",
      logo_path: "vit_logo.png",
      alt_name: "VIT Vellore",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science and Web Development.",
      ],
      website_link: "https://vit.ac.in",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    {
      title: "IBM Data Science Professional Certificate",
      subtitle: "- IBM Coursera",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://coursera.org/share/227cbc2d1f604aa26790c4393032a6de",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Neural Networks and Deep Learning",
      subtitle: "- DeepLearning.AI",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://coursera.org/share/5944636c22916b914914e250ad62bdfa",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    
    {
      title: "Data Science for Engineers",
      subtitle: "- NPTEL",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://1drv.ms/b/s!AtCZstbAX3wxiQ3k-Z5HYndyuPKP?e=asilxJ",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Algorithmic Toolbox",
      subtitle: "- Coursera",
      logo_path: "UCSD_logo.png",
      certificate_link:
        "https://coursera.org/share/d441993bd0d2b1e92ea6ffb28b7dcf4b",
      alt_name: "University of California San Diego, HSE University",
      color_code: "#eee",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship and Volunteership",
  description:
    "I have worked with a few Companies as a data science researcher as well as a web developer.",
  header_image_path: "experience.svg",
  sections: [
    // {
    //   title: "Work",
    //   experiences: [
    //     {
    //       title: "Developer",
    //       company: "",
    //       company_url: "",
    //       logo_path: "",
    //       duration: "",
    //       location: "",
    //       description:
    //         "",
    //       color: "#eee",
    //     },
    //   ],
    // },
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Science Research Intern",
          company: "Samsung",
          company_url: "https://www.samsungprism.com/",
          logo_path: "samsungprism_logo.png",
          duration: "Oct 2020 - Mar 2021",
          location: "Work from home",
          description:
            "I have worked on an On-Device AI project using TensorFlow. Implemented a tensorflow model to separate environmental sounds from a noisy audio.",
          color: "#eee",
        },
        {
          title: "Web Developer Intern",
          company: "Edify Accelerators",
          company_url:
            "https://in.linkedin.com/in/edify-accelerators-498361194",
          logo_path: "edify_logo.jpg",
          duration: "Aug 2020 - Oct 2020",
          location: "Work from home",
          description:
            "Worked on the development of a data science related SaaS product. Worked as frontend dev using React and Bootstrap. Developed several web pages and multiple React components while collaborating with the UI/UX, Backend and Data Science team.",
          color: "#eee",
        },
        {
          title: "Machine Learning Intern",
          company: "Verzeo",
          company_url: "https://www.verzeo.com/",
          logo_path: "verzeo_logo.png",
          duration: "Apr 2020 - May 2020",
          location: "Work from home",
          description:
            "Worked on analysis of student performance using Pandas and Matplotlib. Worked on a regression model using XGBoost and LightGBM for predicting selling price of used cars. Reached an accuracy of 93% and RMSE of 2.9",
          color: "#eee",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Event Management Team",
          company: "5th Pillar VIT",
          company_url: "https://www.linkedin.com/company/5th-pillar/",
          logo_path: "5p_logo.jpg",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Managed events with participants ranging from 100 - 500.",
          color: "#eee",
        },
        {
          title: "Student Volunteer",
          company: "Youth Red Cross VIT",
          company_url: "https://www.linkedin.com/company/youth-red-cross-vit/",
          logo_path: "YRCVIT_logo.jpg",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "",
          color: "#eee",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and basic web dev projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "JJ.png",
    description:
      "I am available on almost every social media. You can message me, I will try to reply within 24 hours. I can help you with ML, AI, Web dev and Opensource Development.",
  },
  blogSection: {
    title: "Kaggle",
    subtitle:
      "I like to work on kaggle notebooks to practise and upload the my approach on various datasets and competitions.",
    link: "https://kaggle.com/joshijai2",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Amau, Tigri Chauraha, Opp Railway Track, Khatima, Uttarakhand - 262308",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Mobile Number",
    subtitle: "+91 8072458976",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
