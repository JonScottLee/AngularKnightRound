/*
 * grunt-init
 * https://gruntjs.com/
 *
 * Copyright (c) 2014 "Cowboy" Ben Alman, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      files: ['app/scripts/**/*.js', '!app/scripts/lib/*.js'],
      options: {
        devel: true,
        globalstrict: true,
        globals: {
          jQuery: true,
          angular: true,
          localStorage: true,
          browser: true,
          $: true,
          window: true
        }
      }
    },
    csslint: {
      strict: {
        options: {
          import: 2,
          adjoiningClasses: false
        },
        src: ['app/styles/main.css']
      }
    },
    watch: {
      files: ['<%= jshint.files %>', 'app/styles/main.css'],
      tasks: ['jshint', 'csslint']
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-csslint');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['watch', 'jshint', 'csslint']);

};