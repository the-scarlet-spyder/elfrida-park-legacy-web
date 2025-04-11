
// This file will be used to implement the scroll animations
// in a future update if needed. For now, we are using the reveal
// class and MainLayout component to handle animations.

export const initScrollAnimations = () => {
  const handleScroll = () => {
    const reveals = document.querySelectorAll('.reveal');
    
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const revealTop = reveals[i].getBoundingClientRect().top;
      const revealPoint = 150;
      
      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add('active');
      }
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Check on initial load
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};
