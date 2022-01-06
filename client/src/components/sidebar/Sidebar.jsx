import axios from "axios";
import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./sidebar.css"

export default function Sidebar() {
  const [cats, setCats]= useState([]);
useEffect(() => {
  const getCats = async()=>{
    const res = await axios.get("/categories")
    
    setCats(res.data)
  }
  getCats()
 
}, [])

    return (
        <div className="sidebar">
           <div className="sidebarItem">
               <span className="sidebarTitle">ABOUT ME</span>
               <img src="https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270" alt="" />
           
           <p>
           Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
           sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.  
           </p>
           </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c)=>(
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
        
          ))}
          
          
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>

            
        </div>
    )
}