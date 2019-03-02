

let indiceSequence = 0;
const lineThickness = 10;

const c = document.querySelector("canvas");
c.width = window.innerWidth;
c.height = 150;
const ctx = c.getContext("2d");
ctx.fillStyle = "#B5C39A";



const sequence = [
	{
		direction: {
			x: 1,
			y: 0
		},
		startPoints: {
			x: 0,
			y: 60
		},
		endPoints: {
			x: 200,
			y: 60
		}
	},
	{
		direction: {
			x: 0,
			y: -1
		},
		startPoints: {
			x: 200,
			y: 60
		},
		endPoints: {
			x: 200,
			y: 40
		}
	},	
	{
		direction: {
			x: 1,
			y: 0
		},
		startPoints: {
			x: 200,
			y: 40
		},
		endPoints: {
			x: 410,
			y: 40
		}
	},
	{
		direction: {
			x: -1,
			y: 0
		},
		startPoints: {
			x: 1300,
			y: 80
		},
		endPoints: {
			x: 1000,
			y: 80
		}
	},
	{
		direction: {
			x: 0,
			y: -1
		},
		startPoints: {
			x: 1000,
			y: 80
		},
		endPoints: {
			x: 1000,
			y: 40
		}
	},	
	{
		direction: {
			x: -1,
			y: 0
		},
		startPoints: {
			x: 1000,
			y: 40
		},
		endPoints: {
			x: 950,
			y: 40
		}
	},
	{
		direction: {
			x: 0,
			y: -1
		},
		startPoints: {
			x: 600,
			y: 150
		},
		endPoints: {
			x: 600,
			y: 120
		}
	},
	{
		direction: {
			x: 1,
			y: 0
		},
		startPoints: {
			x: 600,
			y: 120
		},
		endPoints: {
			x: 750,
			y: 120
		}
	},	
	{
		direction: {
			x: 0,
			y: -1
		},
		startPoints: {
			x: 748,
			y: 120
		},
		endPoints: {
			x: 748,
			y: 50
		}
	}
]	
const drawPoint = (startPoints) => {
	ctx.fillRect(startPoints.x, startPoints.y, lineThickness, lineThickness);
}

const drawArrow = (sequence) => {
			const directionx = sequence[indiceSequence].direction.x;
			const directiony = sequence[indiceSequence].direction.y;
			
			const intervalId = setInterval(() => {
				drawPoint(sequence[indiceSequence].startPoints);
				sequence[indiceSequence].startPoints.x += (lineThickness* directionx);
				sequence[indiceSequence].startPoints.y += (lineThickness* directiony);
				if(sequence[indiceSequence].endPoints.x === sequence[indiceSequence].startPoints.x && sequence[indiceSequence].endPoints.y === sequence[indiceSequence].startPoints.y){
							clearInterval(intervalId);
							indiceSequence++;
							if(indiceSequence < sequence.length){
								drawArrow(sequence);
							}
				}
			},50);
}

drawArrow(sequence);


/*const titleTopOffset = document.querySelector("h1").offsetTop;
const titleLeftOffset = document.querySelector("h1").offsetLeft;*/
