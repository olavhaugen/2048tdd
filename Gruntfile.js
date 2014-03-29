module.exports = function(grunt) {
	grunt.initConfig({

		watch: {
			options: {
				livereload: true
			},
			views: {
				files: ['app/**/*.html']
			},
			scripts: {
				files: ['app/js/**/*.js']
			}
		},
		connect: {
			options: {
				port: 9000,
				hostname: 'localhost'
			},
			site: {
				options: {
					open: true,
					base: 'app',
				}
			}
		},
    karma: {
      unit: {
        configFile: 'tests/karma.conf.js',
      },
      continuous: {
        configFile: 'tests/karma.conf.js',
        singleRun: false,
        browsers: ['PhantomJS']
      },
    }
	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-karma');

	grunt.registerTask('server', ['connect:site', 'watch']);
	grunt.registerTask('tests', ['karma:continuous']);

	grunt.registerTask('default', []);

};
