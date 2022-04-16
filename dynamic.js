const speakers = [
    {
        image : 'pics/Cohen.png',
        name : 'Mark Cohen',
        occupation: 'AI Consultant',
        description: 'Mark is an AI specialist woth over 7 years experience in the AI field'
    },

    {
        image : 'pics/chinese.png',
        name : 'June Cheng',
        occupation: 'Cyber Security Annalist',
        description: ' Mrs. Cheng has been working on the Cyber Security space for over 10 years.'
    },

    {
        image : 'pics/curly.png',
        name : 'Justin Kariuki',
        occupation: 'Fullstack Developer',
        description: 'Mr Kariuki has a good experience developing mobile apps and websites'
    },

    {
        image : 'pics/singh.png',
        name : 'Teddy Singh',
        occupation: 'Cloud Architect',
        description: 'Mr Singh has been working on cloud platforms for 5years'
    },

    {
        image : 'pics/osman.png',
        name : 'Osman Gazi',
        occupation: 'Data Scientist',
        description: ' Osman is a master Python developer with a variety of skills'
    },

    {
        image : 'pics/Otunga.png',
        name : 'Miles Otunga',
        occupation: 'Flutter Developer',
        description: 'Miles Otunga is a master when it comes to flutter development'
    }
];

const speakerSection = document.querySelector ('.speakers') 
speakerSection.innerHTML = '';
window.onload = () => {
    for (let i = 0; i < speakers.length; i += 1) {
        speakerSection.innerHTML += ` 
  <div class="individual">
  <div class="myImage">
      <img src= '${speakers[i].image}'>
  </div>
  <div class="description">
      <h2>${speakers[i].name}</h2>
      <h3>${speakers[i].occupation}</h3>
      <p>${speakers[i].description} </p>
  </div>
</div>

  `;
    } 
}