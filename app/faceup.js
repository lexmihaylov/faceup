var FaceUp = {
    init: function () {
        FaceUp.Activity.main = new Main();
        FaceUp.Activity.latest = new LatestPhotos();
        FaceUp.Activity.rated = new RatedPhotos();
        FaceUp.Activity.my = new MyPhotos();
        FaceUp.Activity.pdetails = new PhotoDetails();
        
        FaceUp.CameraButton = $('#cameraBtn');
        FaceUp.StatButton = $('#statBtn');
        FaceUp.PeopleButton = $('#peopleBtn');

        FaceUp.toolBar = $('#toolBar');
        FaceUp.body = $('body');
        FaceUp.loading = $('#loading');
        FaceUp.buttonInit();
    },
    
    buttonInit: function() {
        var placeActivebutton = function(button) {
            FaceUp.toolBar.find('.button.main').removeClass('main');
            button.parent().addClass('main');
        };
        
        FaceUp.PeopleButton.tab(function() {
            placeActivebutton($(this));
            FaceUp.Activity.latest.show();
        });
        
        FaceUp.StatButton.tab(function() {
            placeActivebutton($(this));
            FaceUp.Activity.my.show();
        });
        
        FaceUp.CameraButton.tab(function() {
            placeActivebutton($(this));
            FaceUp.Activity.rated.show();
            
        });
        
        $('#takeAPicture').tab(function() {
            navigator.camera.getPicture(function(image) {
                FaceUp.Activity.rated.image.attr('src', 'data:image/jpeg;base64,'+image);
            }, function() {
                navigator.notification.alert('Cannot open camera', function() {}, 'Camera Error');
            }, {
                quality: 50,
                destinationType: Camera.DestinationType.DATA_URL
            });
        });
    }
};

FaceUp.window = $(window);
FaceUp.document = $(document);


FaceUp.Api = "http://158ltd.com:8081/faceup/";

FaceUp.Activity = {};
        
FaceUp.window.on('load', function() {
    document.addEventListener("deviceready", function() {
        FaceUp.init();
    }, false);
});