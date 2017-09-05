(function(){
    function Post($firebaseArray){

        var Post = {};

        var ref = firebase.database().ref().child("posts").child("public");
        Post.publicPosts = $firebaseArray(ref);

        Post.expanded = false;

        Post.togglePost = function($event){
            //console.log("toggle");
            //console.log(event.target.parent(".post"));

            if(Post.expanded === false){
                Post.expand($(event.target).parent('.post'));
                Post.expanded = true;
            } else{
                Post.collapse($(event.target).parent('.post'));
                Post.expanded = false;
            }
        };


        Post.expand = function(post){
            console.log(post);

            console.log("expand");
            //console.log($event.target);
            post.find('.preview').css("display","none");
            post.find('.full-content').css("display","block");
            //document.getElementByClass().style.property
            console.log(post.find('.preview'));
        };

        Post.collapse = function(post){
            console.log("collapse");
            post.find('.preview').css("display","block");
            post.find('.full-content').css("display","none");
        };

        return Post
    };

    angular
        .module('conArtistNYC')
        .factory('Post', ['$firebaseArray', Post]);
})();
