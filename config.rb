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
