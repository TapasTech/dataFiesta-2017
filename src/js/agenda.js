$(() => {
  
  console.log('into agenda');
  
  const $avatar = $('.avatar');
  
  $('.control-unit').on(click, function(e) {
    console.log(this);
    if (!this.hasAttribute('data-detail')) {
      $avatar.addClass('hidden');
    } else {
      $avatar.removeClass('hidden');
    }
  })

  
});
