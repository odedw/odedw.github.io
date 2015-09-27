module.exports = function(grunt) {
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks); 
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {  
            sitecss: {  
                options: {  
                    banner: '/* My minified css file */'  
                },  
                files: {  
                    'public/css/styles.min.css': [  
                        'public/css/poole.css',  
                        'public/css/lanyon.css',  
                        'public/css/syntax.css',  
                        'public/css/site.css'
                    ]
                }  
            }  
        },  
        uglify: {
            options: {  
                compress: true  
            },  
            applib: {  
                src: [  
                    'scripts/circle.js',  
                    'scripts/pcg.js',  
                ],  
                dest: 'scripts/applib.js'  
            } 
        }
    });


    // Default task(s).
    grunt.registerTask('default', ['uglify', 'cssmin']);  

};