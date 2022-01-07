$(document).ready(function(){
  // Display info
  var Cite = require('citation-js');
  
  dois = document.getElementsByTagName('doi')
  dois.forEach(function (ref) {
    let doi = ref.getAttribute('doi');
    bib = document.createElement('a');
    bib.href = "https://dx.doi.org/" + doi;
    bib.classList.add("doi-ref");
    bib.innerHTML = new Cite(doi).format('bibliography', {
        format: 'html', template: 'apa', lang: 'en-GB'
      });
    ref.appendChild(bib);
  });
});