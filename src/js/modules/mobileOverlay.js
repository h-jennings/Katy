import { Power3 } from 'gsap/EasePack';
import { TweenLite } from 'gsap/TweenMax';
import { TimelineLite } from 'gsap';

/* global TweenLite TimelineLite */

export default class MobileOverlay {
  constructor(el) {
    this.DOM = { el };
    this.overlayBtn = document.querySelector('.mobile--navigation-button');
    this.mainWrapper = document.querySelector('.wrapper');
    this.overlayLinks = document.querySelectorAll('.mobile--navigation-overlay--container a');
    this.isOverlayHidden = true;
    this.initEvents();
  }

  initEvents() {
    this.clickFn = () => {
      // debugger;
      if (this.isOverlayHidden) {
        this.showOverlay();
      } else {
        this.hideOverlay();
      }
    };


    this.overlayBtn.addEventListener('click', this.clickFn);
  }

  showOverlay() {
    this.toggleOverlay('show');
  }


  hideOverlay() {
    this.toggleOverlay('hide');
  }


  toggleOverlay(action) {
    // debugger;
    TweenLite.defaultEase = Power3.easeInOut;


    this.overlayTl = new TimelineLite();

    if (action === 'show') {
      this.overlayTl
        .set(this.overlayBtn, {
          className: '+=close',
        })
        .to(this.DOM.el, 0.4, {
          opacity: 1,
        })
        .to(this.DOM.el, 0.4, {
          display: 'flex',
        }, '-=0.4')
        .staggerTo(this.overlayLinks, 0.2, {
          opacity: 1,
        }, 0.05)
        .to(document.body, 0.4, {
          overflow: 'hidden',
        })
        .to(this.mainWrapper, 0.4, {
          overflow: 'hidden',
        }, '-=0.4');
      this.isOverlayHidden = false;
    }

    if (action === 'hide') {
      this.overlayTl
        .set(this.overlayBtn, {
          className: '-=close',
        })
        .staggerTo(this.overlayLinks, 0.2, {
          opacity: 0,
        }, 0.05)
        .to(this.mainWrapper, 0.4, {
          overflow: 'scroll',
        }, '-=0.4')
        .to(document.body, 0.4, {
          overflow: '',
        }, '-=0.4')
        .to(this.DOM.el, 0.4, {
          display: 'none',
        }, '-=0.4');


      this.isOverlayHidden = true;
      // this.overlayBtn.classList.remove('close');
    }
  }
}
