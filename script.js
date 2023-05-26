class Temperature{
constructor(TemperatureInit){
this.temperature=TemperatureInit


}
convertoF(){
return (this.temperature*1.8)+32

}
converToKeivin(){
  return(this.temperature+273.15)
}

}
let temp=new Temperature(25)
console.log('độ F',temp.convertoF())
console.log('độ K',temp.converToKeivin())
