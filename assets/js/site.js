document.addEventListener('click', function (event) {
    
	// If the clicked element doesn't have the right selector, bail
	if (!event.target.matches('.js--open-employee-modal')) {
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

    modal.setContent('<iframe src="https://services.cognitoforms.com/f/GhIb2C-hDUWSeIR5xktX6w?id=1" style="position:relative;width:1px;min-width:100%;*width:100%;" frameborder="0" scrolling="yes" seamless="seamless" height="764" width="100%" allowtransparency="true"></iframe><script src="https://services.cognitoforms.com/scripts/embed.js"></script>');


    modal.open();

}, false);

document.addEventListener('click', function (event) {
    
	// If the clicked element doesn't have the right selector, bail
	if (!event.target.matches('.js--open-employer-modal')) {
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

    modal.setContent('<iframe src="https://services.cognitoforms.com/f/GhIb2C-hDUWSeIR5xktX6w?id=2" allowtransparency="true" style="position:relative;width:1px;min-width:100%;*width:100%;" frameborder="0" scrolling="yes" seamless="seamless" height="616" width="100%"></iframe><script src="https://services.cognitoforms.com/scripts/embed.js"></script>');


    modal.open();

}, false);