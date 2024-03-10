import React,{useEffect, useState} from "react";
import CategoryProducts from "./categoryProducts";
import { Link } from "react-scroll";
import gsap from "gsap";
import CategoryButtons from "./CategoryButtons";
import CategoryWrapper from "./CategoryWrapper";

export const categoriesBackgrounds = [
  {
    id: 1,
    "background": "https://images.unsplash.com/photo-1508872528308-297e1dc77d6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "KOLEKCJA EGIPSKA",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quasi nemo sed, officiis est mollitia.",
    link: "egypt",
    collection: 'egypt'
  },
  {
    id: 2,
    "background": "https://images.unsplash.com/photo-1508872528308-297e1dc77d6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "KOLEKCJA RZYMSKA",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quasi nemo sed, officiis est mollitia.",
    link: "rome",
    collection: 'rome'
  },
  {
    id: 3,
    "background": "https://images.unsplash.com/photo-1508872528308-297e1dc77d6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "KOLEKCJA NORDYCKA",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quasi nemo sed, officiis est mollitia.",
    link: "nordic",
    collection: 'nordic'
  },
  {
    id: 4,
    "background": "https://images.unsplash.com/photo-1508872528308-297e1dc77d6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "KOLEKCJA NIEMIECKA",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quasi nemo sed, officiis est mollitia.",
    link: "german",
    collection: 'german'
  },
  {
    id: 5,
    "background": "https://images.unsplash.com/photo-1508872528308-297e1dc77d6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "KOLEKCJA AZJATYCKA",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quasi nemo sed, officiis est mollitia.",
    link: "asian",
    collection: 'asian'
  }
]

// const buttonHover =()=>{
//   gsap.to(".buttonBg", {y: "-100%", duration:.5, zIndex:"-10"})
// }

// const buttonHoverLeave =()=>{
//   gsap.to(".buttonBg", {y: "100%", duration:.5, zIndex:"-10"})
// }

const Men=()=>{
    useEffect(() => {
		window.scrollTo(0, 0)
	  }, [])

    return(
      <div>
        <CategoryWrapper header={"MĘŻCZYZNA"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, laudantium?"} categoriesBackgrounds={categoriesBackgrounds} backgroundImage={"https://images.unsplash.com/photo-1584190810197-75f679c058fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
      </div>
    )
}

export default Men;