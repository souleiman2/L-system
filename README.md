# L-system

L-System's, also commonly called a Lindenmayer system, is a set of rules that serve the purpose of designing fractal images**. The rules are as follows for 2 dimensionnal drawing (which is what I restrained my engine to do):

 1) "F" -> draw a unit <br> 
 2) "+" -> turn in a counter-clockward mouvement in a theta angle<br> 
 3) "-" -> turn in a clockward mouvement in a theta angle<br> 
 3) "[" -> save the state of the point<br> 
 4) "]" -> go back to the last saved state<br> 

Finally, the options that are available for the user is to either choose one of the 7 fractal shape that are available in a press of a button or to be imaginative and to try their own set of rules with this notation.



**For those of you that do not know what is a fractal : briefly, it a shape or a pattern that can be observe inside the same pattern.
For example: you can see a tree as being a fractal since the trunk is more or less similar to one of his branch. For more information, I would suggest that you dig into this wikipedia page (<a href="https://en.wikipedia.org/wiki/Fractal">https://en.wikipedia.org/wiki/Fractal</a>).
