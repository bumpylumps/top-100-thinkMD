# ChartWatch
This application is a Top 100 music charts tracker for ThinkMD. It consumes data imported from the Itunes top 100 RSS feed. Each project displays information about the top 100 selling albums on Itunes, with attempts on all difficulty levels stated by ThinkMD's interview prompt. This project is a group of front end applications (features for Basic-Expert difficulties in respective directories) and a full-stack application (in Bonus directory). 

![alt tag](http://placecorgi.com/1200/650)

## How It's Made:
Following the prompt given to me by ThinkMD, I decided to block out different timelines for the difficulty options I knew I could do (from basic to intermediate) and the options that I knew I would need to learn more about in order to be successful. Since I received this right before the holidays started, I took the holiday break (about 1 week) and split up the time between what I knew I could do, and what I knew I would need to learn in order to do on each sides of that week. 

## Parts I knew I could do (4 days): 
**Basic** - Using HTML, CSS, and vanilla JS, I built a basic page that consumes the itunes top 100 RSS feed. There weren't that many obstacles to overcome during this build process, but I wanted to create a template I could use for the 'novice' prompt difficulty. 

**Novice** - I carried the template from the basic directory over to this one, and incorporated Bootstrap. Using the basic styles on elements from bootstraps library, I also incorporated bootstraps grid to help clean up the site's layout. I chose to have the chart list be organized vertically in order to help differentiate this project from the more advanced ones. Being familiar with Bootstrap, there weren't alot of obstacles while building this either. 

**Intermediate** - Being unfamiliar with Angular and Typescript, but wanting to learn something new and push myself, I knew that building this page would take up the bulk of the time I set aside. Utilizing the Angular docs and lots of googling, I updated the layout from the novice page and rebuilt the chart list component to display the albums art. I also made it scroll horizontally instead of vertically to help differentiate it from the other pages that don't utilize Angular. Using Sass I added some animation to the album items that incorporated a for loop (my favorite Sass feature). A fade in for the title was also added to the pages header. Finally after making sure it all worked, I seperated this directory into it's own repository to submit as a smaller package to in order to make code review easier.


## Parts I knew I would need to learn more about to be successful (1 week)

**Expert** - Building off of the page built for the Intermediate option of the prompt, I added some user interactivity features. Using some psuedoclasses and Sass, the album items react to mouse hovers with a simple zoom in feature, and clicking on them prompts a pop up that I was going to use to display extra album information. A searchbox was also added to allow the top 100 list to be searchable, which I was also going to use the pop up to display the results with. As it is my first time using Angular, I realized that passing information between components was a bit more complicated than I expected. I was able to get search results from the search box to be console logged, but in order to figure out how to pass data between components I would need to take more time than I was comfortable with to submit something stable.

**Bonus** - Since the prompt was only front end, I wanted to incorporate a backend using NestJS in order to deliver something that was full-stack. I originally wanted to have a landing page that allowed the user to navigate to each different project (from the basic to expert pages). After spending alot of time on stack overflow, the NestJS docs, and the Angular docs (alongside lots of googling) I realized that in order to build an application like that would require me to rebuild it from the ground up and take more time to submit than I was comfortable with. So instead I built a page that navigates to the pages that don't incoporate Angular (the basic and novice pages) and uses NestJS as a backend to serve them. I also set up hosting for the intermediate page using github pages, from it's own seperate repository. 



### Tech used:
  HTML, CSS, JavaScript, SASS, Angular, NestJS, EJS

**Basic:** 
  HTML, JS, CSS

**Novice:** 
  HTML, JS, CSS, Bootstrap

**Intermediate:** 
  HTML, Angular, Sass, Typescript

**Expert:** 
  HTML, Angular, Sass, Typescript

**Bonus:** 
  NestJS, HTML, JS, CSS


## Optimizations: 
If I gave myself more time on this project, I would definitely commit to finishing up the Expert page and build a full stack app that serves every project page as the Bonus. I would have the search results on the expert page load into a seperate section, either below the album container or next to the search box itself. I would also update the click events for the album items to display their full info as an expansion of the item that is already displayed, since pop ups are generally annoying to users. There's also room for a better layout on each version of the pages, so I would incorporate a nice template or find a designer to collaborate with and build something more user friendly. Finally, alot of the code could probably be optimized, espeically the pages using Angular. Getting more familiar with Angular would allow me to create something that is more production ready. 


## Lessons Learned:



## Examples:
A hosted version of the intermediate version can be found at: (https://bumpylumps.github.io/chartwatch-intermediate/), alongside it's own repository for easier review:
(https://github.com/bumpylumps/chartwatch-intermediate)



