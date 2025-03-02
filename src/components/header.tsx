

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Header = () => {
    // Use refs to access the DOM elements
    const greetingRef = useRef(null);
    const titleRef = useRef(null);
    const subheadRef = useRef(null);

    useEffect(() => {
        // GSAP Animation for greeting, title, and subheading
        gsap.fromTo(
            greetingRef.current,
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power2.out" }
        );

        gsap.fromTo(titleRef.current, {x: 100, opacity: 0}, 
            {x: 0, opacity: 1, duration: 1, delay: 1, ease: "power2.out"});

        gsap.fromTo(subheadRef.current, {x:-100 , opacity: 0}, 
            {x: 0, opacity: 1, duration: 1, delay: 1.5, ease: "power2.out"});
    }, []);

    return (
        <header className="bg-info py-5 text-center">
            <div className="container">
                {/* Greeting */}
                <p className="greeting mt-5 lead mb-2 fs-3" ref={greetingRef} aria-label="Greeting">
                    Hi, I'm Ezz
                </p>

                {/* Main Title */}
                <h1 className="title display-4 mb-3 fw-bold" ref={titleRef}>
                    React & Laravel Developer
                </h1>

                {/* Subheading */}
                <h2 className="subhead fs-5 mb-5 text-muted" ref={subheadRef}>
                    Crafting Dynamic & Scalable Web Applications
                </h2>
            </div>
        </header>
    );
};

export default Header;
