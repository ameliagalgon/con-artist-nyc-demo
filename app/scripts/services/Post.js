(function(){
    function Post($firebaseArray){

        var Post = {};

        var db = firebase.database();
        var ref = firebase.database().ref().child("posts").child("public");
        Post.publicPosts = $firebaseArray(ref);

        //Post.expanded = false;

        Post.showPopup = function($event){
            var element = $(event.target).closest('.item');
            console.log(element);
            $(".popup").css("display","block");
            if ($(".popup").hasClass('expanded-item')){
                $(".popup-content").html(element.find('.full-content').html());
            } else{
                $(".popup").addClass('expanded-item');
                setTimeout(function(){
                    $(".popup-content").html(element.find('.full-content').html());
                }, 500);
            }
            /*
            if(element.hasClass("expanded")){
                element.find('.preview').css("display","block");
                element.find('.full-content').css("display","none");
            } else{
                var expandedElements = $('.expanded');
                //console.log(expandedElements);
                if(expandedElements.length > 0){
                    $.each(expandedElements, function(){
                        $(this).removeClass("expanded");
                        $(this).find('.preview').css("display","block");
                        $(this).find('.full-content').css("display","none");
                    });
                }

                element.find('.preview').css("display","none");
                element.find('.full-content').css("display","block");

            }
            */
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
