module.exports = function(grunt) {

require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
    sass: {
        dist: {
            files: {
                'assets/css/style.css': 'assets/css/style.scss',
                'assets/css/variables.css': 'assets/css/variables.scss',
            }
        }
    },
    watch: {
      scripts: {
        files: ['assets/css/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
        },
      },
    },
});


grunt.registerTask('default', ['sass']);

grunt.loadNpmTasks('grunt-contrib-watch');


};
