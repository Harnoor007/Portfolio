/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Harnoor",
  title: "Hello, I'm Harnoor Singh Birdi",
  subTitle: emoji(
    "A passionate Computer Science student 🚀 ,eager to explore the digital world"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1EOA74nO0Gt_WpamJ_ZgHyMbu93CaSGOv/view", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Harnoor007",
  linkedin: "https://www.linkedin.com/in/harnoorbirdi/",
  gmail: "harnoorsingh836@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Who I am",
  subTitle: "GUY WHO WANTS TO EXPLORE EVERY TECH",
  skills: [
    emoji(
      "⚡ Develop web and Android applications"
    ),

    emoji(
      "⚡ Explore Computers for knowledge and Fun"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Guru Nanak Dev Engineering College",
      logo: require("./assets/images/gne.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "2021 - 2025",
      desc: "Some College Glimpses:",
      descBullets: [
        "Maintaining an outstanding 8.5 CGPA through five semesters of rigorous academic pursuit.",
        "Exemplifying leadership as the class representative, dedicated to fostering collaboration and harmony within our academic cohort.",
        "Steering the success of numerous extracurricular events as an event head across various college clubs, showcasing adept organizational skills and a commitment to excellence."
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Structures and Algorithms",
      progressPercentage: "100%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "100%"
    },
    {
      Stack: "Backend",
      progressPercentage: "100%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Assistant Software Engineer",
      company: "Wits Innovation Lab",
      // companylogo: require("./assets/images/wits_logo.png"),
      date: "Jan 2025 – Present",
      desc: "Developed RESTful APIs, implemented role-based access control and JWT authentication, integrated Nodemailer for email workflows, applied AJV validation for schema enforcement, wrote unit and integration tests with Jest, implemented server-sent events using cron, built dynamic dashboards, created invoice generation microservices, and used Postman for API testing and documentation.",
      descBullets: [
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects I worked on:",
  projects: [
    {
      image: require("./assets/images/handshake.png"),
      projectName: "Client Hello-Capture",
      projectDesc: "The application allows you to find out what HTTPS websites are being accessed in the network, see and store data usage. Built using C++, Makefile and MySQL.",
      footerLink: [
        {
          name: "View on Github",
          url: "https://github.com/Harnoor007/HelloCapture"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/tr-tck.png"),
      projectName: "Training Tracker GNDEC",
      projectDesc: "Developed a comprehensive group project aimed at efficiently managing and organizing data pertaining to students' training, internship, and placement experiences, streamlining the process for enhanced administration and accessibility.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://training-tracker-gndec.vercel.app/login"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/wlls.png"),
      projectName: "Walls: Android Wallpapers App",
      projectDesc: "Designed and implemented a user-centric wallpapers application using Flutter and Firebase, enabling users to upload, set, and delete wallpapers seamlessly. Additionally, incorporated features to make wallpapers accessible to all users, enhancing user experience and interaction within the app ecosystem.",
      footerLink: [
        {
          name: "Find release here",
          url: "https://github.com/Harnoor007/wallpaperApp"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),


  achievementsCards: [
    {
      title: "Flipkart GRiD 6.0",
      subtitle:
        "Qualified Flipkart GRiD 6.0 in Information Security domain level 1, ranking among top teams all over India.",
      image: require("./assets/images/flip.png"),
      imageAlt: "Certificate",
      footerLink: [

      ]
    },
    {
      title: "CISCO Networking Basics",
      subtitle:
        "Certified by CISCO Networking Academy for clearing Networking Basics course.",
      image: require("./assets/images/cisco.png"),
      imageAlt: "Certificate",
      footerLink: [

      ]
    },
    {
      title: "Infosys Springboard React Certification",
      subtitle:
        "Cleared Infosys Springboard react developer test.",
      image: require("./assets/images/info.png"),
      imageAlt: "Certificate",
      footerLink: [

      ]
    },
    // {
    //   title: "Gen AI Certification",
    //   subtitle:
    //     "Certification in Introduction to Generative AI offered by Google Cloud on Coursera Platform.",
    //   image: require("./assets/images/genai.png"),
    //   imageAlt: "Certificate",
    //   footerLink: [

    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [

  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true, // Set false to hide this section, defaults to true
  resumeLink:
    "https://drive.google.com/file/d/1EOA74nO0Gt_WpamJ_ZgHyMbu93CaSGOv/view",
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9877243408",
  email_address: "harnoorsingh836@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "harnoor", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
