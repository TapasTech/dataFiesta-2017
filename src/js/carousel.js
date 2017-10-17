$(() => {
  
  console.log('carousel');
  
  const mouseEnter = 'mouseenter';
  const $carouselPerson = $('#carousel .person-unit');
  
  const gap = IS_MOBILE? 190 : 420;
  
  $carouselPerson.on(mouseEnter, function(e) {
    var $detail = $(this).find('.detail-wrapper');
    if (WIDTH - e.clientX < gap) {
      $detail.addClass('move-left');
    } else {
      $detail.removeClass('move-left');
    }
  })
  
});
