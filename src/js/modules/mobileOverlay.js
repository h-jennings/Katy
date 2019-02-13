import { Power3 } from 'gsap/EasePack';
import { TweenLite } from 'gsap/TweenMax';

/* global TweenLite TimelineLite */

export default class MobileOverlay {
  constructor(el) {
    this.DOM = { el };
    this.overlayBtn = document.querySelector('.mobile--navigation-button');
    this.mainWrapper = document.querySelector('.wrapper');
    this.overlayLinks = document.querySelectorAll('.mobile--navigation-overlay--container a');
    this.initEvents();
  }

  initEvents() {
    this.clickFn = () => {
      this.animateOverlay();
      this.animateOverlayBtn();
      this.animateOverlayLinks();
    };


    this.overlayBtn.addEventListener('click', this.clickFn);
  }


  // TODO: Need to adjust timing and easing for this animation

  animateOverlay() {
    TweenLite.defaultEase = Power3.easeInOut;

    this.overlayTl = new TimelineLite();

    this.overlayTl
      .to(this.DOM.el, 0.4, {
        opacity: 1,
      })
      .to(this.DOM.el, 0.4, {
        display: 'flex',
      }, '-=0.4')
      .to(document.body, 0.4, {
        overflow: 'hidden',
      })
      .to(this.mainWrapper, 0.4, {
        overflow: 'hidden',
      }, '-=0.4');
  }

  animateOverlayBtn() {
    this.overlayBtn.classList.toggle('close');
  }

  animateOverlayLinks() {
    TweenLite.defaultEase = Power3.easeInOut;

    this.overlayLinksTl = new TimelineLite();

    this.overlayLinksTl.staggerTo(this.overlayLinks, 0.3, {
      opacity: 1,
      y: -100,
    }, 0.05);
  }
}
