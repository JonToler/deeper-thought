# Question and Answer Message Board
Implement at least one computed property.
Possible Ideas: Allow users to upvote the answer they think is best, then sort answers by number of upvotes. Or display the number of answers each question has with a computed property.
Add a helper.
Possible Ideas: Nicely-formatted timestamps on questions and/or answers, a formatting change or special icon for questions with no answers, or questions with large numbers of answers, a formatting change or special icon for the answer with the most upvotes, etc.
Integrate a service.
Possible Ideas: Allow users to create lists of favorite questions or answers to reference later.

#Specs:
Questions should have the content of the question itself, an author and additional notes.

Answers should have the content of the answer and the author.
Include a header and/or navbar that appears on all pages containing the name of your site and a link to the home page.

List all questions on the homepage, with only the question and the name of the author showing.

Users should be able to click on a question to view additional information.

Allow users to add and edit questions.

Allow users to add answers to a question. Answers should be added and viewed on the same page as the question they respond to.

Questions will indicate their popularity of comments using a helper and a glyphicon.




This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`
* `ember install ember-bootstrap`
* `Also add  app.import('bower_components/bootstrap/dist/js/bootstrap.js'); to the ember-cli-build.js on the project's main directory.`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
 * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
 * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
