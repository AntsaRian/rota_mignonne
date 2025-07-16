// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animation hello
window.addEventListener("load", () => {
  gsap.set(".salutation", { y: 0 });
  gsap.set(".salutation_p, .bold_pink", {y: 0, x: 0}); 

  gsap.fromTo(".salutation",
    { y: 0 },
    { y: -100, duration: 2, ease: "back.out(3.2)" }
  );

  gsap.fromTo(".salutation_p, .bold_pink" ,
    { y: 0 },
    { y: -110, duration: 2, ease: "back.out(3.2)" }
  );
});

// Animation nav-bar
window.addEventListener("load", () => {
    gsap.set(".nav_principal a", { y: 0});

    gsap.fromTo(".nav_principal a", 
        { y: -50 },
        { y: 0, duration: 2, ease: "elastic.out", stagger: 0.1 }
    );
});

// Animation au scroll pour .gallery_left
gsap.fromTo(".gallery_left h1", 
    {
    y: 30,
    opacity: 0
    },
    {
    scrollTrigger: {
        trigger: ".gallery_left h1",
        start: "top bottom",
        end: "bottom top",
        toggleActions: "play none none reverse"
    },
    y: 10,
    opacity: 1,
    duration: 1.2,
    ease: "back.inOut",
    trigger: 0.1
});

// Animation pour le wrapper (pas l'image directement)
gsap.fromTo(".gallery_img_wrapper",
  {
    x: -80,
    opacity: 0
  },
  {
    x: 0,
    opacity: 1,
    duration: 1.5,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".gallery_left",
      start: "top 80%",
      toggleActions: "restart none none none"
    }
  }
);

// Animation au scroll pour .gallery_right
gsap.from(".gallery_right p", {
  scrollTrigger: {
    trigger: ".gallery_right",
    start: "top 80%",
    toggleActions: "restart none none none"
  },
  x: 100,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
  stagger: 0.1
});

// Animation list_images1_h1
gsap.fromTo(".list_images1_h1", 
    {   x: -320, opacity: 0 },
    {
        x: 0, 
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".list_images1_h1",
            start :"top 90%",
            toggleActions: "play none none reverse"
        }
    }
);

// Animation parallax pour les images de la galerie
gsap.utils.toArray(".list_images_img").forEach((imgWrapper, i) => {
  const image = imgWrapper.querySelector("img");

  // Animation d'entrée (fade + slide + rotation)
  gsap.from(imgWrapper, {
    duration: 1.5,
    y: 100,
    opacity: 0,
    rotation: 5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: imgWrapper,
      start: "top 90%",
      toggleActions: "play none none reverse"
    }
  });

  // Effet parallax sur l'image
  gsap.to(image, {
    yPercent: -20,
    ease: "none",
    scrollTrigger: {
      trigger: imgWrapper,
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });

  // Hover avec GSAP pour éviter les conflits de transform
  image.addEventListener("mouseenter", () => {
    gsap.to(image, {
      scale: 1.1,
      duration: 0.1,
      ease: "power3.out"
    });
  });

  image.addEventListener("mouseleave", () => {
    gsap.to(image, {
      scale: 1.0,
      duration: 0.1,
      ease: "power2.out"
    });
  });
});

// perseverante
gsap.fromTo(".desc_img_p1_1", 
    { x: 900, skewX: -50 },
    { 
        x: 30,
        skewX: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
            start: "top 80%",
            trigger: ".desc_img_p1_1",
            toggleActions: "play none none reverse"
        } 
    }
);

gsap.fromTo(".desc_img_p1_content", 
    { x: 800 },
    { 
        x: 30,
        duration: 1.3,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
            start: "top 85%",
            trigger: ".desc_img_p1_content",
            toggleActions: "play none none reverse"
        }
    }
);

gsap.fromTo("#desc_img_p1_1_2", 
    { x: 900, skewX: -50 },
    { 
        x: 30,
        skewX: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
            start: "top 90%",
            trigger: "#desc_img_p1_1_2",
            toggleActions: "play none none reverse"
        } 
    }
);

gsap.fromTo(".desc_img_img1", 
    { scale: 0.8 },
    { 
        scale: 1.2,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            trigger: ".desc_img_img1",
            toggleActions: "play none none reverse"
        } 
    }
);

// intellignete
gsap.fromTo(".desc_img_img2", 
    { scale: 0.8 },
    { 
        scale: 1.1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            trigger: ".desc_img_img2",
            toggleActions: "play none none reverse"
        } 
    }
);

