var FaceUp = {
    init: function () {
        this.Activity.main = new Main();
        this.Activity.latest = new LatestPhotos();
        this.Activity.rated = new RatedPhotos();
        this.Activity.my = new MyPhotos();

        this.body = $('body');
        this.loading = $('#loading');
    }
};

FaceUp.window = $(window);
FaceUp.document = $(document);


FaceUp.Api = "http://localhost/faceup/";

FaceUp.Activity = {};
        
FaceUp.window.on('load', function() {
    FaceUp.init();
    document.addEventListener('deviceready', function() {
    }, false);
});