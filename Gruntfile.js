module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		// Task: Lint all JS files
		jshint: {
			files: ['public/js/**/*.js', 'app/**/*.js', 'config/**/*.js'],
			options: {
				jshintrc: ".jshintrc"
			}
		},

		// Task: Compile SASS to CSS
		less: {
			compile: {
				files: {
					'public/styles/resorted-style.css': 'public/styles/_style.less'//,
//					'public/styles/bootstrap/bootstrap.css': 'public/styles/bootstrap/bootstrap.less'
				}
			}
		},

		// Task: Lint CSS
		csslint: {
			strict: {
				options: {
			    csslintrc: '.csslintrc'
			  },
				src: ['public/styles/style.css']
			}
		},

		// Task: Comb CSS
		csscomb: {
			dist: {
				options: {
					config: '.csscomb'
				},
				files: {
					'public/styles/style.css': 'public/styles/resorted-style.css'
				}
			}
		},

		// Task: Uglify build JS
		requirejs: {
			production: {
				options: {
					name: 'app',
					baseUrl: "public/js/application",
					mainConfigFile: "public/js/application/bootstrap.js",
					out: "public/js/build/build.js"
				}
			}
		},

		// Task: Restart Node
		nodemon: {
			dev: {
				options: {
					file: 'app/server.js'
				}
			}
		},

		// Task: Concurrent
		concurrent: {
			dev: {
				options: {
					logConcurrentOutput: true
				},
				tasks: ['watch', 'nodemon']
			}
		},

		// Task: Watch
		watch: {
			jshint: {
				files: ['public/js/**/*.js', 'Gruntfile.js', 'app/**/*.js', 'config/**/*.js'],
				tasks: ['jshint'],
				options: {
					livereload: true
				}
			},
			less: {
				files: ['public/styles/**/*.less'],
				tasks: ['less']
			},
			csscomb: {
				files: ['public/styles/resorted-style.css'],
				tasks: ['csscomb']
			},
			csslint: {
				files: ['public/styles/style.css'],
				tasks: ['csslint'],
				options: {
					livereload: true
				}
			},
			html: {
				files: ['app/views/**/*.html.jade', 'public/js/application/views/**/*.html'],
				options: {
					livereload: true
				}
			}
		}

	});

	// Load the plugin for watch
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Load the plugin for JSHint
	grunt.loadNpmTasks('grunt-contrib-jshint');

	// Load the plugin for CSS Comb
	grunt.loadNpmTasks('grunt-csscomb');

		// Load the plugin for CSS lint
	grunt.loadNpmTasks('grunt-contrib-csslint');

	// Load the plugin for LESS
	grunt.loadNpmTasks('grunt-contrib-less');

	 // Load the plugin for RequireJS
	grunt.loadNpmTasks('grunt-contrib-requirejs');

	// Load the plugin for develop
	grunt.loadNpmTasks('grunt-nodemon');

	// Load the plugin for parrallel tasks
	grunt.loadNpmTasks('grunt-concurrent');

	// Default task(s)
	grunt.registerTask('default', ['jshint']);
};