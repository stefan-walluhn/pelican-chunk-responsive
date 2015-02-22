module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bower: {
            install: {
                options: {
                    targetDir: 'static',
                    cleanBowerDir: true
                }
            }
        },
        subgrunt: {
            bootstrap: {
                'bower_components/bootstrap/': 'dist'
            }
        },
        wiredep: {
            task: {
                src: [
                    'src/index.html'
                ],
                options: {
                    directory: 'lib'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-subgrunt');
    grunt.loadNpmTasks('grunt-wiredep');

    grunt.registerTask('default', ['bower:install'])
};

