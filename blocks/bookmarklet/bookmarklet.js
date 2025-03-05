export default function decorate(block) {
  block.textContent = '';
  const container = document.createElement('div');
  container.className = 'container';

  const img = document.createElement('img');
  img.src = 'https://experience.adobe.com/solutions/aem-sites-genai-aem-genai-variations-mfe/assets/resources/images/early-access.png';
  img.alt = 'Join Our Beta Testing Banner';
  img.className = 'image';

  const h1 = document.createElement('h1');
  h1.textContent = 'Join Our Beta Testing';

  const p1 = document.createElement('p');
  p1.innerHTML = 'Be among the first to try our On-Boarding tool. <br> Your feedback will help shape the final product.';

  const p2 = document.createElement('p');
  p2.className = 'cta';
  p2.textContent = 'Drag the button below to your bookmarks bar, then open it on any website to launch the app.';

  const bookmarklet = document.createElement('a');
  bookmarklet.className = 'bookmarklet-button';
  bookmarklet.href = `javascript:(
    function(){
      var script=document.createElement('script');
      script.src='${window.location.origin}/blocks/bookmarklet/client.js';
      document.body.appendChild(script);
    }
  )();`;
  bookmarklet.textContent = 'On-Boarding Tool';

  container.append(img, h1, p1, p2, bookmarklet);
  block.appendChild(container);
}
