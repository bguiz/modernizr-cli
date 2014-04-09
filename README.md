# Modernizr 3 command line

Want to use the Modernizer 3 via the command line?

## Sample usage

    npm install -g modernizr-cli
    #NOTE you will see several warnings like the one below, you may ignore them
    #This will go away when modernizr publishes itself to the npm registry
    # >> Local Npm module "foo" not found. Is it installed?
    cp node_modules/modernizr/lib/config-all.json ./custom.json
    #edit custom.json to suit what you want
    modernizr-cli custom.json custom.modernizr.js custom.modernizr.min.js

## License

[GPLv3](http://www.gnu.org/licenses/gpl-3.0.html)
