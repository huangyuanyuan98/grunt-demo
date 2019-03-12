module.exports = function(grunt){
  grunt.initConfig({
    sprite:{
      all:{
        src:'./images/*.png',//来源
        dest:'./images/all.png',//png合并子图的路径
        destCss:'./sprites.css',
      }
    }
  })

  grunt.loadNpmTasks('grunt-spritesmith');

  grunt.registerTask('default',['sprite']);
};
