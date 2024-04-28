import { FaHtml5,  FaReact, FaNodeJs} from 'react-icons/fa';
import { BiLogoPostgresql, BiLogoMongodb } from "react-icons/bi";
import { SiJavascript } from "react-icons/si";

export const links = [
    {id:1, href:'#home', text:'home'},
    {id:2, href:'#skills', text:'skills'},
    {id:3, href:'#projects', text:'projects'},
    {id:4, href:'#about', text:'about'},
    
]


export const skills = [
    {
      id: 1,
      title: 'HTML&CSS',
      icon: <FaHtml5 className='h-16 w-16 text-orange-500' />,
      text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
    },
    {
      id: 2,
      title: 'Javascript',
      icon: <SiJavascript className='h-16 w-16 bg-black text-yellow-300' />,
      text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
    },
    {
      id: 3,
      title: 'React',
      icon: <FaReact className='h-16 w-16 text-cyan-300' />,
      text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
    },
    {
        id:4,
        title:'Node Js',
        icon:<FaNodeJs className='h-16 w-16 text-emerald-500' />,
        text: 'Advanced proficiency in Node Js, developing efficient and interactive backend applications with a strong emphasis.'
    },
    {
        id:5,
        title:'Postgres SQL',
        icon:<BiLogoPostgresql className='h-16 w-16 text-blue-700'/>,
        text:"I am an experienced PostgreSQL SQL developer with a strong command of database design, query optimization, and performance tuning."
    },
    {
        id:6,
        title:'Mongo DB',
        icon:<BiLogoMongodb className='h-16 w-16 text-green-700'/>,
        text:"I specialize in MongoDB development, with a strong command of database schema design, query optimization, and performance tuning. I am skilled in using MongoDB's document-oriented model to create scalable and efficient solutions. My expertise includes working with complex data structures, implementing data validation and aggregation pipelines"
    },
    

  ];
  
  export const projects = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: 'https://react-projects.netlify.app/',
      github: 'https://github.com/john-smilga',
      title: 'first project',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
    },
    {
      id: 2,
      img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: 'https://react-projects.netlify.app/',
      github: 'https://github.com/john-smilga',
      title: 'second project',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
    },
    {
      id: 3,
      img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: 'https://react-projects.netlify.app/',
      github: 'https://github.com/john-smilga',
      title: 'third project',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
    },
  ];
  
