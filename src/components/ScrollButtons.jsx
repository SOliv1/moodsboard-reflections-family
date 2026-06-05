function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToBottom() {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });
}

function ScrollButtons() {
  return (
    <div className="scroll-buttons" aria-label="Page scroll controls">
      <button type="button" className="scroll-button" onClick={scrollToTop} aria-label="Scroll to top">
        ↑
      </button>
      <button type="button" className="scroll-button" onClick={scrollToBottom} aria-label="Scroll to bottom">
        ↓
      </button>
    </div>
  );
}

export default ScrollButtons;
