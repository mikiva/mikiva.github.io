module.exports = function (grunt) {

    grunt.initConfig({
            pg: grunt.file.readJSON('package.json'),

            copy: {
                main: {

                    src: './CNAME',
                    dest: 'dist/CNAME'
                }
            },
            exec: {
                build: {
                    cmd: 'npm run build'
                }
            }
        }
    )


    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-copy');


    grunt.registerTask('build', ['exec:build', 'copy']);

}
;