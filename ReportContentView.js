var api = require( 'assets/js/api' );
var Observable = require( 'FuseJS/Observable' );

var singlepost = Observable();
var comment = Observable( '' );

var post = this.Parameter.map( function( params ) {
	return params.post;
});

var userid = this.Parameter.map( function( params ) {
	return params.userid;
});

var username = this.Parameter.map( function( params ) {
	return params.username;
});

// prevent multiple calls to api
var postloaded = false;
post.onValueChanged( module, function( newValue ) {

	singlepost.value = new api.MastodonPost( newValue );

} );

function sendReport() {

	// TODO handle reponse for this promise
	api.sendReport( userid.value, post.value.id, comment.value ).then( function() {
		api.setError( 'Report sent, thank you.' );
		router.goBack();
	}).catch( function( err ) {
		api.setError( 'Report could not be sent.' );
	});

}

function goBack() {
	router.goBack();
}

module.exports = {
	comment: comment,
	sendReport: sendReport,
	goBack: goBack,
	singlepost: singlepost
};
