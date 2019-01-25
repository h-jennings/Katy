/* global TweenLite TimelineLite */
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

export default class ScrollIndicator {
  constructor(el, triggerContainer) {
    this.DOM = { el };
    this.triggerContainer = triggerContainer;
    this.animateScrollIndicator();
  }


  animateScrollIndicator() {
    const animateScrollIndicatorController = new ScrollMagic.Controller({
      addIndicators: true,
      globalSceneOptions: {
        duration: '100%',
      },
    });
    const scrollIndicatorSceneExperiences = new ScrollMagic.Scene({
      triggerElement: this.triggerContainer,
      triggerHook: 0.8,
    })
      .setClassToggle(this.DOM.el, 'is-visible')
      .addTo(animateScrollIndicatorController);
  }
}
