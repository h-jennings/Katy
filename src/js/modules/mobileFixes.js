// * This allows for mobile safari and other touch devices to react to touch inputs
// "The touchstart event is fired when one or more touch points are placed on the touch surface."
export const mobileLinkFix = document.addEventListener('touchstart', () => {}, true);


// * Viewport height unit (vh) mobile fix

export const calcMobileVh = (function calcMobileVh() {
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  const vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}());
