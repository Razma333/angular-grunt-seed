module.exports = grunt => {

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);
    grunt.initConfig({
        meta: {
            banner: '/* myApp project, <%= grunt.template.today() %> */'
        },
        concat: {
            js: {
                src: ['app/scripts/*.js', 'app/scripts/**/*.js'],
                dest: 'app/build/concat/js/scripts.js'
            },
            css: {
                src: ['app/styles/*.css', 'app/scripts/**/*.css'],
                dest: 'app/build/concat/css/styles.css'
            }
        },

        watch: {
            options: {
                livereload: true
            },
            js: {
                files: ['app/scripts/**/*.js', 'scripts/*.js'],
                tasks: ['concat', 'uglify'],
            },
            css: {
                files: ['app/styles/**/*.css', 'app/scripts/**/*.css'],
                tasks: ['concat', 'cssmin']
            },
            index: {
                files: ['app/index.html']
            },
            gruntfile: {
                files: ['gruntfile.js']
            }
        },

        uglify: {
            options: {
                manage: false
            },
            target: {
                files: {
                    'app/build/dist/main.min.js': ['app/build/concat/js/*.js']
                }
            }
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'app/build/concat/css/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'app/build/dist/',
                    ext: '.min.css'
                }]
            }
        },

        connect: {
            start: {
                options: {
                    port: 8000,
                    hostname: 'localhost',
                    open: true,
                    base: ['app'],
                }
            }
        }
    });

    grunt.registerTask('build', ['concat', 'uglify', 'cssmin']);
    grunt.registerTask('serve', ['build', 'connect', 'watch']);
}