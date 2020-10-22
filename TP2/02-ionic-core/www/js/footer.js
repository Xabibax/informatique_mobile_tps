export const footer = () => {
    const ion_title = document.createElement('ion-title');
    ion_title.innerHTML = 'Footer';

    const ion_toolbar = document.createElement('ion-toolbar');
    ion_toolbar.appendChild(ion_title);

    const ion_footer = document.createElement('ion-footer');
    ion_footer.appendChild(ion_title);
    document.querySelector('ion-footer').replaceWith(ion_footer);
};