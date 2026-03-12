import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

function CustomCursor() {
  const cursorRef = useRef(null);
  const cursorTrailRef = useRef(null);
  const isHoveringRef = useRef(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorTrail = cursorTrailRef.current;

    if (!cursor || !cursorTrail) return;

    // Set initial position off-screen
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.set(cursorTrail, { xPercent: -50, yPercent: -50 });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      // Smooth cursor follow with GSAP
      gsap.to(cursor, {
        x: clientX,
        y: clientY,
        duration: 0.15,
        ease: 'power2.out',
      });

      // Trail follows with more delay for smooth effect
      gsap.to(cursorTrail, {
        x: clientX,
        y: clientY,
        duration: 0.4,
        ease: 'power2.out',
      });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-hover') ||
        target.closest('.cursor-hover')
      ) {
        if (!isHoveringRef.current) {
          isHoveringRef.current = true;
          
          // Animate to hover state
          gsap.to(cursor, {
            width: 40,
            height: 40,
            backgroundColor: 'transparent',
            borderWidth: 2,
            duration: 0.3,
            ease: 'power2.out',
          });

          gsap.to(cursorTrail, {
            opacity: 0,
            scale: 1.5,
            duration: 0.3,
            ease: 'power2.out',
          });
        }
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-hover') ||
        target.closest('.cursor-hover')
      ) {
        isHoveringRef.current = false;
        
        // Animate back to default state
        gsap.to(cursor, {
          width: 12,
          height: 12,
          backgroundColor: '#000000',
          borderWidth: 0,
          duration: 0.3,
          ease: 'power2.out',
        });

        gsap.to(cursorTrail, {
          opacity: 0.5,
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          width: 12,
          height: 12,
          backgroundColor: '#000000',
          borderStyle: 'solid',
          borderWidth: 0,
          borderColor: '#000000',
        }}
      />
      {/* Cursor trail/outer ring */}
      <div
        ref={cursorTrailRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-black/30"
        style={{
          width: 40,
          height: 40,
          opacity: 0.5,
        }}
      />
    </>
  );
}

export default CustomCursor;
