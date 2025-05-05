/**
 * Smoothly scrolls to the specified element ID and updates URL without # symbol
 */
export const scrollToSection = (elementId: string): void => {
  const element = document.getElementById(elementId);
  if (element) {
    // Scroll to the element
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    // Update URL without # symbol and without triggering a page reload
    window.history.pushState({}, '', `/${elementId}`);
  }
};
