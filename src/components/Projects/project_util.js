import anonqq_project from "../../assets/projects/anon-qq.svg"
import instatube_project from "../../assets/projects/instatube.svg"
import jrnlr_project from "../../assets/projects/jrnlr.svg"
import mebu_project from "../../assets/projects/mebu.svg"
import ncr_project from "../../assets/projects/new-creation-realities.svg"
import bkchu_logo from "../../assets/bkchuLogo.svg"
export default [
  {
    title: "Personal Portfolio",
    description: `The goal for this portfolio site was to make it blazing fast and easy to interact with, so I decided to use Gatsby ❤️, a "blazing fast" static site generator. I also wanted to incorporate animations, so I incorporated the recently released Framer Motion to mimic fast performance. For my final goal, I wanted the site to be SEO-friendly.`,
    year: "2019",
    url: "https://www.bkchu.dev",
    img: bkchu_logo,
    technologies:
      "Gatsby,Redux,Framer Motion,classnames (javascript utility package),PWA,Mobile-Responsive",
    color: "#000",
  },
  {
    title: "New Creation Realities",
    description:
      "A front-end project that acts as an online medium for an already existing supplemental book for church-use. This includes a self-built bible reference parser that parses plain text biblical references and wraps them with external links to the YouVersion bible app.",
    year: "2018",
    url: "https://ncr.bkchu.dev",
    img: ncr_project,
    technologies:
      "React,Redux,Sass,CSS Modules,React HTML Parser,classnames (javascript utility package), PWA, Mobile-Responsive",
    color: "#A4B6A4",
  },
  {
    title: "MEBU Property Management | Team App",
    description:
      "A full-stack application created for real estate owners to manage all aspects of their property and residents. The front-end UI was envisioned, planned, and developed by a team under my leadership to be a simple, navigable dashboard.",
    year: "2018",
    url: "https://mebu.herokuapp.com",
    img: mebu_project,
    technologies:
      "React,Redux,Node,Express,PostgreSQL,bCrypt,MomentJS,ChartJS,Nodemailer,Stripe,PropTypes",
    credentials: [
      {
        role: "Owner",
        email: "aa@aa.com",
        password: "2mLSqs",
      },
      {
        role: "Resident",
        email: "aa@aa.com",
        password: "tailopez",
      },
    ],
    color: "#2796D6",
  },
  {
    title: "Jrnlr | Solo App",
    description:
      "A platform developed for those who want to keep an online journal, along with the ability to have meaningful, social interactions.",
    year: "2018",
    url: "https://www.jrnlr.me",
    img: jrnlr_project,
    technologies:
      "React,Redux,Node,Express,PostgreSQL,PassportJS,Unsplash API,Giphy API,MomentJS,Mobile-Responsive",
    credentials: [
      {
        role: "Test User",
        email: "jrnlr-tester@mailinator.com",
        password: "abcABC123",
      },
    ],
    color: "#FFF",
  },
  {
    title: "Anon-QQ | Pair-Programming App",
    description:
      "A real-time web sockets application developed within roughly 10 working hours so that students who feel uncomfortable asking questions in front of their peers can ask with anonymity.",
    year: "2018",
    url: "https://anon-qq.herokuapp.com",
    img: anonqq_project,
    technologies: "React,Node,Express,Socket.io,Lodash,Mobile-Responsive",
    color: "#072148",
  },
  {
    title: "InstaTube | Solo App",
    description:
      "A deeper dive into learning ReactJS by building an instant search version for YouTube videos.",
    year: "2017",
    url: "https://instatube-react.herokuapp.com",
    img: instatube_project,
    technologies: "React,State + Props,YouTube API,Mobile-Responsive",
    color: "#312F31",
  },
]
