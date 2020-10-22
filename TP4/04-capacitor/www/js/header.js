export const header = () => {
    const ion_title = document.createElement('ion-title');
    ion_title.innerHTML = 'Blog DevFest Nantes';

    const ion_toolbar = document.createElement('ion-toolbar');
    ion_toolbar.appendChild(ion_title);

    const ion_header = document.createElement('ion-header');
    ion_header.appendChild(ion_title);
    document.querySelector('ion-header').replaceWith(ion_header);
};