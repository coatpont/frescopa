(() => {
  // Constants and state
  const defaultOrigin = 'https://main--frescopa--coatpont.aem.page';

  // Helper functions
  async function loadStyles(origin) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `${origin}/blocks/bookmarklet/assistant.css`;
    document.head.appendChild(link);
  }

  async function checkAssistantAvailability(url) {
    try {
      const response = await fetch(`${url}/static/assistant.html`, {
        method: 'HEAD',
      });
      return response.ok;
    } catch {
      return false;
    }
  }

  function createIframe(src, className) {
    const iframe = document.createElement('iframe');
    iframe.src = src;
    iframe.className = className;
    return iframe;
  }

  function createAssistantIframe(url) {
    const iframe = createIframe(url, 'assistantIframe');
    iframe.onload = () => {
    };
    return iframe;
  }

  function createNewsIframe(url) {
    return createIframe(url, 'newsIframe');
  }


  function createHeader() {
    const header = document.createElement('div');
    header.className = 'header';

    const headerBar = document.createElement('div');
    headerBar.className = 'header-bar-container';

    const mover = document.createElement('div');
    mover.className = 'aemGenAIVariationsMover';
    headerBar.appendChild(mover);

    const titleContainer = document.createElement('div');
    titleContainer.className = 'header-title-container';
    const title = document.createElement('div');
    title.textContent = 'Experience AI Catalyst';

    const badge = document.createElement('span');
    const badgeLabel = document.createElement('span');
    badgeLabel.textContent = 'Beta';

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'header-img-container';
    const link = document.createElement('span');
    link.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 18 18" class="yxBNXG_spectrum-Icon yxBNXG_spectrum-Icon--sizeL" focusable="false" aria-hidden="true" role="img" style="width: 18px; height: 18px;"><mask id="mask0_2719_7360" width="18" height="18" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type: alpha;"><path fill="#292929" d="M6.103 17.1a.676.676 0 0 1-.675-.675v-2.924H4.275A3.38 3.38 0 0 1 .9 10.126v-4.95A3.38 3.38 0 0 1 4.275 1.8h9.45A3.38 3.38 0 0 1 17.1 5.176v4.95a3.38 3.38 0 0 1-3.375 3.375h-3.61L6.57 16.91a.67.67 0 0 1-.468.19M4.275 3.15A2.027 2.027 0 0 0 2.25 5.177v4.95c0 1.116.908 2.025 2.025 2.025h1.828c.373 0 .675.302.675.675v2.013l2.596-2.5a.67.67 0 0 1 .468-.188h3.883a2.027 2.027 0 0 0 2.025-2.025v-4.95a2.027 2.027 0 0 0-2.025-2.025z"></path><path fill="#292929" d="M11.025 9.45h-4.95a.675.675 0 0 1 0-1.35h4.95a.675.675 0 0 1 0 1.35M11.925 6.75h-5.85a.675.675 0 0 1 0-1.35h5.85a.675.675 0 0 1 0 1.35"></path></mask><g mask="url(#mask0_2719_7360)"><path fill="#222" d="M0 0h18v18H0z"></path></g></svg>';
    link.className = 'header-img-question';
    const close = document.createElement('span');
    close.innerHTML = '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="yxBNXG_spectrum-Icon yxBNXG_spectrum-Icon--sizeXXS" focusable="false" aria-hidden="true" role="img" style="width: 18px; height: 18px;"><g><path d="M9.95431 8.9998L14.6401 4.31436C14.9038 4.05069 14.9038 3.62354 14.6401 3.35986C14.3765 3.09619 13.9493 3.09619 13.6856 3.35986L8.99976 8.04531L4.31387 3.35986C4.0502 3.09619 3.62305 3.09619 3.35938 3.35986C3.0957 3.62354 3.0957 4.05069 3.35938 4.31436L8.04521 8.9998L3.35938 13.6852C3.0957 13.9489 3.0957 14.3761 3.35938 14.6397C3.49121 14.7716 3.66392 14.8375 3.83662 14.8375C4.00932 14.8375 4.18203 14.7716 4.31386 14.6397L8.99975 9.9543L13.6856 14.6397C13.8175 14.7716 13.9902 14.8375 14.1629 14.8375C14.3356 14.8375 14.5083 14.7716 14.6401 14.6397C14.9038 14.3761 14.9038 13.9489 14.6401 13.6852L9.95431 8.9998Z" fill="#292929"></path></g></svg>';
    close.className = 'header-img-close';
    const img = document.createElement('div');
    img.className = 'header-img';

    buttonContainer.appendChild(img);
    buttonContainer.appendChild(link);
    buttonContainer.appendChild(close);

    badge.appendChild(badgeLabel);
    titleContainer.appendChild(title);
    titleContainer.appendChild(badge);
    headerBar.appendChild(titleContainer);
    headerBar.appendChild(buttonContainer);
    header.appendChild(headerBar);

    return header;
  }

  const styles = {
    assistant: `.aemGenAIAssistant {
  position: fixed;
  top: 15px;
  bottom: 5px;
  right: 10px;
  left: calc(100vw - 440px - 10px - 2px);
  width: 440px;
  height: calc(100vh - 50px - 5px - 2px);
  border: 1px solid #E6E6E6;
  border-radius: 12px;
  z-index: 2147483647;
  background-color: #FFFFFF;
  overflow: hidden;
  resize: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.16);
}

.aemGenAIAssistant.collapsed {
  height: 50px;
}

.aemGenAIAssistant iframe {
  height: calc(100% - 40px);
  border: 0px none;
  width: 100%;
  margin: 0px;
  overflow: hidden;
}

.aemGenAIAssistant .header {
  padding: 0;
  height: 48px;
  width: 100%;
  background: #F5F5F5;
  border-bottom: 1px solid #E6E6E6;
  display: flex;
  align-items: center;
  font-family: adobe-clean, sans-serif;
  font-size: 14px;
  color: #2C2C2C;
}

.aemGenAIAssistant .header-bar-container {
  width: 100%;
  height: 49px;
  background-color: #fff;
  border-bottom: 1px solid #e6e6e6;
  padding: 8px 8px 8px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.newsIframe {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  border: none;
  margin: 0;
  padding: 0;
  z-index: 2147483646;
}

.aemGenAIAssistant .header-img {
    background-image: url("data:image/png;base64,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");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 32px;
    height: 32px;
    padding-right: 48px;
}

.aemGenAIAssistant .header-img-question {
    height: 32px;
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.aemGenAIAssistant .header-img-close {
    height: 32px;
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.aemGenAIAssistant .header-img-container {
    display: flex;
    align-items: center;
    justify-content: center;
}

.aemGenAIAssistant .header-title-container {
    display: flex;
    align-items: center;
    justify-self: flex-start;
    flex: 1;
    padding-left: 8px;
    line-height: 0;
}

.aemGenAIAssistant .header-title-container > div {
    font-weight: bold;
    font-size: 16px;
    padding-right: 8px;
}

.aemGenAIAssistant .header-title-container > span {
    font-size: 15px;
    padding-left: 11px;
    padding-right: 11px;
    padding-top: 5px;
    padding-bottom: 5px;
    color: white;
    background-color: rgb(109, 109, 109);
    border-radius: 5px;
    line-height: 1.5;
    width: fit-content;

}

.aemGenAIVariationsMover {
    width: 14px;
    height: 14px;
    cursor: grab;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10' fill='none'%3E%3Cpath d='M3.20005 9.50001C3.69711 9.50001 4.10005 9.09707 4.10005 8.60001C4.10005 8.10296 3.69711 7.70001 3.20005 7.70001C2.70299 7.70001 2.30005 8.10296 2.30005 8.60001C2.30005 9.09707 2.70299 9.50001 3.20005 9.50001Z' fill='%23909090'/%3E%3Cpath d='M3.20005 5.89998C3.69711 5.89998 4.10005 5.49703 4.10005 4.99998C4.10005 4.50292 3.69711 4.09998 3.20005 4.09998C2.70299 4.09998 2.30005 4.50292 2.30005 4.99998C2.30005 5.49703 2.70299 5.89998 3.20005 5.89998Z' fill='%23909090'/%3E%3Cpath d='M3.20005 2.3C3.69711 2.3 4.10005 1.89706 4.10005 1.4C4.10005 0.902944 3.69711 0.5 3.20005 0.5C2.70299 0.5 2.30005 0.902944 2.30005 1.4C2.30005 1.89706 2.70299 2.3 3.20005 2.3Z' fill='%23909090'/%3E%3Cpath d='M6.80002 9.50001C7.29708 9.50001 7.70002 9.09707 7.70002 8.60001C7.70002 8.10296 7.29708 7.70001 6.80002 7.70001C6.30297 7.70001 5.90002 8.10296 5.90002 8.60001C5.90002 9.09707 6.30297 9.50001 6.80002 9.50001Z' fill='%23909090'/%3E%3Cpath d='M6.80002 5.89998C7.29708 5.89998 7.70002 5.49703 7.70002 4.99998C7.70002 4.50292 7.29708 4.09998 6.80002 4.09998C6.30297 4.09998 5.90002 4.50292 5.90002 4.99998C5.90002 5.49703 6.30297 5.89998 6.80002 5.89998Z' fill='%23909090'/%3E%3Cpath d='M6.80002 2.3C7.29708 2.3 7.70002 1.89706 7.70002 1.4C7.70002 0.902944 7.29708 0.5 6.80002 0.5C6.30297 0.5 5.90002 0.902944 5.90002 1.4C5.90002 1.89706 6.30297 2.3 6.80002 2.3Z' fill='%23909090'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-color: transparent;
}`,
  };

  function createAssistantDOM(origin) {
    const container = document.createElement('div');
    container.className = 'aemGenAIAssistant';

    const header = createHeader();
    const overflow = document.createElement('div');
    overflow.style.overflow = 'hidden';

    // logic to load the correct assistant
    const isIframe = window.self !== window.top;
    const url = isIframe ? document.referrer : document.location.href;

    const assistantUrl = (url === 'https://destyled--frescopa--coatpont.aem.page/'
      || url === 'https://main--frescopa--coatpont.aem.page/')
      ? `${origin}/static/assistant-v3-step-02.html`
      : `${origin}/static/assistant-v3-step-01.html`;

    const iframe = createAssistantIframe(assistantUrl);

    const style = document.createElement('style');
    style.textContent = styles.assistant;

    container.appendChild(header);
    container.appendChild(overflow);
    container.appendChild(iframe);
    container.appendChild(style);

    const close = container.querySelector('.header-img-close');
    close.addEventListener('click', function(e) {
      container.classList.toggle('collapsed');
    });

    return { assistant: container };
  }

  async function renderAssistant(origin) {
    await loadStyles(origin);
    const { assistant } = createAssistantDOM(origin);
    document.body.appendChild(assistant);
  }

  // Main initialization
  if (window.location.origin.startsWith('http://localhost')) {
    const localOrigin = window.location.origin;
    checkAssistantAvailability(localOrigin).then((isAvailable) => {
      renderAssistant(isAvailable ? localOrigin : defaultOrigin);
    });
  } else {
    renderAssistant(defaultOrigin);
  }

  window.addEventListener('message', (event) => {
    // Verify origin in production
    if (event.data.type === 'reloadPage') {
      const currentIframe = document.querySelector('iframe[src*="assistant"]');
      const parentDoc = document;

      // Clear parent document body except current iframe
      Array.from(parentDoc.body.children).forEach((child) => {
        if (!child.contains(currentIframe)) {
          child.remove();
        }
      });

      // Create new iframe for news content
      const newsIframe = createNewsIframe(event.data.url);

      // Insert news iframe before current iframe
      parentDoc.body.insertBefore(newsIframe, parentDoc.body.firstChild);
    }
  });
})();
