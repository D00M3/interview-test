### Questions

Please answer the following questions:
    
1. Comparing the app-original and app-standalone code bases. The app-standalone code base has put each component in a separate file and directory structure.   
   * Why do you think that was done, what are the advantages / disadvantages?

###
Pros
1. Debug and Testing, since separate components can be easily identified and isolated for
errors and testing, compared to one file with over 500 lines of code.
2. Reuseable, since components are isolated and separated. They can be used throughout
the application, via imports. Also, if you create new projects, you can then copy those
components and use them in new projects.
3. Modularity, Having separate components, makes it easier to refactor and modify code,
without breaking the whole application, this extends to collaboration with other developers
when making changes.

###
Cons
1. Overkill for small applications, it is more efficient to group a small number
components to one file instead.
2. Can be tedious to navigate though many separate files and folders, when editing
components.

2. Thinking about a production ready app, what do you think is missing from all the examples? *Hint: the square component in the standalone app has one*

The components need unit testing files, very important to check if the code is working as intended before deploying to prod.

3. Are you familiar with Redux? If so what is the basic idea behind it and what would be a good case for using it?

Redux is a state management library, that has extensive popularity and support in the
React community.
The main benefit of Redux is that it provides centralized state management through a
global store. This store holds the entire state of the application in a single, predictable place,
which can be accessed and updated by any part of the app.

4. *If you are interested in the full-stack role* Please take a look at the partial implementation of an express routes in backend/router.js.
    * Thinking of a production application, what issues do you see with this code? *List as many as you like* 

    * It needs to use try and catch blocks along with if statements to check for errors and handle them properly.
    * It needs seperate functions for the database connection and queries, this makes the code less complex and makes it easier to debug.
    * It needs to use await when handling connections, queries etc. This prevents errors such as timeouts.
    * Not using async or promise is a big no no, because it allows the application to do other things while things such as queries are made. It prevents the whole application from being paused. 
    * It needs to use proper logs and status codes, so if an issue happens the developers can fix it. 


### Coding Challenges

With either the app-standalone or app-redux (**not both** - whichever you are comfortable with), please complete the following changes:

1. Update the app so that is highlights the winning move.
2. Update the app so that it allows for a named player X and Y, and it keeps a league table of who won each game.
3. If you get time, implement something that you think that the app could do and is cool. What other things would you change.

### Expectations
 * We don't want you to spend too long on this exercise, just the necessary amount of time to show your front-end and back-end skills. We expect it to take 1.5 hours if you have React experience, longer if you have no React experience. 
    * If you don't answer all questions, that is fine. We prefer depth on a few questions rather than superficial answers.
 * Some testing, but not extensive. Have at least one test case, so that we know you can do it. 
    * You'll notice the example code doesn't have much testing. It should.
 * Clean, concise code. Comments are appreciated.
 * Knowledge of up to date React features e.g. Hooks.




    
      
    
    

 





