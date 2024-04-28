import { FaHtml5, FaJs, FaReact, FaNodeJs} from 'react-icons/fa';

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
      icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
      text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
    },
    {
      id: 2,
      title: 'Javascript',
      icon: <FaJs className='h-16 w-16 text-emerald-500' />,
      text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
    },
    {
      id: 3,
      title: 'React',
      icon: <FaReact className='h-16 w-16 text-emerald-500' />,
      text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
    },
    {
        id:4,
        title:'Node Js',
        icon:<FaNodeJs className='h-16 w-16 text-emerald-500' />,
        text: 'Advanced proficiency in Node Js, developing efficient and interactive backend applications with a strong emphasis.'
    }
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
  
