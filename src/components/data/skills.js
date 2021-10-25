export const SkillsData = [
  {
    type: "Frontend",
    lists: [
      {
        name: "ReactJs",
        icon: <i class="devicon-react-original colored"></i>,
      },
      {
        name: "JavaScript",
        icon: <i class="devicon-javascript-plain colored"></i>,
      },
      {
        name: "HTML",
        icon: <i class="devicon-html5-plain-wordmark colored"></i>,
      },
      {
        name: "CSS",
        icon: <i class="devicon-css3-plain-wordmark colored"></i>,
      },
    ],
  },
  {
    type: "Backend",
    lists: [
      {
        name: "C++",
        icon: <i class="devicon-cplusplus-plain colored"></i>,
      },
      {
        name: "Python",
        icon: <i class="devicon-python-plain colored"></i>,
      },
      {
        name: "C",
        icon: <i class="devicon-c-plain colored"></i>,
      },
    ],
  },
  {
    type: "No-Code platforms",
    lists: [
      {
        name: "Adalo",
        icon: <img src={require("../../assets/adalo.jpg").default}></img>,
      },
      {
        name: "Bubble",
        icon: <img src={require("../../assets/bubble.jpg").default}></img>,
      },
    ],
  },
  {
    type: "Applications",
    lists: [
      {
        name: "GoogleAnalytics",
        icon: <img src={require("../../assets/GA.jpg").default}></img>,
      },
      {
        name: "Google DataStudio",
        icon: <img src={require("../../assets/DS.jpg").default}></img>,
      },
      {
        name: "netlify",
        icon: <img src={require("../../assets/netlify.jpg").default}></img>,
      },
      {
        name: "G-sheets",
        icon: (
          <img src={require("../../assets/googlesheets.png").default}></img>
        ),
      },
    ],
  },
];
