class Shape{
    constructor(color){
        this.color=color
    }
    paint(){
        console.log(`Painting the shape in${this.color}`)
    }

    getDescription() {
        return `A shape with color ${this.color}`;
    }


}




class Rectangle extends Shape{
    constructor(widht,height,color){
        this.width=widht;
        this.height=height;
        super(color)
    }
    area() {
        const area =this.width*this.height;
        return area
    }


    
}


class Cirlce extends Shape{
    constructor(radius,color){
        this.radius=radius
        super(color)
    }

    area(){
        const area= 2*3.14*this.radius*this.radius;
        return area
    }

    
}


const rect = new Rectangle(2,4,"blue")

const area = rect.area()
console.log(area)


const cir= new Cirlce(7)
const cir_area=cir.area()
console.log(cir_area)