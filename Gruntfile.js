module.exports = function (grunt) {
  grunt.initConfig({//配置项
    uglify: {
      release: {
        files: {
            'dist/rectangle.js': ['./rectangle.js'],
            'dist/calc.js':['./calc.js']
        }  
      }
    }
  })

    grunt.loadNpmTasks('grunt-contrib-uglify');//插件

    grunt.registerTask('default', ['uglify']);//清单

};
