$(() => {
  
  async function hello() {
    console.log('into app.js');
    await setTimeout(() => {
      const el = document.createElement('h1');
      el.innerHTML = 'hello, world~';
      document.body.appendChild(el);
    }, 1000);
    
  }
  
  hello();
  
});



