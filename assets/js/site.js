document.addEventListener('click', function (event) {
    
	// If the clicked element doesn't have the right selector, bail
	if (!event.target.matches('.js--open-modal')) {
        return;
    }

	// Don't follow the link
	event.preventDefault();

	// instanciate new modal
    var modal = new tingle.modal({
        footer: false,
        closeMethods: [ 'button', 'escape'],
        closeLabel: "Close",
        cssClass: ['custom-class-1', 'custom-class-2'],
        onOpen: function() {
        },
        onClose: function() {
        },
        beforeClose: function() {
            return true; // close the modal
        }
    });

    modal.setContent('<div id="model-inner"></div>');

    hbspt.forms.create({
        portalId: '6396830',
        formId: '2136d2b7-a4fd-4f14-8c54-be1e66712e94',
        target: '#model-inner'
    });

    modal.open();

}, false);