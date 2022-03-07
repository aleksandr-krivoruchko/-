let lastRenderTime = 0;
const SNAKE_SPEED = 3;
const field = document.querySelector(".field");
let snakeBody = [
{x:11, y:11},
]
let inputDirection = {x:0, y:0}
let lastInputDirection = {x:0, y:0}

//===обработчик нажатия на стрелки============
window.addEventListener('keydown', e => {

	switch (e.key) {
		case 'ArrowUp':
		if (lastInputDirection.y !== 0) break
		inputDirection = {x:0, y:-1}
			break;

		case 'ArrowDown':
		if (lastInputDirection.y !== 0) break
		inputDirection = {x:0, y:1}
			break;

		case 'ArrowRight':
		if (lastInputDirection.x !== 0) break
		inputDirection = {x:1, y:0}
			break;

		case 'ArrowLeft':
		if (lastInputDirection.x !== 0) break
		inputDirection = {x:-1, y:0}
			break;

		default:
			break;
	}
})


//===== функция отвечающая за управление змейки ==========
function update() {
	const input = inputDirectionFn();

	for(let i = snakeBody.length - 2; i >= 0; i-=1){
		snakeBody[i + 1] = {...snakeBody[i]};
	}
		snakeBody[0].x += input.x;
      snakeBody[0].y += input.y;
}

//====== функция отвечающая за рендер змейки=========
function render(field) {
			field.innerHTML='';

	snakeBody.forEach(segment => {
		const snakeEl = document.createElement("div");
		snakeEl.style.gridRowStart = segment.y;
		snakeEl.style.gridColumnStart = segment.x;
		snakeEl.classList.add("snake");
		field.appendChild(snakeEl);
	})
}

//====== функция отвечающая за направление змейки=========
function inputDirectionFn() {
	lastInputDirection = inputDirection;
	return inputDirection;
}

//===запуск игры============
function main(currentTime) {
	window.requestAnimationFrame(main);
	const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
	if(secondsSinceLastRender < 1 / SNAKE_SPEED) return;
	lastRenderTime = currentTime;

	update();
	render(field);
}
window.requestAnimationFrame(main)
