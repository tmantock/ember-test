/**
 * @fileoverview The Project route for the portfolio
 * Author: Tevin Mantock
 * Date:3/4/2018
 * Assignment: Project
 * Course: CS 290 Web Development
 */

import Route from '@ember/routing/route';

export default Route.extend({
  /**
   * init - Ember Route hook (first hook). This hook is only ran once
   */
  init() {
    this._super(arguments);
    // Genetate the project models that will be used for this route
    this.set('projects', this.genetateProjects());
  },

  /**
   * setupController - Ember Route hook
   *
   * @param {Controller} controller
   * @param {Model} model
   */
  setupController(controller) {
    this._super(arguments);
    controller.set('projects', this.get('projects'));
    controller.set('selectedProject', controller.get('projects.firstObject'));
  },

  /**
   * genetateProjects - Genearates an array of project models
   *                    Have to generate data manually, since there is no API, which
   *                    takes away many of the features that the store service has.
   *
   * @returns {Array}
   */
  genetateProjects() {
    var store = this.get('store');
    var list = projectList();
    // Foreach project in the list replace it with a model
    return list.map(function(item) {
      // Create a project and put it in the store
      var project = store.createRecord('project', {
        name:      item.name,
        subHeader: item.subHeader,
        body:      item.body,
        completed: true,
      });

      item.languages.forEach(function(itm) {
        // Create a language and put in the store
        var location = store.createRecord('language', {
          name:    itm,
          project: project, // Add the relationship to the project
        });
        // Add the language to the projects hasMany relationship
        project.get('languages').pushObject(location);
      });

      return project;
    });
  },

  actions: {
    /**
     * selectProject - An action that sets currentProject to the project that was passed
     *
     * @param {Model} project
     */
    selectProject(project) {
      this.set('controller.selectedProject', project);
    },
  },
});

/**
 * projectList - Return an array of project values to be used when creating projects in the store
 *
 * @returns {Array}
 */
function projectList() {
  return [
    {
      name: 'UNIX Shell',
      subHeader: 'A Basic Shell for UNIX Systems Built With C',
      body: [
        'I built this shell to demonstrate my knowledge and ability to use the C programming language.',
        'It was also a great opportunity to challenge myself and use the POSIX API that is used in UNIX systems.',
        "When I made this project, I hadn't taken an Operating Systems course yet, so it was challenging to figure out how the shell should work",
        'I have plenty of experience using a shell, but I had very little idea how I could make one or how it worked.',
        'I only knew how what my target output / result should be.\n',
        'I had start with having the shell continuosly prompt the user for a command, by using a loop that only exits n error or user prompt.',
        'Then I had to solve parsing the users input into tokens that can be used for execution and beig able to handle large user inputs.',
        "Finally, the most difficult part was figuring out how to have the user's command be executed in a separate process from the shell.",
        'This was necessary since the shell needs to know the result of the program, so it needs to spawn the process and be the parent process for it.',
        'I was able to solve this by spawning a new process of the shell, then executing the command it that new process.',
        'From there, I created built-in shell functions, like cd, pwd, ls, cat, and touch.',
      ],
      languages: ['C'],
    },
    {
      name: 'Monokai',
      subHeader: 'A new programming language',
      body: [
        'Monkai is dynamically typed expressive programming language.\n',
        'I built this project to get a better understanding of how programming languages work.',
        'It was a very rewarding experience that is still ongoing, since I have not finished it yet.',
        'I had to read up on interpreters, lexers, and parsers in order to make this projects.\n',
        'The language comes with its own REPL (Read Evaluate Print Loop) console and includes features like first order functions.',
      ],
      languages: ['Go'],
    },
    {
      name: 'Support Server',
      subHeader: 'A chat server',
      body: [
        'I built this project to demonstrate my understanding of the Go programming language.',
        'I think that Go is a beautiful and powerful language, and I wish that I could use it more.\n',
        "This project was fun, because I got to use Go's great concurrency handling with channels.",
        'I mostly used features from the Go Standard Library, with some imported packages for the database and websockets.',
        'The front-end is built with React and uses Websockets to connect and communicate witht the Go server.',
        'Users are able to connect to a Support channel, and send messages to a support representative.',
      ],
      languages: ['Go', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      name: 'Todo',
      subHeader: 'A task manager for iOS',
      body: [
        'I built this project to demonstrate my knowlwedge of Swift and iOS.',
        'I think that programming for mobile is a better experience than web development, so I wanted to try my hand at making an iOS application.\n',
        'The most challenging part of this project was learning how to use idiomatic Swift and using the UIKit framework from Apple.',
        'Swift is a typed systems objet oriented programming language.',
        'However, programming in an object-oriented way with Swift is different from other languages that I have used, like Ruby, C++, and Python.',
        'It was strange at first to use them, but I find Protocols and Delegates to a great way handle some of challenges that arise when having to deal with encapsulation and inheritance.',
      ],
      languages: ['Swift'],
    },
    {
      name:'Student Grade Table',
      subHeader: 'A management system for teachers',
      body: [
        'I built this project to demonstrate my knowledge of Angular.js (1).',
        'This was a fun projects, since it was one of the first programs I ever built.',
        'The concept behind it is very simple.',
        'It creates, reads, updates, and deletes data on a Firebase database.',
        'However, it was fun adding more and more features, like sorting and search.',
        'This was definitely a fun first project.',
      ],
      languages: ['JavaScript', 'HTML', 'CSS'],
    },
    {
      name: 'Calculator',
      subHeader: 'A calculator and converter',
      body: [
        'This was the first program that I have ever made, beyond a hello world.\n',
        'It started as a simple calculator for handling single operations.',
        'It later evolved to allow users to add more inputs and add on more operations and operands.',
        'Finally, I decided to add currency and metric converters to the calculator.',
        'This portion of the project was extremely fun, since it involved integrating an API for getting the most recent currency values and creating a table for metric conversions.',
        'Most challenging of all were the context switches.',
        'The calculator for math, currency, and metrics are completely different from each other, but the user able to flip a switch to change the calculator without changing the view.',
        'Also, the context switches for the calculator allows the user to transfer the results from the separate contexts transfer over to the new context.',
      ],
      languages: ['JavaScript', 'HTML', 'CSS'],
    }
  ]
}
