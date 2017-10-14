$(() => {
  
  console.log('into agenda');
  const $avatar = $('#agenda .avatar-wrapper');
  const $controlUnit = $('.control-unit');
  const $info = $('#agenda .info-wrapper');
  const $people = $('#agenda .people-wrapper');
  
  
  $controlUnit.on(CLICK, function(e) {
    $controlUnit.removeClass('active');
    $(this).addClass('active');
    if (!this.hasAttribute('data-detail')) {
      $avatar.addClass('hidden');
      $info.addClass('static');
      $people.addClass('brief');
    } else {
      $avatar.removeClass('hidden');
      $info.removeClass('static');
      $people.removeClass('brief');
    }
  })

  
});
