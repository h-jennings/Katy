import ScrollToPlugin from 'gsap/umd/ScrollToPlugin';
import { TimelineLite, TweenLite } from 'gsap';

class ScrollToLink {
  constructor(el) {
    this.DOM = { el };
    this.initEvents();
  }

  initEvents() {
    this.clickFn = () => {
      this.scrollToLinkLocation();
    };


    this.DOM.el.addEventListener('click', this.clickFn);
  }

  scrollToLinkLocation() {
    this.tl = new TimelineLite()
      .add(new TweenLite(window, 2, {
        scrollTo: '#experiences',
      }));
  }
}


const experiencesLink = document.querySelector('#scroll-indicator-link--experiences');
const scrollToExperiences = new ScrollToLink(experiencesLink);
