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
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['watch', 'jshint']);

};