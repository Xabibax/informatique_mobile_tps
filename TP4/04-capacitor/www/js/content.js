import { card_comp } from './components/devfest_card.js';

export const content = async () => {
    const ion_content = document.createElement('ion-content')
    try {
        const devfest_api = await fetch('https://devfest-nantes-2018-api.cleverapps.io/blog')
        const devfest_json = await devfest_api.json();
        // .then(res => console.log(res))
        // .catch(err => console.error(err));

        const cards = document.createElement('div');
        cards.id = 'cards'
        console.log(devfest_json);
        // 
        /*
      {
        "id": "devfest-2018-announced", 
        "title": "Annonce du DevFest Nantes 2018",
        "posted": "2018-04-02",
        "primaryColor": "#44504E",
        "secondaryColor": "#5A7785",
        "image": "/images/posts/announce.jpg",
        "brief": "Le GDG Nantes est fier de vous annoncer la 7ème édition du DevFest Nantes! L'événement aura lieu les 18 et 19 Octobre 2018 à la Cité des Congrès de Nantes."
      }
        */
        const uri = 'https://devfest2018.gdgnantes.com';
        for (const data of devfest_json) {
            console.log(data)
            
            let card = {
                image: `${uri}${data.image}`,
                header: {
                    title: `${data.title}`,
                },
                content: `${data.brief}`,
            };
            cards.appendChild(card_comp(card));
        }
        ion_content.appendChild(cards);


    } catch (error) {
        console.error(error);
    }
    document.querySelector('ion-content').replaceWith(ion_content);
};