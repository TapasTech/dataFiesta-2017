$(() => {
  
  console.log('into agenda');
  const $avatar = $('#agenda .avatar');
  const $controlUnit = $('.control-unit');
  const $info = $('#agenda .info-wrapper');
  
  $controlUnit.on(click, function(e) {
    $controlUnit.removeClass('active');
    $(this).addClass('active');
    if (!this.hasAttribute('data-detail')) {
      $avatar.addClass('hidden');
      $info.addClass('static');
    } else {
      $avatar.removeClass('hidden');
      $info.removeClass('static');
    }
  })

  
});
