## The Bar Wars game 
– Rock, paper, scissors, lizard, Spock

![Overview of the game on different screen sizes](assets/documentation/image-1.png)

Through global symbols and colors for pass and failure, this game can be used by anyone who is curious to play - or need to make a quick decision.

The Bar Wars game can be used for planning and decision making. What movies will you watch? Who will get the next round?  

In case of any clash of opinions the situation will quickly be solved with this game. 

Make it easy and let the game decide!

This project is developed as a gift for the Bar Wars community. A group of people who get together to watch Star Wars movies the night before Christmas eve as a yearly tradition.


## Goal

### Project goal


* Design a clean retro-stylish and engaging user interface for a rock-paper-scissors game 
* Using JavaScript to implement functions such as:

	* Managing player choices
	* Generating computer selections
	* Determining round winner
	* Update the game interface dynamically based on player interactions clicking any of the various buttons
	* Display result
	* Total scores

### User goal
New visitors shall quickly recognize the traditional game of Paper, Rock and Scissors

* The extra variables creates curiosity and willingness to try it out  
* The rules of the game and logic between the five elements/variables should be easy to reach
* The user/player shall have a clear overview and understanding of each button/choice/variable to be able to make an active choice rather than a random pick.  


## Design

### The colors
The colors are inspired from Starwars and lasers. Dark blue background with text and elements in yellow, pink and aqua  makes a good contrast. Red and green are used as signal colors for win and lose.

* Dark blue #050530ff
* Red #ff000cff
* Yellow #fffe47ff
* Magenta #ff00f8ff
* Aqua blue #00ffffff
* Green #00a429ff
* Red #ff000cff


<img src="assets/documentation/image-3.png" width="600px" height="400">
------

### Typography
The courier font is inspired from typewriter and text code to match the beginning of digital age era

The icons of common illustrations by Font awesome are used for the variable buttons


### Wireframes 
Wireframes for desktop and mobile screen size

![wireframes](assets/documentation/image-2.png)
------

### Accessibility
* Structure of semantic html
* Meta tags and description
* Icons with aria labels
* Buttons with titles
* Responsive design
* Colors with good contrast
* Standard font
* Try/catch added for quicker troubleshooting

## Features
![features](assets/documentation/image.png)
------

### Shortcut link
First in place is a link to the instructions of the game to make it easy and quick for the visitor to decide if the game is for them or not.

![linkrules](assets/documentation/image-4.png)
------

### Heading
* The name of the game refers to a community tradition called The Bar wars. 

* The heading is yellow with font in uppercase. Colors are inspired by stars,space and lasers. The darkblue background creates a clear contrast
to the heading
![heading](assets/documentation/image-5.png)
------

### Buttons with variable choices
* The variable choices in black shown as icons in round yellow buttons placed on a dark blue background.

* The color combination makes a clear contrast and makes it comfortable to play even in places with little light and on small screen sizes. 

* Responsive design makes buttons’ size and position easy to reach with one hand on mobile phones.

![buttons](assets/documentation/image-6.png)
------

### Mouse hovers 

When the player hovers over the buttons to make their selection;
* Background color shifts to magenta
* Explanatory text is visible to remind the player of the button’s strengths and weaknesses. 

This makes it clear for the user which answer they are about to click 
to avoid mistakes of clicking the wrong answer.

![buttonhover](assets/documentation/image-7.png)
------

### The selections
* Player’s (You) selection is displayed in magenta (pink)
* Computer's (House) selection is displayed in aqua blue

The different colors make a clear distinction between the player’s and computer’s bet.

![alt text](assets/documentation/image-8.png)
------
### The Result
The result is displayed in different colors depending on the outcome. 

* Green if you win
* Red if you lose
* Yellow if it's a tie

As a player I don’t have to read to know the outcome; it's very clear just by seeing the color of the result.

![result](assets/documentation/image-9.png)
------
### Score display
* The score display has a yellow border. 

* The score of the player is displayed in pink and computers score in aqua blue 

This clearly separates  which score belongs to who.

![scores](assets/documentation/image-10.png)
------
### Instructions
The instructions on how to play are placed at the bottom of the page.

![rules](assets/documentation/image-11.png)

At the end of the text there is a button with a link to take the player to the section with the variable choices to start the game.  

![linkgame](assets/documentation/image-12.png)


The link's background shifts to magenta/pink when hovering the mouse over.

------

## Future Features
* Save high score list
* Add player to play against

------
## Technologies applied
Languages:
* HTML
* CSS
* Javascript

Use HTML and CSS to design an attractive and intuitive interface for the Rock-Paper-Scissors game.

Write JavaScript to manage player choices, generate computer selections, and determine round outcomes.

Dynamically update HTML content with JavaScript to display current selections, round results and total score.

React to user click by adding event listeners for the rock, paper, and scissors buttons.

## Testing

* HTML W3 Validator	✅
* CSS W3C Validator	✅
* Try/catch			✅
* jshint	
* Accessibility		✅	

![pagespeed_mobile](assets/documentation/mobile_speedtest.png)
![pagespeed_desktop](assets/documentation/computer_speedtest.png))


## Fixes 

* Include a loop Buttons using an event listener
* Break things down into smaller functions
* Style edited for better user experience 
* Add aria label and use as variable id:s
* Create new divs for the "player" and " cpu" titles
* Keep feature image in readme, but include features in text as well
* Add try/catch to trouble shooting functions
 
### Mention 
I started in one repository and continued in a new repository to write cleaner and neater commits to the code.
Link to the first repository https://github.com/Josseyo/PP2.git

 
## Tools
Gitpod
Github
Google
Am I responsive? https://ui.dev/amiresponsive
Grammarly https://app.grammarly.com/
Speed test, https://pagespeed.web.dev/
Javascript test, https://jshint.com/
Html validator, https://validator.w3.org
CSS validator, https://jigsaw.w3.org/css-validator

## Resources
FontAwesome, https://fontawesome.com/
Google fonts


## Tutorials & Inspirations
Credits to all the content providers for all the inspirations and learnings from following sources

Build Rock-paper-scissors basic structure https://youtu.be/ec8vSKJuZTk?si=0kYT0P_LqSiH0Yy9
https://hackr.io/blog/how-to-build-rock-paper-scissors-in-javascript

How to build rock, paper, scissors and readme file
https://hackr.io/blog/how-to-build-rock-paper-scissors-in-javascript

Add basic CSS
https://youtu.be/3uKdQx-SZ5A?si=144oOFE4EclM_bO3

Add aria https://youtu.be/P_H4_miTKsI?si=FqNEw6qp7DAeGpIN

Inspiration for readme https://hackr.io/blog/how-to-build-rock-paper-scissors-in-javascript)

Buttons using an event listener https://sebhastian.com/rock-paper-scissors-javascript/ 
https://fjolt.com/articlejavascript-multiple-elements-addeventlistener

Bro Code, javascript full cours for free (2024) https://youtu.be/lfmg-EJ8gm4?si=8UWH-9nR20S0VXzS

Add Try/Catch https://www.w3schools.com/jsref/jsref_try_catch.asp

The game is based on the five elements theory and the episode of the comedy series “The big bang theory” in which Sheldon expands the ”Rock-paper-scissors"game to include “lizard” and “Spock” to increase the randomness of the outcome.

<a href="https://www.youtube.com/watch?v=iSHPVCBsnLw"><img src="https://img.youtube.com/vi/iSHPVCBsnLw/0.jpg" width="300"></a>

