/* global TweenLite TimelineLite */

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
      addIndicators: false,
    });
    const scrollIndicatorSceneExperiences = new ScrollMagic.Scene({
      triggerElement: this.triggerContainer,
      duration: `${this.containerHeight}`,
      triggerHook: 0.8,
    })
      .setClassToggle(this.DOM.el, 'is-visible')
      .addTo(animateScrollIndicatorController);
  }
}
