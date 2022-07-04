# challenge-05

## Description

Basic Daily planner with text content saved to local storage and color coded time blocks that change based on block relation current time.

## What I Learned

This was a pretty straightforward project.  I'd say all that I really learned that the simplest solution is sometimes the best.  I wasted a lot of time trying to figure out why I couldn't get an array of textarea elements that I could then manipulate by class, but even if I had I didn't have a plan for how to compare the id to the current time (although I'm sure it's easy enought to convert the string text of a simple id into an integer).  Eventually I was able to disply all of the id's and classes on the textarea elements in the console, but I decided I was wasting too much time trying to figure out how to use the returned information.  I was having a hard time figuring out why I couldn't return any of the textareas by id either.  Eventually I just decided to use the variables I'd already established with query selectors for the saving of the textarea input (for some reason the browser didn't have a problem with those variables).  If there's a way to create an array of elements iterable by id, please let me know; it seems much to useful to be impossible, but I couldn't find any solutions on google.  

https://github.com/tuckerreiland/challenge-05

https://tuckerreiland.github.io/challenge-05/

![website photo](/challenge-05/images/Screen%20Shot%202022-07-04%20at%203.48.32%20PM.png)