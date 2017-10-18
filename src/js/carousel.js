$(() => {
  
  console.log('carousel');
  
  const mouseEnter = 'mouseenter';
  const personUnit = $('#carousel .person-unit');
  
  personUnit.on(mouseEnter, function(e) {
    const $this = $(this);
    if (IS_MOBILE) {
      e.stopPropagation();
      const attributes = ['name', 'job', 'type', 'title', 'time'];
      const values = [];
      attributes.forEach(item => {
        values.push($this.attr('data-' + item));
      });
      const [name, job, type, title, time] = values;
      const $popup = $('.detail-popup');
      $popup.removeClass('hidden');
      const $text = $popup.find('.text-wrapper');
      const $avatar = $popup.find('.avatar');
      $text.find('.job').html(job);
      $text.find('.type').html(type);
      $text.find('.title').html(title);
      $text.find('.time').html(time);
      $avatar.css("backgroundImage", `url(http://z.dtcj.com/cbndata/avatars/${name}.png)`);
      return;
    }
  
    const gap = IS_MOBILE? 190 : 420;
    var $detail = $this.find('.detail-wrapper');
    if (WIDTH - e.clientX < gap) {
      $detail.addClass('move-left');
    } else {
      $detail.removeClass('move-left');
    }
  });
  
  $('body').on(CLICK, function(e) {
    $('.detail-popup').addClass('hidden');
  })
  
});
