var rest = require("restler"),
	assert = require("assert"),
	root_url = "0.0.0.0:3000";

test("API gets hello world", function(){
	rest.get(root_url + "/").on("complete", function(data){
			assert.equal("world", data.hello);
	});
});