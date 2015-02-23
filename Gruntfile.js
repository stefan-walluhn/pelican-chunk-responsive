module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bower: {
            install: {
                options: {
                    targetDir: './static'
                }
            }
        },
        less: {
            chunk: {
                files: {
                    'static/chunk/theme.css': 'src/less/theme.less'
                }
            }
        },
        uglify: {
            jquery: {
                files: {
                    'static/jquery/jquery.min.js': ['static/jquery/jquery.js']
                }
            },
            bootstrap: {
                files: {
                    'static/bootstrap/bootstrap.min.js': ['static/bootstrap/bootstrap.js']
                }
            }
        },
        cssmin: {
            options: {
                compatibility: 'ie8',
                advanced: false
            },
            bootstrap: {
                files: {
                    'static/bootstrap/bootstrap.min.css': ['static/bootstrap/bootstrap.css']
                }
            },
            chunk: {
                files: {
                    'static/chunk/theme.min.css': ['static/chunk/theme.css']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask(
        'default',
        [
            'bower:install',
            'less:chunk',
            'uglify:jquery',
            'uglify:bootstrap',
            'cssmin:bootstrap',
            'cssmin:chunk'])
};

