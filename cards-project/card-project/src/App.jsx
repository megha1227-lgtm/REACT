import React from 'react'
import Card from './components/card.jsx'
import { Car } from 'lucide-react'
const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://api.companyenrich.com/logo/google.com",
      name: "Software Engineer",
      company: "Google",
      date: "5 days ago",
      post: "Build scalable applications and improve products used worldwide.",
      tag1: "Full-time",
      tag2: "Junior Level",
      pay: 45,
      location: "Bengaluru, India"
    },
    {
      brandLogo: "https://api.companyenrich.com/logo/meta.com",
      name: "Frontend Developer",
      company: "Meta",
      date: "10 weeks ago",
      post: "Develop responsive interfaces for modern social media products.",
      tag1: "Full-time",
      tag2: "Mid Level",
      pay: 50,
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://api.companyenrich.com/logo/amazon.com",
      name: "Software Development Engineer",
      company: "Amazon",
      date: "5 days ago",
      post: "Create reliable services and scalable cloud-based applications.",
      tag1: "Full-time",
      tag2: "Junior Level",
      pay: 42,
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://api.companyenrich.com/logo/microsoft.com",
      name: "Web Developer",
      company: "Microsoft",
      date: "10 weeks ago",
      post: "Build accessible web experiences and maintain enterprise applications.",
      tag1: "Full-time",
      tag2: "Mid Level",
      pay: 48,
      location: "Noida, India"
    },
    {
      brandLogo: "https://api.companyenrich.com/logo/apple.com",
      name: "UI/UX Designer",
      company: "Apple",
      date: "5 days ago",
      post: "Design intuitive interfaces and improve user experiences.",
      tag1: "Full-time",
      tag2: "Junior Level",
      pay: 38,
      location: "Bengaluru, India"
    },
    {
      brandLogo: "https://api.companyenrich.com/logo/netflix.com",
      name: "Backend Developer",
      company: "Netflix",
      date: "10 weeks ago",
      post: "Develop backend services for high-performance streaming platforms.",
      tag1: "Full-time",
      tag2: "Senior Level",
      pay: 75,
      location: "Remote"
    },
    {
      brandLogo: "https://api.companyenrich.com/logo/nvidia.com",
      name: "Machine Learning Engineer",
      company: "NVIDIA",
      date: "5 days ago",
      post: "Build machine learning systems and optimize AI workloads.",
      tag1: "Full-time",
      tag2: "Senior Level",
      pay: 65,
      location: "Pune, India"
    },
    {
      brandLogo: "https://api.companyenrich.com/logo/adobe.com",
      name: "Junior JavaScript Developer",
      company: "Adobe",
      date: "10 weeks ago",
      post: "Develop interactive web features using JavaScript and modern tools.",
      tag1: "Part-time",
      tag2: "Junior Level",
      pay: 30,
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://api.companyenrich.com/logo/ibm.com",
      name: "Cloud Engineer",
      company: "IBM",
      date: "5 days ago",
      post: "Maintain cloud infrastructure and automate deployment workflows.",
      tag1: "Full-time",
      tag2: "Mid Level",
      pay: 40,
      location: "Chennai, India"
    },
    {
      brandLogo: "https://api.companyenrich.com/logo/oracle.com",
      name: "Full Stack Developer",
      company: "Oracle",
      date: "10 weeks ago",
      post: "Build full-stack applications using frontend and backend technologies.",
      tag1: "Full-time",
      tag2: "Senior Level",
      pay: 55,
      location: "Gurugram, India"
    }
  ];

  // console.log(jobOpenings);
  
  return (
    
    
    <div className="parent">
      {/* {arr.map(function(elm){
      return <h1>{elm*2}</h1>
    })} */}

      {/* {arr.forEach((elm)=>{
      console.log(elm.user)
    })} */}

    {jobOpenings.map((elm , index)=>{
      return <div key={index}>
        <Card location={elm.location} tag1={elm.tag1} tag2={elm.tag2} pay={elm.pay} brandLogo={elm.brandLogo} company={elm.company} post={elm.post} datePosted = {elm.date}/>
      </div>
    })}
    </div>
  )
}

export default App