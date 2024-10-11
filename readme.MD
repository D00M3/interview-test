### Questions

Please answer the following questions:
    
1. Comparing the app-original and app-standalone code bases. The app-standalone code base has put each component in a separate file and directory structure.   
   * Why do you think that was done, what are the advantages / disadvantages?

Pros
1. Debug and Testing, since separate components can be easily identified and isolated for
errors and testing, compared to one file with over 500 lines of code.
2. Reuseable, since components are isolated and separated. They can be used throughout
the application, via imports. Also, if you create new projects, you can then copy those
components and use them in new projects.
3. Modularity, Having separate components, makes it easier to refactor and modify code,
without breaking the whole application, this extends to collaboration with other developers
when making changes.
4.
Cons
1. Overkill for small applications, it is more efficient to group a small number
components to one file instead.
2. Can be tedious to navigate though many separate files and folders, when editing
components.

###############################################################################################

2. Thinking about a production ready app, what do you think is missing from all the examples? *Hint: the square component in the standalone app has one*

What’s missing in the production ready app is unit testing for the components. The
square component has it, but not the other components.

##################################################################################################
3. Are you familiar with Redux? If so what is the basic idea behind it and what would be a good case for using it?

Redux is a state management library, that has extensive popularity and support in the
React community.
The main benefit of Redux is that it provides centralized state management through a
global store. This store holds the entire state of the application in a single, predictable place,
which can be accessed and updated by any part of the app.

#####################################################################################################
4. *If you are interested in the full-stack role* Please take a look at the partial implementation of an express routes in backend/router.js.
    * Thinking of a production application, what issues do you see with this code? *List as many as you like* 

1. No try/catch block or if statements, to catch errors.
2. The code does not use await, await is needed to ensure db conenctions and queries are compelete before moving on in the script. 
3. Seperate functions should be used for db connections, queries to ensure the code runs smoothly, reduce complexities and errors and makes it easier to debug. 
4. No use of promises aysnc functions, which will cause issues in production. 



### Coding Challenges

With either the app-standalone or app-redux (**not both** - whichever you are comfortable with), please complete the following changes:

1. Update the app so that is highlights the winning move. (Complete)
2. Update the app so that it allows for a named player X and Y, and it keeps a league table of who won each game. (Complete)
3. If you get time, implement something that you think that the app could do and is cool. What other things would you change.





    
      
    
    

 





