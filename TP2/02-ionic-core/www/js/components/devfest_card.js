export const card_comp = (card) => {

    console.log(card);
    const ion_card = document.createElement('ion-card')

    const img = document.createElement('img')
    img.src   = `${card.image}`;
    ion_card.appendChild(img);

    const ion_card_header = document.createElement('ion-card-header')
    ion_card.appendChild(ion_card_header);

    const ion_card_title       = document.createElement('ion-card-title')
    ion_card_title.innerHTML   = `${card.header.title}`;
    ion_card_header.appendChild(ion_card_title);

    const ion_card_content       = document.createElement('ion-card-content')
    ion_card_content.innerHTML   = `${card.content}`;
    ion_card.appendChild(ion_card_content);

    return ion_card;
}
