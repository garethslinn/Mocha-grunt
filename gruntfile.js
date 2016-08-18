module.exports = function(grunt) {
    grunt.initConfig({
        mochaTest: {
            specs: {
                options: {
                    ui: 'bdd',
                    reporter: 'spec',
                    require: './specs/helpers/chai'
                },
                src: ['specs/**/*.spec.js']
            }
        },
        jshint: {
            files: ['specs/**/*.js'],
        },
        watch: {
            files: ['lib/**/*.js'],
            tasks: ['jshint']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jshint']);

};
