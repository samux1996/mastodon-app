var nav = require("assets/js/navigation");
nav.menuVisible.value = 'Visible';
nav.showBackButton.value = true;

var Observable = require("FuseJS/Observable");

var data = require( 'assets/js/data' );
data.loadPublicTimeline();

function goBack() {
	router.goBack();
}

module.exports = {
  posts: data.posts.public,
  goBack: goBack
}
