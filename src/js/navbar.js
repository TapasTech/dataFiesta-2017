$(() => {
  
  console.log('navbar');
  const $navItem = $('a.nav-item');
  
  $navItem.on(CLICK, function(e) {
    const $this = $(this);
    if (!$this.attr('target')) {
      e.preventDefault();
      const $href = $($this.attr('href'));
      $('html').animate({scrollTop: $href.offset().top - 80}, 600);
    }
  })
  
});
