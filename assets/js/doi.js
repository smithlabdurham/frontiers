UpdateDoi = async function (ref) {
  const Cite = require('citation-js');
  const doi = ref.getAttribute('doi');
  const data = await Cite.async(doi);
  ref.firstChild.innerHTML = data.format('bibliography', {
      format: 'html', template: 'apa', lang: 'en-GB'
    });
}

$(document).ready(async function() {
  // Display info
  const dois = document.getElementsByTagName('doi');
  dois.forEach(function (ref) {
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
