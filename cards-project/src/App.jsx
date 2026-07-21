import Card from "./components/Card"

const App = () => {
  const jobs = [
    {
      brandLogo: "https://cdn.simpleicons.org/google",
      company: "Google",
      datePosted: "2 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hr",
      location: "Bangalore"
    },
    {
      brandLogo: "https://cdn.simpleicons.org/apple",
      company: "Apple",
      datePosted: "5 days ago",
      post: "iOS Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$95/hr",
      location: "Hyderabad"
    },
    {
      brandLogo: "https://cdn.simpleicons.org/meta",
      company: "Meta",
      datePosted: "1 week ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$90/hr",
      location: "Mumbai"
    },
    {
      brandLogo: "https://cdn.simpleicons.org/amazon",
      company: "Amazon",
      datePosted: "3 days ago",
      post: "SDE I",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$60/hr",
      location: "Chennai"
    },
    {
      brandLogo: "https://cdn.simpleicons.org/microsoft",
      company: "Microsoft",
      datePosted: "2 weeks ago",
      post: "Full Stack Dev",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$80/hr",
      location: "Noida"
    },
    {
      brandLogo: "https://cdn.simpleicons.org/netflix",
      company: "Netflix",
      datePosted: "4 days ago",
      post: "Platform Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$110/hr",
      location: "Pune"
    },
    {
      brandLogo: "https://cdn.simpleicons.org/nvidia",
      company: "NVIDIA",
      datePosted: "10 days ago",
      post: "AI Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$75/hr",
      location: "Bangalore"
    },
    {
      brandLogo: "https://cdn.simpleicons.org/adobe",
      company: "Adobe",
      datePosted: "3 weeks ago",
      post: "UI Engineer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$55/hr",
      location: "Delhi"
    },
    {
      brandLogo: "https://cdn.simpleicons.org/uber",
      company: "Uber",
      datePosted: "6 days ago",
      post: "Mobile Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$85/hr",
      location: "Hyderabad"
    },
    {
      brandLogo: "https://cdn.simpleicons.org/openai",
      company: "OpenAI",
      datePosted: "5 weeks ago",
      post: "ML Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$120/hr",
      location: "San Francisco"
    }
  ];


  return (
    <div className='parent'>
      {jobs.map(function (elm) {
        return <Card
          brandLogo={elm.brandLogo}
          company={elm.company}
          datePosted={elm.datePosted}
          post={elm.post}
          tag1={elm.tag1}
          tag2={elm.tag2}
          pay={elm.pay}
          location={elm.location}
        />
      })}
    </div>
  )
}

export default App