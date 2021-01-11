const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// NAV IMAGE

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);



//  NAV
const navBar = document.querySelectorAll('nav a');
navBar[0].textContent = 'Services';
navBar[1].textContent = 'Product';
navBar[2].textContent = 'Vision';
navBar[3].textContent = 'Features';
navBar[4].textContent = 'About';
navBar[5].textContent = 'Contact';

//  TOP SECTION
const topSection = document.querySelector('.cta');

const topSectionh1 = topSection.querySelector('h1');
topSectionh1.textContent = 'dom is awesome';

const topSectionImg = topSection.querySelector('img');
topSectionImg.setAttribute('src', 'img/header-img.png');

const topSectionBtn = topSection.querySelector('button');
topSectionBtn.textContent = 'Get Started';


// MIDDLE SECTION

const topContent = document.querySelector('.top-content');
const textContent = topContent.querySelectorAll('.text-content');

const textContentFeatures = textContent[0].querySelector('h4');
textContentFeatures.textContent = 'Features';

const textContentFeatP = textContent[0].querySelector('p');
textContentFeatP.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const textContentAbout = textContent[1].querySelector('h4');
textContentAbout.textContent = 'About';

const textContentAboutP = textContent[1].querySelector('p');
textContentAboutP.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const middleImg = document.querySelector('.middle-img');
middleImg.setAttribute('src','img/mid-page-accent.jpg')

//bottom of pic

const bbox = document.querySelector('.bottom-content');
const bContent = bbox.querySelectorAll('.text-content');

const servh4 = bContent[0].querySelector('h4');
servh4.textContent = 'Services';
const servp = bContent[0].querySelector('p');
servp.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const prodh4 = bContent[1].querySelector('h4');
prodh4.textContent = 'Product';
const prodp = bContent[1].querySelector('p');
prodp.textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const visionh4 = bContent[2].querySelector('h4');
visionh4.textContent = 'Vision';
const visionp = bContent[2].querySelector('p');
visionp.textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

//contact 

const contactSec = document.querySelector('.contact');
const contacth4 = contactSec.querySelector('h4');
contacth4.textContent = 'Contact';
const contactP = contactSec.querySelectorAll('p');
contactP[0].textContent = '123 Way 456 Street Somewhere, USA';
contactP[1].textContent = '1 (888) 888-8888'
contactP[2].textContent = 'sales@greatidea.io'

//footer

const footerSec = document.querySelector('footer');
const footerp = footerSec.querySelector('p');
footerp.textContent = ' Copyright Great Idea! 2018';