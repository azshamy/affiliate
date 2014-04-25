/*jshint node:true*/
module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt, [ 'grunt-*']);
	var path = require('path');

	var stripComments = /<\!--.*?-->/g,
		collapseWhiteSpace = /\s+/g;

	grunt.initConfig({
		connect: {
			options: {
				port: 8888,
				hostname: 'localhost'
			},
			"default": {
				options: {
					base: ''
				}
			}
		},
		watch: {
			css: {
				files: 'css/**/*.css',
				tasks: [],
				options : {
                        interrupt : true,
                        livereload : true}
			},
			options : {
                        interrupt : true,
                        livereload : true}
		}
	});

	grunt.registerTask('default', [ 'connect:default', 'watch:css']);
};
