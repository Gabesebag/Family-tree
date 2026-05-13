//draw the family members from top to bottom, with the oldest generation 
//at the top and the youngest generation at the bottom, and connect the 
//family members with lines to show their relationships
function familytree(members) {
	let founder = getfounder(members)
	if (founder) {
		sketchfamilytree(founder, members, 0, windowWidth / 2, 60, 0, windowWidth)
	}
}

function drawmember(person, x, y) {
	textAlign(CENTER);
	text(person.name, x, y);
	person.drawPosition = createVector(x, y);
}

function sketchfamilytree(founder, members, generation, x, y, segmentStart = 0, segmentEnd = windowWidth) {
	// Draw the current member
	drawmember(founder, x, y)

	// Get the children of the current member
	let children = getchildren(founder, members)
	if (children.length === 0) {
		return
	}

	let childY = y + VertSpacing
	let segmentWidth = (segmentEnd - segmentStart) / children.length

	for (let i = 0; i < children.length; i++) {
		let childSegmentStart = segmentStart + i * segmentWidth
		let childSegmentEnd = childSegmentStart + segmentWidth
		let childX = childSegmentStart + segmentWidth / 2

		line(x, y, childX, childY)
		sketchfamilytree(children[i], members, generation + 1, childX, childY, childSegmentStart, childSegmentEnd)
	}
}

// Draw an arrow from start point in the direction of the vector
function drawArrow(start, direction, color) {
	push();
	stroke(color);
	fill(color);
	let end = p5.Vector.add(start, direction);
	line(start.x, start.y, end.x, end.y);
	// draw arrowhead
	let angle = direction.heading();
	let arrowSize = 10;
	translate(end.x, end.y);
	rotate(angle);
	triangle(0, 0, -arrowSize, -arrowSize/2, -arrowSize, arrowSize/2);
	pop();
}

// Draw indicator of the relation between 2 people
function Indicator(thisperson, thatperson) {
	// Check if both people have a drawn position
	if (thisperson.drawPosition && thatperson.drawPosition) {
		drawArrow(thisperson.drawPosition, thatperson.drawPosition.sub(thisperson.drawPosition), 'red')
	}
}