'use strict';

module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'learnyounode.js', 'mymodule.js'],
      options: {
        jshintrc: true
      }
    }

  });

  grunt.registerTask('default', 'jshint');
};
