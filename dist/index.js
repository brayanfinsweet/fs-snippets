(()=>{var c=i=>{function o(e){if(!(e.target instanceof HTMLElement)||e.target instanceof HTMLAnchorElement||e instanceof KeyboardEvent&&e.key!=="Enter")return;let r=e.target.closest(i);if(!r)return;e.preventDefault();let t=r.querySelector("a");return t&&t.click(),!1}(function(){document.querySelectorAll(i).forEach(t=>{let n=t.querySelector("a");n&&n.href&&(t.setAttribute("role","link"),t.setAttribute("tabindex","0"),n.setAttribute("tabindex","-1"),n.textContent&&t.setAttribute("aria-label",n.textContent))})})(),window.addEventListener("click",o),window.addEventListener("keydown",o)},l=c;window.WebflowHacks={editorFriendlyLinkBlocks:l};})();
