module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    handlebars:{
      compile: {
        options: {
          /*
          namespace: function(filename) {
            var names = filename.replace(/resources\/(.*)(\/\w+\.hbs)/, '$1');
            return names.split('/').join('.');
          }*/
          namespace: "BlogApp.Templates",
          processName: function(filePath) {
            var pattern = /resources\/templates\/(\w+)\.hbs/;
            var match = pattern.exec(filePath);
            return match[1];
          }
        },
        files: {
          "resources/templates/testTemplate.js": "resources/templates/test_template.hbs"
        //  "path/to/another.js": ["path/to/sources/*.hbs", "path/to/more/*.hbs"]
        }
      }
    }
  });

  // Load the plugins.
  grunt.loadNpmTasks('grunt-contrib-handlebars');

  // Default task(s).
  grunt.registerTask('default', ['handlebars']);

};
