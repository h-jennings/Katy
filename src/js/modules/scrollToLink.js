/* global TweenLite TimelineLite */

/*

* How this bad-boy works:
* In the app.js file I'm instantiating new ScrollToLink Objects
* with 2 parameters (element, location).
* Then this is read by the ScrollToLink object and allows for the DOM element
* to be associated with and a link location.

*/

export default class ScrollToLink {
  constructor(el, location) {
    this.DOM = { el };
    this.location = location;
    this.initEvents();
  }

  initEvents() {
    this.clickFn = () => {
      this.scrollToLinkLocation();
    };


    this.DOM.el.addEventListener('click', this.clickFn);
  }


  // TODO: Need to adjust timing and easing for this animation

  scrollToLinkLocation() {
    this.tl = new TimelineLite()
      .add(new TweenLite(window, 0.5, {
        scrollTo: `${this.location}`, // ! this is where the magic happens.
      }));
  }
}
