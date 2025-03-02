import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const about = useRef(null);
    const borderRef = useRef(null);
    const borderRefNd = useRef(null);
    const containerRef = useRef<HTMLDivElement>(null); // Reference to the container div
    const logoRef = useRef<HTMLImageElement>(null); // Reference to the logo image
    
    useEffect(() => {
        const containerWidth = containerRef.current?.offsetWidth ?? 0;
        const logoWidth = logoRef.current?.offsetWidth || 0;

        // GSAP Animation for greeting, title, and subheading
        gsap.fromTo(
            about.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, delay: 2, ease: "power2.out" }
        );
        gsap.to(borderRef.current, {
            rotation: 360,
            duration: 3,
            repeat: -1,
            ease: "linear"
        });
        gsap.to(borderRefNd.current, {
            rotation: 360,
            duration: 3,
            repeat: -1,
            ease: "linear"
        });
        gsap.to(logoRef.current, {
            x: containerWidth - logoWidth,
            duration: 3,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: ".logo", // Trigger when logo enters the viewport
              start: "top bottom", // Start animation when logo enters bottom of viewport
              end: "top top", // End animation when logo reaches the top of the viewport
              scrub: true, // Make it sync with scrolling
            },
          });
    }, []);


    
    return (
        <div className="container py-5" ref={about}>
            <h3 className="fs-3">Hi there! I'm Ezz, a full-stack developer specializing in crafting impressive web experiences using React and Laravel</h3> 
            <p className="fs-4 text-info">My toolkit combines:</p>
             <ul className="">
                <li className="list-group-item fs-5">React 🚀: For building lightning-fast, component-driven UIs that adapt seamlessly to user interactions</li>
                <div className="container img-field">
                    <div  ref={borderRef} className="d-flex justify-content-center align-items-center grad-border"></div>
                        <img className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2" src="src/components/gallery/react.png" alt="react logo" />
                </div>
                <li className="list-group-item fs-5">Laravel 🎯: Creating robust backend architectures with elegant syntax and MVC efficiency</li>
                <div className="container img-field">
                    <div  ref={borderRefNd} className="d-flex justify-content-center align-items-center grad-border"></div>
                        <img className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-2 col-2" src="src/components/gallery/laravel.png" alt="laravel logo" />
                </div>
                <li className="list-group-item fs-5">GSAP ✨: Implementing buttery-smooth animations that enhance user engagement without sacrificing performance</li>
                <div ref={containerRef}>
                    <img ref={logoRef} className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-3 col-3 logo" src="src/components/gallery/logo.png" alt="gsap logo" />
                </div>
            </ul>

            <div className="intro-text">
    <p className="lead">This powerful stack lets me deliver <span className="highlight">full-cycle solutions</span></p>
    <p>where <span className="bold">pixel-perfect frontends</span> meet <span className="bold">scalable backends</span>.</p>
    <p>By leveraging <span className="tech">React's virtual DOM</span> with <span className="tech">Laravel's API resources</span>,</p>
    <p>I create applications that are as <span className="emphasize">performant</span> as they are <span className="emphasize">maintainable</span>.</p>
</div>

<p className="fs-4 text-info">Why This Combo Wins:</p>
<ol className="fs-5">
    <li>Speed + Stability: React's efficiency meets Laravel's secure backend</li>
    <li>Visual Impact: GSAP animations that work cross-browser</li>
    <li>Future-Proof: Easily extendable architecture for growing needs</li>
    <li>Perfect for agencies and startups needing both technical depth and creative flair! 🚀</li>
</ol>
        </div>
    )
}

export default About