UpdateDoi = async function (ref) {
  // Uses a local copy of the citation-js package,
  // https://github.com/citation-js/citation-js
  const Cite = require('citation-js');
  const doi = ref.getAttribute('doi');
  const data = await Cite.async(doi);
  ref.firstChild.innerHTML = data.format('bibliography', {
      format: 'html', template: 'apa', lang: 'en-GB'
    }).replace("&#38;amp;", "&");
}

$(document).ready(async function() {
  // Display info
  const dois = document.getElementsByTagName('doi');
  Array.from(dois).forEach(function (ref) {
    let doi = ref.getAttribute('doi');
    let bib = document.createElement('a');
    bib.href = "https://dx.doi.org/" + doi;
    bib.classList.add("doi-ref");
    bib.innerHTML = doi;
    ref.appendChild(bib);
  })

  await Promise.all(Object.keys(dois).map(async (ref) => {
    UpdateDoi(dois[ref]);
  }));
});
