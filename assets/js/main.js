/* Footer addition */
function FooterButton(liText, href, icon = '', label) {
  return $('<li>' + liText + ' </li>')
    .append($('<a href="' + href + '"></a>')
    .addClass('icon solid ' + icon)
    .append($('<span class="label">' + label + '</span>'))
  );
}

/*
	Tessellate by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			wide:    [ '1281px',  '1680px' ],
			normal:  [ '1001px',  '1280px' ],
			narrow:  [ '737px',   '1000px' ],
			mobile:  [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});


    $('.written').each( function (index) {
      var writeHere = document.createElement("textarea");
      writeHere.placeholder = "Type your answer here. Clicking the question text will reveal the answer.";
      this.parentNode.insertBefore(writeHere, this);        
    })
    
    // Populate footer
    let footer = document.getElementById('footer');
    if (footer) {
      let gotoIcons = document.createElement('ul')
      $(gotoIcons).addClass('icons');
      $(gotoIcons)
        .append('<li>Go to:</li>')
        .append(FooterButton('top', '#', 'fa-arrow-up', 'Top'))
        .append(FooterButton('index', 'index.html', 'fa-bars', 'Index'))
        .append(FooterButton('discussion', '', 'discussionBoard fa-comment', 'Discussion board'))
        .append(FooterButton('encore', 'https://durham.cloud.panopto.eu/', 'fa-play', 'Encore'))
        .append(FooterButton('blackboard', '', 'blackboard fa-university', 'Blackboard'))
      ;
      $(footer).prepend(gotoIcons);
    }

    let reading = document.getElementById('further-reading');
    if (reading) {
      let readingLinks = document.createElement('ul');
      $(readingLinks).addClass('icons');
      $(readingLinks)
        .append(FooterButton('How to access articles', 'https://smithlabdurham.github.io/GEOL2301/access-articles.html" ', 'fa-unlock', 'Access articles'))
        .append(FooterButton('Course reading list', '', 'readingList fa-scroll', 'Reading list'))
        ;
      $(footer).prepend(readingLinks);
    }
    
	// Scrolly.
		$('.scrolly').scrolly();

})(jQuery);

function Reveal(id) {
  $('#' + id).slideToggle();
}

function Right(el, id) {
  $('#' + id).slideDown();
  $(el).removeClass('option');
  $(el).addClass('right');
}
function Rightish(el, id) {
  $('#' + id).slideDown();
  $(el).removeClass('option');
  $(el).addClass('rightish');
}
function Wrong(el, id) {
  $('#' + id).slideDown();
  $(el).removeClass('option');
  $(el).addClass('wrong');
}