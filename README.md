# Modernizr 3 Command Line Interface

Use the Modernizer 3 via the command line - like so:

    modernizr config.json

Both the minified and non-minified output will be produced.

## Sample usage

    npm install -g modernizr-cli
    #NOTE you will see several warnings like the one below, you may ignore them
    #This will go away when modernizr publishes itself to the npm registry
    # >> Local Npm module "foo" not found. Is it installed?
    cp node_modules/modernizr/lib/config-all.json ./custom.json
    #edit custom.json to suit what you want
    modernizr custom.json custom.modernizr.js custom.modernizr.min.js
    #or, if you do not mind using default names for output files:
    modernizr custom.json

## License

[GPLv3](http://www.gnu.org/licenses/gpl-3.0.html)
