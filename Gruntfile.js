'use strict';

module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');

  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'index.js'],
      options: {
        jshintrc: true
      }
    },

    jscs: {
        all: {
            options: {
                // Task-specific options go here.
            },
            files: {
                src: ['index.js'] // Target-specific file/directory goes here.
            }
        }
    }
  });

  grunt.registerTask('test', ['jshint', 'jscs']);
  grunt.registerTask('default', ['test']);
};
