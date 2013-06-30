$(function () {

  var $container = $('#portfolio-container');

  $container.isotope({
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows',
    getSortData: {
      featured: function ($elem) {
        return $elem.attr('data-featured');
      }
    }
  });

  $('#featured-btn').click(function () {
    $('#portfolio-container').isotope({ filter: '.featured'});
  });

  $('#rails-btn').click(function () {
    $('#portfolio-container').isotope({ filter: '.rails'});
  });

  $('#ruby-btn').click(function () {
    $('#portfolio-container').isotope({ filter: '.ruby'});
  });

  $('#js-btn').click(function () {
    $('#portfolio-container').isotope({ filter: '.javascript'});
  });

  $('#sinatra-btn').click(function () {
    $('#portfolio-container').isotope({ filter: '.sinatra'});
  });

  $('#csharp-btn').click(function () {
    $('#portfolio-container').isotope({ filter: '.csharp'});
  });

  $('#all-btn').click(function () {
    $('#portfolio-container').isotope({ filter: '*'});
  });

});
