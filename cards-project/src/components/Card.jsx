import { Bookmark } from "lucide-react"

const Card = (props) => {
  return (
    <div className="card">
        <div>
          <div className="top">
            <img src={props.brandLogo} alt="" />
            <button>Save <Bookmark size={12}/></button>
          </div>
          <div className="center">
            <h3>{props.company} <span>{props.datePosted}</span> </h3>
            <h2>{props.post}</h2>
            <div className="tag">
              <h4>{props.tag1}</h4>
              <h4>{props.tag2}</h4>
            </div>
          </div>
        </div>
        <div className="bottom">
            <div>
              <h3>{props.pay}</h3>
              <p>{props.location}</p>
            </div>
            <button>Apply Now</button>
        </div>
    </div>
    // <div className="card">
    //     <div>
    //       <div className="top">
    //         <img src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg" alt="" />
    //         <button>Save <Bookmark size={12}/></button>
    //       </div>
    //       <div className="center">
    //         <h3>Amazon <span>5 days ago</span> </h3>
    //         <h2>Senior UI/UX designer</h2>
    //         <div className="tag">
    //           <h4>Part time</h4>
    //           <h4>Senior Level</h4>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="bottom">
    //         <div>
    //           <h3>$120/hr</h3>
    //           <p>Mumbai, India</p>
    //         </div>
    //         <button>Apply Now</button>
    //     </div>
    //   </div>
  )
}

export default Card