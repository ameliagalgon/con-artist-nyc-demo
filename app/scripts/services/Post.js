(function(){
    function Post($firebaseArray){

        var Post = {};

        var db = firebase.database();
        var ref = firebase.database().ref().child("posts").child("public");
        Post.publicPosts = $firebaseArray(ref);

        Post.expanded = false;

        Post.togglePost = function(post){
            console.log(post);

            var element = $(document.getElementById(post.$id));

            if(element.hasClass("expanded")){
                element.find('.preview').css("display","block");
                element.find('.full-content').css("display","none");
            } else{
                element.find('.preview').css("display","none");
                element.find('.full-content').css("display","block");
            }
            element.toggleClass("expanded");
        };

        return Post
    };

    angular
        .module('conArtistNYC')
        .factory('Post', ['$firebaseArray', Post]);
})();
