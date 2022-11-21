import svgo from 'gulp-svgo';
import svgSprite from 'gulp-svg-sprite';

export const svgSpriteTask = () => {
    return app.gulp.src(app.path.src.svgSpriteIcons)
    .pipe(
        svgo({
            plugins: [
                {
                    removeAttrs: { attrs: "(fill|stroke|style|width|height|data.*)" }
                }
            ]
        })
    )
    .pipe(
        svgSprite({
            mode: {
                symbol: {
                    sprite: "sprite.svg"
                }
            }
        })
     )
    .pipe(app.gulp.dest(app.path.build.sprites));
}
