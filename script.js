class Game{
	constructor(){
		Game.c.beginPath()
		Game.c.fillStyle='black'
		Game.c.fillRect(0,0,cnv.width,cnv.height)
		this.move()
		this.snake=new Snake
		this.F=new Food

		this.set=setInterval(()=>{
			Game.c.beginPath()
			Game.c.fillStyle='black'
			Game.c.fillRect(0,0,cnv.width,cnv.height)
			this.snake.update()
			this.F.show()
			this.Gover()
			if( this.snake.arr[this.snake.arr.length-1].y==this.F.y*20 && 
				this.snake.arr[this.snake.arr.length-1].x==this.F.x*20 ) {
					this.F.update()
					this.snake.count++
					this.F.qanak++	
			}
		}, 200)
	}
	move(){
		window.addEventListener('keydown',(e)=>{
			if(e.key=='ArrowRight'){
				if(this.snake.vx!=-1){
					this.snake.vx=1
					this.snake.vy=0
				}
			}
			if(e.key=='ArrowLeft'){
				if(this.snake.vx!=1){
					this.snake.vx=-1
					this.snake.vy=0
				}
			}
			if(e.key=='ArrowDown'){
				if(this.snake.vy!=-1){
					this.snake.vx=0
					this.snake.vy=1
				}
			}
			if(e.key=='ArrowUp'){
				if(this.snake.vy!=1){	
					this.snake.vx=0
					this.snake.vy=-1
				}
			}
		})
	}
	Gover(){
		if(this.snake.arr[this.snake.arr.length-1].y<0 || 
		   this.snake.arr[this.snake.arr.length-1].y>600 ||
		   this.snake.arr[this.snake.arr.length-1].x<0 ||
		   this.snake.arr[this.snake.arr.length-1].x>600 ) {
					Game.c.font = "50px Verdana";
					Game.c.fillText('GAME OVER',130,250) 
					Game.c.fillText(this.F.qanak,280,350)
					clearInterval(this.set)
		}
		for(let i=0; i<this.snake.arr.length-1 ;i++){
			if(this.snake.arr[this.snake.arr.length-1].y==this.snake.arr[i].y &&
			   this.snake.arr[this.snake.arr.length-1].x==this.snake.arr[i].x){
					Game.c.font = "50px Verdana";
					Game.c.fillText('GAME OVER',130,250)
					Game.c.fillText(this.F.qanak,280,350)
					clearInterval(this.set)
			}
		}
	}
}

Game.c=cnv.getContext('2d')


class Snake{
	constructor(){
		this.x=0
		this.y=-20
		this.vx=0
		this.vy=1
		this.count=3
		this.arr=[]
		this.image=new Image()
		this.image.src='z.png'
		this.image1=new Image()
		this.image1.src='oc.png'
	}
	show(){
		this.arr.push({x:this.x , y:this.y})
		if(this.arr.length>this.count){
			this.arr.shift()
		}
		for(let i=0 ; i<this.arr.length-1 ; i++ ){
			Game.c.drawImage(this.image,this.arr[i].x,this.arr[i].y,20,20)
			Game.c.drawImage(this.image1,this.arr[this.arr.length-1].x,this.arr[this.arr.length-1].y,20,20)
		}
	}
	update(){
		this.x+=this.vx*20
		this.y+=this.vy*20
		this.show()
	}
}

class Food{
	constructor(){
		this.qanak=0
		this.x=Math.round(Math.random()*29)
		this.y=Math.round(Math.random()*29)
	}
	show(){
		Game.c.fillStyle='red'
		Game.c.fillRect(this.x*20,this.y*20,10,10)
	}
	update(){
		this.x=Math.round(Math.random()*29)
		this.y=Math.round(Math.random()*29)
	}
}

let a=new Game()