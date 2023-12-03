let homeLink = document.querySelector('.home-Link');
let portfolioLink = document.querySelector('.portfolio-link');
let skillLink = document.querySelector('.skill-link');
let timeLineLink = document.querySelector('.timeLine-link');
let newsLink = document.querySelector('.news-link');
let contact = document.querySelector('.contact-link');

homeLink.addEventListener('click', function(e){
    e.preventDefault();

    homeLink.classList.add('active');
    portfolioLink.classList.remove('active');
    skillLink.classList.remove('active');
    timeLineLink.classList.remove('active');
    newsLink.classList.remove('active');
    contact.classList.remove('active');

    const homeSection = document.getElementById('header');

    homeSection.scrollIntoView({
        behavior: "smooth",
    });

});


portfolioLink.addEventListener('click', function(e){
    e.preventDefault();

    homeLink.classList.remove('active');
    portfolioLink.classList.add('active');
    skillLink.classList.remove('active');
    timeLineLink.classList.remove('active');
    newsLink.classList.remove('active');
    contact.classList.remove('active');

    const portfolioSection = document.getElementById('portfolio');

    portfolioSection.scrollIntoView({
        behavior: "smooth",
    });
});

skillLink.addEventListener('click', function(e){
    e.preventDefault();

    homeLink.classList.remove('active');
    portfolioLink.classList.remove('active');
    skillLink.classList.add('active');
    timeLineLink.classList.remove('active');
    newsLink.classList.remove('active');
    contact.classList.remove('active');

    const SkillSection = document.getElementById('skillsss');

    SkillSection.scrollIntoView({
        behavior : "smooth",
    });
});

timeLineLink.addEventListener('click', function(e){
    e.preventDefault();

    homeLink.classList.remove('active');
    portfolioLink.classList.remove('active');
    skillLink.classList.remove('active');
    timeLineLink.classList.add('active');
    newsLink.classList.remove('active');
    contact.classList.remove('active');

    const timeLineSection = document.getElementById('timeline');

    timeLineSection.scrollIntoView({
        behavior: "smooth",
    });
});

newsLink.addEventListener('click', function(e){
    e.preventDefault();

    homeLink.classList.remove('active');
    portfolioLink.classList.remove('active');
    skillLink.classList.remove('active');
    timeLineLink.classList.remove('active');
    newsLink.classList.add('active');
    contact.classList.remove('active');

    const newsLinkSection = document.getElementById('news');

    newsLinkSection.scrollIntoView({
        behavior: "smooth",
    })
});

contact.addEventListener('click', function(e){
    e.preventDefault();

    homeLink.classList.remove('active');
    portfolioLink.classList.remove('active');
    skillLink.classList.remove('active');
    timeLineLink.classList.remove('active');
    newsLink.classList.remove('active');
    contact.classList.add('active');

    const contactLinkSection = document.getElementById('contact');
    
    contactLinkSection.scrollIntoView({
        behavior: "smooth",
    })
});
// based in indonesia