module.exports = function(grunt) {

    grunt.config.set('browserSync', {
        bsFiles: {
            src: ['.tmp/public/frontend/css/*.css', '.tmp/public/frontend/js/**/*.js', '.tmp/public/frontend/img/**/*.png', '.tmp/public/frontend/img/**/*.jpg', '.tmp/public/frontend/img/**/*.gif', '.tmp/public/frontend/views/**']
        },
        options: {
            open: false,
            watchTask: true,
            proxy: "localhost:1337"
        }
    });

    grunt.loadNpmTasks('grunt-browser-sync');
};
