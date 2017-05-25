var browserSync = require("browser-sync").create();
var exec = require('child_process').exec;

var path = {
  app: "./app",
  html: {
    src: "./app/*.html"
  },
  styles: {
    css: "./app/css/*.css",
    scss: "./dev/scss/*.scss"
  },
  scripts: {
    src: './app/js/*.js'
  }
}

// Watch SCSS files
browserSync.watch(path.styles.scss, function (event, file) {
  if (event === "change") {
    var npm_command = "npm run sass";
    // Compile SCSS to CSS.
    exec(npm_command, function(err){
      if(err) {
        console.log("Sass compilation error", err);
        return        
      }
      console.log("Compile Successful");
    });
  }
});

// Watch HTML files
browserSync.watch(path.html.src, browserSync.reload);

// Watch JavaScript files
browserSync.watch(path.scripts.src, browserSync.reload);

// Watch JavaScript files
browserSync.watch(path.styles.css, browserSync.reload);

// Now init the Browsersync server
browserSync.init({
    server: path.app
});