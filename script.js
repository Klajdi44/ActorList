//get the main
const main = document.getElementById('main');
//get the json url
const url = new Request('https://raw.githubusercontent.com/Klajdi44/actors/master/actors.json');

//fetch the url (get url then response and give it back as json and then get the data inside of the json.)
fetch(url)
  .then(response => response.json())
  .then(data => {
    //run a foreachloop 
    data.forEach(actor => {
      //get and clone the template
      const clone = document.querySelector('#template').content.cloneNode(true);

      const actorName = clone.querySelector('.actor-name').textContent = actor.fullname;

      const contentdiv = clone.querySelector('.content');

      const btn = document.createElement('button');
      btn.appendChild(document.createTextNode('Read More'));
      btn.classList = 'btn';

      contentdiv.appendChild(btn);

      const modal = document.getElementById('modal');

      btn.addEventListener('click', getRestOfData);

      const closeBtn = document.querySelector('.close-btn').addEventListener('click', closeModal);


      function getRestOfData() {
        modal.style.display = 'block';

        const modalActorName = document.querySelector('.modal-actor-name').textContent = actor.fullname;

        const modalActorMovie = document.querySelector('.modal-actor-movie').textContent = actor.movie;

      }

      function closeModal() {
        modal.style.display = 'none';
      }


      main.appendChild(clone);
    });
  })
