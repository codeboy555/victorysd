# Ionic Profile Page Component

### To change the styles
`ionic.app.scss` is the root file. It contains all the includes needed for the project:

- `@import "scss/mixins";`
Sass mixins that ease the job in our project

- `@import "scss/variables";`
Here are all the variables you can play with. They provide an easy way to customize the styles. Sass variables are an easy way to maintain your css, you just need to change one variable in your scss file instead of changing one value in several places within your css files

- `@import "scss/override_variables";`
Just in case you want to override some Ionic variables

- `@import "www/lib/bourbon/app/assets/stylesheets/_bourbon";`
Bourbon provides mixins and other stuff to ease even more when using Sass

- `@import "www/lib/ionic/scss/ionic";`
Include ionic stuff

- `@import "scss/styles";`
Styles and variables related to common elements like loaders, preload images, etc.

- `@import "scss/profile";`
Styles for this profile Page
