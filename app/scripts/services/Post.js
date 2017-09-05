(function(){
    function Post($firebaseArray){

        var Post = {};

        var ref = firebase.database().ref().child("posts").child("public");
        Post.publicPosts = $firebaseArray(ref);

        return Post
    };

    angular
        .module('conArtistNYC')
        .factory('Post', ['$firebaseArray', Post]);
})();
