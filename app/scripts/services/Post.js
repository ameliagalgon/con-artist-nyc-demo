(function(){
    function Post($firebaseArray){

        var Post = {};

        var db = firebase.database();
        var ref = firebase.database().ref().child("posts").child("public");
        Post.publicPosts = $firebaseArray(ref);

        Post.expanded = false;

        Post.togglePost = function($event){
            console.log($event.target);
            var element = $(event.target).closest('.post');

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
            //find other divs with the expanded class

            element.toggleClass("expanded");
        };

        return Post
    };

    angular
        .module('conArtistNYC')
        .factory('Post', ['$firebaseArray', Post]);
})();
