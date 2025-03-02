import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Galleryprops {
  title? : string
  description? : string
  github? : string
  descriptionnd? : string
  githubnd? : string
}
const Gallery = ({title, description, github, descriptionnd, githubnd } : Galleryprops) => {
  const project = useRef(null);

  const screenHeight = window.innerHeight;
  useEffect(() => {
     gsap.fromTo(
      project.current, { x:-200, opacity:0},
      {
        x:0,
        opacity:1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger:project.current,
          start: "top 80%",
          end: "top 50%",
          scrub:1,
      },
     }, 
    );
}, []);

  
  return (
    <div className="container">
      <div>
        <div ref={project} className="container project d-flex flex-column">
          <div className="text">
            <h2 className="custom-text border-bottom border-danger">{title}</h2>
            <p className="custom-text fs-4">{description}</p>
            <a className="custom-text fs-4 text-decoration-nonecustom-text " href={github}>{github && "Github Link"}</a>
            <p className="custom-text fs-4">{descriptionnd}</p>
            <a className="custom-text fs-4 text-decoration-none" href={githubnd}>{github && "Github Link"}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
