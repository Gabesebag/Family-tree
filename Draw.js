//draw the family members from top to bottom, with the oldest generation at the top and the youngest generation at the bottom, and connect the family members with lines to show their relationships
function familytree(members) {
	let founder = getfounder(members)
	if (founder) {
		sketchfamilytree(founder, members, 0, windowWidth / 2, 60)
	}
}

function drawmember(person, x, y) {
  textAlign(CENTER);
  text(person.name, x, y);
}

function sketchfamilytree(founder, members, generation, x, y) {
	// Draw the current member
	drawmember(founder, x, y)

	// Get the children of the current member
	let children = getchildren(founder, members)

	// Calculate the positions of the children
	let childX = x - (children.length - 1) * HorzSpacing / 2
	let childY = y + VertSpacing

	// Draw lines connecting the current member to their children
	for (let i = 0; i < children.length; i++) {
		line(x, y, childX + i * HorzSpacing, childY)
	}

	// Recursively draw the family tree for each child
	for (let i = 0; i < children.length; i++) {
		sketchfamilytree(children[i], members, generation + 1, childX + i * HorzSpacing, childY)
	}

// Draw indicator of the relation between 2 people
function Indicator(thisperson, thatperson) {
	// Check if both people have a drawn position
	if (thisperson.drawPosition && thatperson.drawPosition) {
		drawArrow(thisperson.drawPosition, thatperson.drawPosition.sub(thisperson.drawPosition), 'red')
	}
}



    // Draws an arrow between two vectors.
function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(3);
  fill(myColor);
  translate(base.x, base.y);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}
}