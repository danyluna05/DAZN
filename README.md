DAZN Web Challenge

**Description:**
Build a UI to search the Movie DB.
The user should be able to enter some text into a search field, see and browse the results from the Movie DB.

## Setup your system

### node.js v6.x

You will need [node.js](https://nodejs.org) *v6.x*.

### Install npm packages and run build

Once you have node.js installed, open up your OS's Terminal/Bash application,  change into the root folder of the test (where the file `package.json` is located) and run `npm install`.

After all NPM packages installed successfully, the build process will automatically trigger (you can do that manually by running `npm run build`). It will execute for JavaScript, CSS and HTML and also pre-process SASS files and convert them to CSS. Please note that you will need a *working Internet connection* to run the HTML linter.

At this point you should get no errors which means that all linters successfully passed your code.

### IDE configuration

Please configure your IDE to use the [`.editorconfig`](http://editorconfig.org/#download), [`.stylelintrc`](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/complementary-tools.md#editor-plugins) and [`.eslintrc`](http://eslint.org/docs/user-guide/integrations#editors) files you find in the project's root folder. This way you will see you linting errors directly in your IDE.

### Helper tools

Open up for each of the following commands a tab (or session) in your OS's Terminal/Bash application and run them from within the root folder of this test (where the `package.json` file is located).

* `npm run watch:lint` - starts the linters in watch mode; meaning on every file change the linters will run and give you instant feedback if there's something to improve
* `npm run watch:css`
    - every fill change on any `*.scss` file will trigger the SASS pre-processor and generate a CSS file
    - afterwards all CSS files be passed to [autoprefixer](https://github.com/postcss/autoprefixer) which removes the necessity for you to care about browser vendor prefixes.

    