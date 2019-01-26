/* global TweenLite TimelineLite */

/*

TODO: NEED TO ADD SCROLL INDICATORS FOR MOBILE

* Looks like the scroll magic containers are already responsive

*/

import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

export default class ScrollIndicator {
  constructor(el, triggerContainer) {
    this.DOM = { el };
    this.triggerContainer = triggerContainer;
    this.containerHeight = this.triggerContainer.offsetHeight;
    this.animateScrollIndicator();
  }


  animateScrollIndicator() {
    const animateScrollIndicatorController = new ScrollMagic.Controller({
      addIndicators: true,
    });
    const scrollIndicatorSceneExperiences = new ScrollMagic.Scene({
      triggerElement: this.triggerContainer,
      duration: `${this.containerHeight}`,
    })
      .setClassToggle(this.DOM.el, 'is-visible')
      .addTo(animateScrollIndicatorController);
  }
}
