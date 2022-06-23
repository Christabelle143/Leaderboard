const show = (name, score) => {
  document.querySelector('.scores').innerHTML += `<ul >        
      <li class="color">${name} : ${score}</li></ul>`;
};

export default show;
