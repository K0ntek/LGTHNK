import React,{useEffect} from "react";
import CategoryProducts from "./categoryProducts";
import { Link } from "react-scroll";
import CategoryWrapper from "./CategoryWrapper";

 export const categoriesBackgrounds = [
      {
        id: 1,
        background: "https://images.unsplash.com/photo-1527058054345-f870ffe763eb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "KOLEKCJA EGIPSKA",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quasi nemo sed, officiis est mollitia.",
        link: "egypt",
         collection: 'egypt'
      },
      {
        id: 2,
        background: "https://images.unsplash.com/photo-1527058054345-f870ffe763eb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "KOLEKCJA RZYMSKA",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quasi nemo sed, officiis est mollitia.",
        link: "rome",
         collection: 'rome'
      },
      {
        id: 3,
        background: "https://images.unsplash.com/photo-1527058054345-f870ffe763eb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "KOLEKCJA NORDYCKA",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quasi nemo sed, officiis est mollitia.",
        link: "nordic",
         collection: 'nordic'
      },
      {
        id: 4,
        background: "https://images.unsplash.com/photo-1527058054345-f870ffe763eb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "KOLEKCJA NIEMIECKA",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quasi nemo sed, officiis est mollitia.",
        link: "german",
         collection: 'german'
      },
      {
        id: 5,
        background: "https://images.unsplash.com/photo-1527058054345-f870ffe763eb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "KOLEKCJA AZJATYCKA",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quasi nemo sed, officiis est mollitia.",
        link: "asian",
         collection: 'asian'
      }
    ]

const Women =()=>{
    useEffect(() => {
		window.scrollTo(0, 0)
	  }, [])

    return(
       <div>
        <CategoryWrapper header={"KOBIETA"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, laudantium?"} categoriesBackgrounds={categoriesBackgrounds} backgroundImage={"https://images.unsplash.com/photo-1484663548870-2aa675ba38fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
       </div>
    )
}

export default Women;