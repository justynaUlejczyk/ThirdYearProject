function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#imageUpload").change(function () {
    readURL(this);
});

function readBackgroundURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('.banner-preview').css('background-image', 'url(' + e.target.result + ')');
            $('.banner-preview').hide();
            $('.banner-preview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$("#bannerUpload").change(function () {
    readBackgroundURL(this);
});
