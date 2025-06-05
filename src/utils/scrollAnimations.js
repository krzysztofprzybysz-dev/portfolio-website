// Obsługa animacji przewijania w stylu vaporwave
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.scroll-animate');

  // Funkcja sprawdzająca czy element jest widoczny w oknie przeglądarki
  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    // Element jest widoczny, gdy jego górna krawędź jest poniżej górnej krawędzi okna
    // i dolna krawędź jest powyżej dolnej krawędzi okna
    const topVisible = rect.top <= windowHeight * 0.75;
    const bottomVisible = rect.bottom >= 0;

    return topVisible && bottomVisible;
  };

  // Funkcja aktualizująca animacje na podstawie scrollowania
  const handleScroll = () => {
    animatedElements.forEach((el) => {
      if (isElementInViewport(el) && !el.classList.contains('animated')) {
        // Dodajemy odpowiednią klasę animacji
        if (el.classList.contains('animate-up')) {
          el.classList.add('fade-in-up');
        } else if (el.classList.contains('animate-left')) {
          el.classList.add('fade-in-left');
        } else if (el.classList.contains('animate-right')) {
          el.classList.add('fade-in-right');
        }

        // Dodajemy klasę oznaczającą, że element został już zanimowany
        el.classList.add('animated');
      }
    });

    // Aktywujemy efekt neonowy dla sekcji w viewport
    const sections = document.querySelectorAll('.vaporwave-section');
    sections.forEach((section) => {
      if (isElementInViewport(section)) {
        section.classList.add('active-section');
      } else {
        section.classList.remove('active-section');
      }
    });
  };

  // Nasłuchiwanie zdarzenia scroll
  window.addEventListener('scroll', handleScroll);

  // Wywołanie handleScroll na początku, aby sprawdzić elementy już widoczne
  handleScroll();
});

