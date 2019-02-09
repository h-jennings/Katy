/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */

import ScrollToPlugin from 'gsap/ScrollToPlugin';
import TweenMax from 'gsap/TweenMax';
import ScrollToLink from './modules/scrollToLink';
import ScrollIndicator from './modules/scrollIndicator';

// Scroll Indicator Links (Desktop) and corresponding scroll to locations

const scrollIndicatorLinks = {
  homeLink: {
    DOMElement: document.querySelector('#scroll-indicator-link--home'),
    scrollToSection: '#home',
    triggerContainer: document.querySelector('#home'),
  },
  experiencesLink: {
    DOMElement: document.querySelector('#scroll-indicator-link--experiences'),
    scrollToSection: '#experiences',
    triggerContainer: document.querySelector('#experiences'),
  },
  certificationsLink: {
    DOMElement: document.querySelector('#scroll-indicator-link--certifications'),
    scrollToSection: '#certifications',
    triggerContainer: document.querySelector('#certifications'),
  },
  contactLink: {
    DOMElement: document.querySelector('#scroll-indicator-link--contact'),
    scrollToSection: '#contact',
    triggerContainer: document.querySelector('#contact'),
  },
};

const topNavigationLinks = {
  homeLink: {
    DOMElement: document.querySelector('.name--container'),
    scrollToSection: '#home',
  },
  experiencesLink: {
    DOMElement: document.querySelector('.nav--links--container a.experiences'),
    scrollToSection: '#experiences',
  },
  certificationsLink: {
    DOMElement: document.querySelector('.nav--links--container a.certifications'),
    scrollToSection: '#certifications',
  },
  contactLink: {
    DOMElement: document.querySelector('.nav--links--container a.contact'),
    scrollToSection: '#contact',
  },
};

const arrowBtn = {
  arrowButton: {
    DOMElement: document.querySelector('.arrow--button'),
    scrollToSection: '#experiences',
  },
};

const mobileScrollIndicator = {
  mobileHomeIndicator: {
    DOMElement: document.querySelector('.mobile--navigation-bar--container.home'),
    scrollToSection: '#home',
    triggerContainer: document.querySelector('#home'),
  },
  mobileExperiencesIndicator: {
    DOMElement: document.querySelector('.mobile--navigation-bar--container.experiences'),
    scrollToSection: '#experiences',
    triggerContainer: document.querySelector('#experiences'),
  },
  mobileCertificationsIndicator: {
    DOMElement: document.querySelector('.mobile--navigation-bar--container.certifications'),
    scrollToSection: '#certifications',
    triggerContainer: document.querySelector('#certifications'),
  },
  mobileContactIndicator: {
    DOMElement: document.querySelector('.mobile--navigation-bar--container.contact'),
    scrollToSection: '#contact',
    triggerContainer: document.querySelector('#contact'),
  },
};

// * Instantiating Desktop Scroll indicator links (ScrollTo)
const scrollToHome = new ScrollToLink(scrollIndicatorLinks.homeLink.DOMElement, scrollIndicatorLinks.homeLink.scrollToSection);
const scrollToExperiences = new ScrollToLink(scrollIndicatorLinks.experiencesLink.DOMElement, scrollIndicatorLinks.experiencesLink.scrollToSection);
const scrollToCertifications = new ScrollToLink(scrollIndicatorLinks.certificationsLink.DOMElement, scrollIndicatorLinks.certificationsLink.scrollToSection);
const scrollToContact = new ScrollToLink(scrollIndicatorLinks.contactLink.DOMElement, scrollIndicatorLinks.contactLink.scrollToSection);
const scrollToArrowBtn = new ScrollToLink(arrowBtn.arrowButton.DOMElement, arrowBtn.arrowButton.scrollToSection);

// * Instantiating Desktop Top Navigation links (ScrollTo)
const topScrollToHome = new ScrollToLink(topNavigationLinks.homeLink.DOMElement, topNavigationLinks.homeLink.scrollToSection);
const topScrollToExperiences = new ScrollToLink(topNavigationLinks.experiencesLink.DOMElement, topNavigationLinks.experiencesLink.scrollToSection);
const topScrollToCertifications = new ScrollToLink(topNavigationLinks.certificationsLink.DOMElement, topNavigationLinks.certificationsLink.scrollToSection);
const topScrollToContact = new ScrollToLink(topNavigationLinks.contactLink.DOMElement, topNavigationLinks.contactLink.scrollToSection);


// * Instantiating Desktop Scroll indicator links (ScrollIndicator)
const desktopScrollIndicatorHome = new ScrollIndicator(scrollIndicatorLinks.homeLink.DOMElement, scrollIndicatorLinks.homeLink.triggerContainer);
const desktopScrollIndicatorExperiences = new ScrollIndicator(scrollIndicatorLinks.experiencesLink.DOMElement, scrollIndicatorLinks.experiencesLink.triggerContainer);
const desktopScrollIndicatorCertifications = new ScrollIndicator(scrollIndicatorLinks.certificationsLink.DOMElement, scrollIndicatorLinks.certificationsLink.triggerContainer);
const desktopScrollIndicatorContact = new ScrollIndicator(scrollIndicatorLinks.contactLink.DOMElement, scrollIndicatorLinks.contactLink.triggerContainer);

// * Instantiating Mobile Scroll indicator links (ScrollIndicator)
const mobileScrollIndicatorHome = new ScrollIndicator(mobileScrollIndicator.mobileHomeIndicator.DOMElement, mobileScrollIndicator.mobileHomeIndicator.triggerContainer);
const mobileScrollIndicatorExperiences = new ScrollIndicator(mobileScrollIndicator.mobileExperiencesIndicator.DOMElement, mobileScrollIndicator.mobileExperiencesIndicator.triggerContainer);
const mobileScrollIndicatorCertifications = new ScrollIndicator(mobileScrollIndicator.mobileCertificationsIndicator.DOMElement, mobileScrollIndicator.mobileCertificationsIndicator.triggerContainer);
const mobileScrollIndicatorContact = new ScrollIndicator(mobileScrollIndicator.mobileContactIndicator.DOMElement, mobileScrollIndicator.mobileContactIndicator.triggerContainer);
