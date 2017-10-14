$(() => {
  
  console.log('carousel');
  
  const mouseEnter = 'mouseenter';
  const $carouselPerson = $('#carousel .person-unit');
  
  $carouselPerson.on(mouseEnter, function(e) {
    var $detail = $(this).find('.detail-wrapper');
    if (WIDTH - e.clientX < 420) {
      $detail.addClass('move-left');
    } else {
      $detail.removeClass('move-left');
    }
  })
  
});
