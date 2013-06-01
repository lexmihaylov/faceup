var FaceUp = {
    init: function () {
        FaceUp.Activity.main = new Main();
        FaceUp.Activity.latest = new LatestPhotos();
        FaceUp.Activity.rated = new RatedPhotos();
        FaceUp.Activity.my = new MyPhotos();
        
        FaceUp.CameraButton = $('#cameraBtn');
        FaceUp.StatButton = $('#statBtn');
        FaceUp.PeopleButton = $('#peopleBtn');

        FaceUp.body = $('body');
        FaceUp.loading = $('#loading');
    },
    
    buttonInit: function() {
        FaceUp.PeopleButton.on('touchend', function() {
            FaceUp.Activity.latest.show();
        });
    }
};

FaceUp.window = $(window);
FaceUp.document = $(document);


FaceUp.Api = "http://localhost/faceup/";

FaceUp.Activity = {};
        
FaceUp.window.on('load', function() {
    //FaceUp.init();
    document.addEventListener('deviceready', function() {
        FaceUp.init();
    }, false);
});