(function(){
    function Post($firebaseArray){

        var Post = {};

        var db = firebase.database();
        var ref = firebase.database().ref().child("posts").child("public");
        Post.publicPosts = $firebaseArray(ref);

        //Post.expanded = false;

        Post.showPopup = function($event){
            var element = $(event.target).closest('.item');
            //console.log(element);
            $(".popup").css("display","block");
            if ($(".popup").hasClass('expanded-item')){
                $(".popup-content").html(element.find('.full-content').html());
            } else{
                $(".popup").addClass('expanded-item');
                setTimeout(function(){
                    $(".popup-content").html(element.find('.full-content').html());
                }, 500);
            }
        };

        Post.closePopup = function(){
            console.log("close popup");
            $('.popup-content').html("");
            $('.popup').css("display", "none");
            $(".popup").removeClass("expanded-item");
        };

        return Post
    };

    angular
        .module('conArtistNYC')
        .factory('Post', ['$firebaseArray', Post]);
})();