gsap.fromTo(".desc_img2_p1_1", 
    { x: -900, skewX: -50 },
    { 
        x: 0,
        skewX: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
            start: "top 80%",
            trigger: ".desc_img2_p1_1",
            toggleActions: "play none none reverse"
        } 
    }
);

gsap.fromTo(".desc_img2_p1_content", 
    { x: -800 },
    { 
        x: 0,
        duration: 1.3,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
            start: "top 85%",
            trigger: ".desc_img2_p1_content",
            toggleActions: "play none none reverse"
        }
    }
);

gsap.fromTo("#desc_img2_p1_1", 
    { x: -900, skewX: -50 },
    { 
        x: 0,
        skewX: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
            start: "top 90%",
            trigger: "#desc_img2_p1_1",
            toggleActions: "play none none reverse"
        } 
    }
);

// private
gsap.to(".private_img1", {
  y: -5,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

gsap.to(".private_img2", {
  y: -5,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

// rose bleue
gsap.fromTo(".private_content_p1", 
    { y: -100, opacity: 0 },
    { 
        y: 0,
        opacity: 1,
        duration: 1.3,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
            start: "top 55%",
            trigger: ".private_content_p1",
            toggleActions: "play none none reverse"
        }
    }
);

gsap.fromTo(".private_content_p", 
    { x: -800, opacity: 0 },
    { 
        x: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1.3,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
            start: "top 55%",
            trigger: ".private_content_p",
            toggleActions: "play none none reverse"
        }
    }
);

// fille séduisante
gsap.fromTo(".private_content2_p1", 
    { y: -100, opacity: 0 },
    { 
        y: 0,
        opacity: 1,
        duration: 1.3,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
            start: "top 55%",
            trigger: ".private_content2_p1",
            toggleActions: "play none none reverse"
        }
    }
);

gsap.fromTo(".private_content2_p", 
    { x: 800, opacity: 0 },
    { 
        x: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1.3,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
            start: "top 55%",
            trigger: ".private_content2_p",
            toggleActions: "play none none reverse"
        }
    }
);

// best memories
gsap.fromTo(".private_content_img_img_p", 
    { y: -100, opacity: 0 },
    { 
        y: 160,
        opacity: 1,
        duration: 1.3,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
            start: "top 70%",
            trigger: ".private_content_img_img_p",
            toggleActions: "play none none reverse"
        }
    }
);

gsap.fromTo(".private_content_img_img1", 
    { x: -100, opacity: 0, skewX: 30 },
    { 
        x: 0,
        skewX: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1.5,
        ease: "elastic.inOut",
        scrollTrigger: {
            start: "top 80%",
            trigger: ".private_content_img_img1",
            toggleActions: "play none none reverse"
        }
    }
);

gsap.fromTo(".private_content_img_img2", 
    { y: 300, opacity: 0 },
    { 
        y: 120,
        opacity: 1,
        duration: 1.3,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
            start: "top 80%",
            trigger: ".private_content_img_img2",
            toggleActions: "play none none reverse"
        }
    }
);

gsap.fromTo(".private_content_img_img3", 
    { x: 100, opacity: 0, skewX: -30 },
    { 
        x: 0,
        skewX: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1.5,
        ease: "elastic.inOut",
        scrollTrigger: {
            start: "top 80%",
            trigger: ".private_content_img_img3",
            toggleActions: "play none none reverse"
        }
    }
);

// footer
gsap.fromTo("footer h3", 
    { y: -300, opacity: 0 },
    { 
        y: 0,
        opacity: 1,
        duration: 1.3,
        ease: "power2.out",
        scrollTrigger: {
            start: "top 80%",
            trigger: ".footer_email h3",
            toggleActions: "play none none reverse"
        }
    }
);

gsap.fromTo("footer p", 
    { y: -300, opacity: 0 },
    { 
        y: 0,
        opacity: 1,
        duration: 1.1,
        ease: "back.out",
        scrollTrigger: {
            start: "top 80%",
            trigger: ".footer_email h3",
            toggleActions: "play none none reverse"
        }
    }
);

gsap.fromTo(".social_media a", 
    { opacity: 0, scale: 0.5 },
    { 
        opacity: 1,
        scale: 1.1,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: {
            start: "top 80%",
            trigger: ".social_media",
            toggleActions: "play none none reverse"
        }
    }
);