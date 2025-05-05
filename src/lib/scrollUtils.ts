/**
 * Smoothly scrolls to the specified element ID without changing the URL
 */
export const scrollToSection = (elementId: string): void => {
  const element = document.getElementById(elementId);
  if (element) {
    // Scroll to the element
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};
