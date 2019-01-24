import TweenLite from 'gsap/TweenLite';
import TimelineLite from 'gsap/TimelineLite';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import CSSPlugin from 'gsap/CSSPlugin';

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
    this.tl = new TimelineLite({
      onComplete: () => { console.log('complete'); },
    })
      .add(new TweenLite(window, 0.3, {
        scrollTo: '#experiences',
      }));
  }
}


const experiencesLink = document.querySelector('#scroll-indicator-link--experiences');
const scrollToExperiences = new ScrollToLink(experiencesLink);
