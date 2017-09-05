(function(){
    function HomeCtrl(Post){
        this.posts = Post
        console.log(this.posts.publicPosts);
    };

    angular
        .module('conArtistNYC')
        .controller('HomeCtrl', ['Post', HomeCtrl]);
})();
