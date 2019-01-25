/* eslint-disable import/no-cycle */

import ScrollToPlugin from 'gsap/ScrollToPlugin';
import TweenMax from 'gsap/TweenMax';
import scrollmagic from 'scrollmagic';
import ScrollToLink from './modules/scrollToLink';

// Scroll Indicator Links (Desktop) and corresponding scroll to locations

const scrollIndicatorLinks = {
  homeLink: {
    DOMElement: document.querySelector('#scroll-indicator-link--home'),
    scrollToSection: '#home',
  },
  experiencesLink: {
    DOMElement: document.querySelector('#scroll-indicator-link--experiences'),
    scrollToSection: '#experiences',
  },
  certificationsLink: {
    DOMElement: document.querySelector('#scroll-indicator-link--certifications'),
    scrollToSection: '#certifications',
  },
  contactLink: {
    DOMElement: document.querySelector('#scroll-indicator-link--contact'),
    scrollToSection: '#contact',
  },
};


// Instantiating Desktop Scroll indicator links
const scrollToHome = new ScrollToLink(scrollIndicatorLinks.homeLink.DOMElement, scrollIndicatorLinks.homeLink.scrollToSection);
const scrollToExperiences = new ScrollToLink(scrollIndicatorLinks.experiencesLink.DOMElement, scrollIndicatorLinks.experiencesLink.scrollToSection);
const scrollToCertifications = new ScrollToLink(scrollIndicatorLinks.certificationsLink.DOMElement, scrollIndicatorLinks.certificationsLink.scrollToSection);
const scrollToContact = new ScrollToLink(scrollIndicatorLinks.contactLink.DOMElement, scrollIndicatorLinks.contactLink.scrollToSection);
