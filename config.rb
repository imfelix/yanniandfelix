#################################################
## Asset Directories
#################################################
config[:js_dir]     = "assets/javascripts"
config[:css_dir]    = "assets/stylesheets"
config[:images_dir] = "assets/images"

#################################################
## Templating Language
#################################################
set :haml, { ugly: true, format: :html5 }

#################################################
## Page Options and Layouts
#################################################
page "/sitemap.xml", layout: false

#################################################
## Developement Configuration
#################################################
configure :development do
  activate  :livereload
  activate  :syntax
end

#################################################
## Build Configuration
#################################################
configure :build do
  activate  :minify_css
  activate  :minify_javascript
  activate  :relative_assets
  set       :relative_links, true
end
