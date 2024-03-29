"use strict";

var gitSubtree = require("gulp-gh-pages");
var gulp = require("gulp");

/* Deploy to production branch */
gulp.task("deploy", ["git:deploy"]);

/*
 * Deployment.
 */
gulp.task("git:deploy", function() {
  return gulp.src('./dist/**/*')
    .pipe(gitSubtree({
      branch: "build"
    }));
});
