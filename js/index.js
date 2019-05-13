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

// Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])

///////////////////       HEADER         ///////
const navLinks = document.querySelectorAll('header nav a');
const siteNavItems = Object.values(siteContent["nav"]);
const logoImg = document.querySelector('#logo-img');
logoImg.src = siteNavItems[siteNavItems.length - 1];

navLinks.forEach((el, index) =>  el.textContent = siteNavItems[index]);

////////////////////         SECTION         //////
const ctaIntro = document.querySelector('.cta-text h1');
ctaIntro.innerHTML = "DOM <br> Is <br> Awesome";
const ctaBtn = document.querySelector('.cta button');
ctaBtn.textContent = "Get Started";
const codeSnippet = document.querySelector('#cta-img');
codeSnippet.src = siteContent.cta["img-src"];

//////////////////////      Main Content //////////
const mainTopText = document.querySelectorAll('.top-content .text-content h4');
const paraTopText = document.querySelectorAll('.top-content .text-content p');
mainTopText[0].textContent = siteContent["main-content"]["features-h4"];
mainTopText[1].textContent = siteContent["main-content"]["about-h4"];
paraTopText[0].textContent = siteContent["main-content"]["features-content"];
paraTopText[1].textContent = siteContent["main-content"]["about-content"];

const middleImg = document.querySelector('.middle-img');
middleImg.src = siteContent["main-content"]["middle-img-src"];

const bottomTextTop = document.querySelectorAll('.bottom-content .text-content h4');
const paraBottomText = document.querySelectorAll('.bottom-content .textcontent p');
bottomTextTop[0].textContent = siteContent["main-content"]["services-h4"];
bottomTextTop[1].textContent = siteContent["main-content"]["product-h4"];
bottomTextTop[2].textContent = siteContent["main-content"]["vision-h4"];

paraBottomText[0].textContent = siteContent["main-content"]["services-content"];
paraBottomText[1].textContent = siteContent["main-content"]["product-content"];
paraBottomText[2].textContent = siteContent["main-content"]["vision-content"];