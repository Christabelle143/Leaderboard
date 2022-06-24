const show = (name, score) => {
  document.querySelector('.scores').innerHTML += `<ul class ="color" >        
      <li>${name} : ${score}</li></ul>`;
};

export default show;
