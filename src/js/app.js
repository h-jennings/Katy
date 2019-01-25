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


// Instantiating Desktop Scroll indicator links (ScrollTo)
const scrollToHome = new ScrollToLink(scrollIndicatorLinks.homeLink.DOMElement, scrollIndicatorLinks.homeLink.scrollToSection);
const scrollToExperiences = new ScrollToLink(scrollIndicatorLinks.experiencesLink.DOMElement, scrollIndicatorLinks.experiencesLink.scrollToSection);
const scrollToCertifications = new ScrollToLink(scrollIndicatorLinks.certificationsLink.DOMElement, scrollIndicatorLinks.certificationsLink.scrollToSection);
const scrollToContact = new ScrollToLink(scrollIndicatorLinks.contactLink.DOMElement, scrollIndicatorLinks.contactLink.scrollToSection);

// Instantiating Desktop Scroll indicator links (ScrollIndicator)
const desktopScrollIndicatorHome = new ScrollIndicator(scrollIndicatorLinks.homeLink.DOMElement, scrollIndicatorLinks.homeLink.triggerContainer);
const desktopScrollIndicatorExperiences = new ScrollIndicator(scrollIndicatorLinks.experiencesLink.DOMElement, scrollIndicatorLinks.experiencesLink.triggerContainer);
const desktopScrollIndicatorCertifications = new ScrollIndicator(scrollIndicatorLinks.certificationsLink.DOMElement, scrollIndicatorLinks.certificationsLink.triggerContainer);
