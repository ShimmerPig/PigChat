$(function() {

	var $image = $('#image');
	var options = {
		aspectRatio: 1 / 1,
		preview: '.img-preview',
		crop: function(e) {}
	};

	// Cropper
	$image.cropper(options);

	// Methods
	$('.docs-buttons').on('click', '[data-method]', function() {
		var cropper = $image.data('cropper');
		var result;

		result = $image.cropper("getCroppedCanvas");

		if(result) {
			// Bootstrap's Modal
			$('#getCroppedCanvasModal').modal().find('.modal-body').html(result);
			var base64Url = result.toDataURL();
			console.log(base64Url);
		}

	});

});