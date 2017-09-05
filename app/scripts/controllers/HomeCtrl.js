(function(){
    function HomeCtrl(Post){
        this.posts = Post;
        console.log(this.posts);
    };

    angular
        .module('conArtistNYC')
        .controller('HomeCtrl', ['Post', HomeCtrl]);
})();
