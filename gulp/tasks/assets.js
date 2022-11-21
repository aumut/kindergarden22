export const copyCss = () => {
    return app.gulp.src(`${app.path.srcFolder}/assets/*.css`)
    .pipe(app.gulp.dest(app.path.build.css)) 
}

export const copyJs = () => {
    return app.gulp.src(`${app.path.srcFolder}/assets/*.js`)
    .pipe(app.gulp.dest(app.path.build.js)) 
}