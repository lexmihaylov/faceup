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
        FaceUp.buttonInit();
    },
    
    buttonInit: function() {
        FaceUp.PeopleButton.tab(function() {
            FaceUp.Activity.latest.show();
        });
        
        FaceUp.StatButton.tab(function() {
            
        });
        
        FaceUp.CameraButton.tab(function() {
            
        });
    }
};

FaceUp.window = $(window);
FaceUp.document = $(document);


FaceUp.Api = "http://localhost/faceup/";

FaceUp.Activity = {};
        
FaceUp.window.on('load', function() {
    document.addEventListener("deviceready", function() {
        FaceUp.init();
    }, false);
});