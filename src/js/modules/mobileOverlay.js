/* global TweenLite TimelineLite */

import { Power3 } from 'gsap/EasePack';
import { TweenLite } from 'gsap/TweenMax';
import { TimelineLite } from 'gsap';


export default class MobileOverlay {
  constructor(el) {
    this.DOM = { el };
    this.overlayBtn = document.querySelector('.mobile--navigation-button');
    this.mainWrapper = document.querySelector('.wrapper');
    this.overlayLinks = document.querySelectorAll('.mobile--navigation-overlay--container button');
    this.isOverlayHidden = true;
    this.initEvents();
  }

  initEvents() {
    this.clickFn = () => {
      if (this.isOverlayHidden) {
        this.showOverlay();
      } else {
        this.hideOverlay();
      }
    };

    this.linkClickFn = (e) => {
      this.linkHideOverlay(e);
    };


    this.overlayBtn.addEventListener('click', this.clickFn);
    this.overlayLinks.forEach(overlayLink => overlayLink.addEventListener('click', this.linkClickFn));
  }

  showOverlay() {
    this.toggleOverlay('show');
  }


  hideOverlay() {
    this.toggleOverlay('hide');
  }

  linkHideOverlay(e) {
    this.toggleOverlay('hide');
    // ! Need to add scroll to functionality here
    // ! Already have the logic to get the link to work properly with the scrollTo property
    const section = e.target;
    // console.log(section.dataset.section);

    this.overlayLinksTl = new TimelineLite();

    this.overlayTl
      .to(window, 0.5, {
        scrollTo: `#${section.dataset.section}`,
      });
  }


  toggleOverlay(action) {
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
      const overlayLinksReversed = [...this.overlayLinks].reverse();

      this.overlayTl
        .set(this.overlayBtn, {
          className: '-=close',
        })
        .staggerTo(overlayLinksReversed, 0.2, {
          opacity: 0,
        }, 0.05)
        .to(this.mainWrapper, 0.4, {
          overflow: '',
        }, '-=0.4')
        .to(document.body, 0.4, {
          overflow: '',
        }, '-=0.4')
        .to(this.DOM.el, 0.4, {
          display: 'none',
        }, '-=0.4');


      this.isOverlayHidden = true;
    }
  }
}
