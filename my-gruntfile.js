module.export = function(grunt){
  grunt.initConfig({
    less:{
      development:{
        files:{
          'css/layout.css':'less/layout.less'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.registerTasks('default',['less']);
};
