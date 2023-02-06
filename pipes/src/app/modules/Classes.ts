export class Person{

  constructor(){}

  name:string="Anthony";
  age:number=22;
  height:any="165cm"
  weight:any="55kg"
  qual:string="UG"


  public getinfo():any{
    return "Name : "+this.name+" Age : "+this.age+" Height : "+this.height+" Weight : "+this.weight+" Qualification : "+this.qual;


  }

}
