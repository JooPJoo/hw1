var bubbles = [];

function setup() 
	{
  		createCanvas(800, 600);    //canvasSize in pixels

  			for (var i = 0; i < 25; i++) //the amount of bubbles shown on screen
  				{        
    					var bubble = 
    						{
      							x: random(width),
      							y: random(height),
      							radius: random(10, 100)    //random bubble radius size specification range min to max
    						};
    					bubbles.push(bubble);    //creating and setting the function of depressing the left mouse button
  				}
	}

function draw() 
	{
  		background(100);    //canvas/background color

  			for (var i = 0; i < bubbles.length; i++) 
				{
    					var bubble = bubbles[i];

    					if (dist(mouseX, mouseY, bubble.x, bubble.y) < bubble.radius) 
						{
      							if (mouseIsPressed) 
								{
        								bubbles.splice(i, 1);    // remove this bubble!
      								}
      							fill(0, 200, 100, 200);    //fill color of bubbles when mouse icon is hovering over bubble (R,G,B,Alpha(transparencyColor))
    						} 	
							else 
								{
      									fill(255, 220, 200, 200);    //fill color of bubbles when mouse icon is not hovering over bubble
    								}

    					ellipse(bubble.x, bubble.y, bubble.radius * 2);    //multiplier for bubble size in radius 
    					bubble.x += random(-1, 1);    //vigorous motion of bubble in x or horizontal axis in pixel length
    					bubble.y += random(-10, 10);    //virgorous motion of bubble in y or vertical axis in pixel length
  				}
	}
