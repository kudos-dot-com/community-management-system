import DashBoard from '../../Images/SideBar/dashboard.png';
import College from '../../Images/SideBar/college.png';
import Country from '../../Images/SideBar/country.png';
// import Courses from '../../Images/SideBar/courses.png';
import Tasks from '../../Images/SideBar/tasks.png';
import Submissions from '../../Images/SideBar/check.png';
import Campus from '../../Images/SideBar/campus.png'
import Action from '../../Images/SideBar/actions.png';
;



const Data = [
    {
        _id:Math.round(Math.random()*10000),
        img: DashBoard,
        title:"DashBoard",
        link:"/dash",
    },
    {
        _id:Math.round(Math.random()*10000),
        img: College,
        title:"Colleges",
        link:"/dash/colleges",
    },
    // {
    //     _id:Math.round(Math.random()*100),
    //     img: Courses,
    //     title:"Courses",
    //     link:"/dash",
    // },
    {
        _id:Math.round(Math.random()*10000),
        img: Campus,
        title:"Campus Ambassador",
        link:"/dash/ca",
    },
    {
        _id:Math.round(Math.random()*10000),
        img: Tasks,
        title:"CA's tasks",
        link:"/dash/tasks",
    },
    {
        _id:Math.round(Math.random()*10000),
        img: Action,
        title:"Take Action",
        link:"/dash/action",
    },
    {
        _id:Math.round(Math.random()*10000),
        img: Submissions,
        title:"Submissions",
        link:"/dash/submissions",
    },
    {
        _id:Math.round(Math.random()*10000),
        img: Country,
        title:"Country Ambassador",
        link:"/dash/country-ambassador",
    },
];

export default Data;