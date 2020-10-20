interface ISimpleGenric<T, AT> {
    value: T;
    data: AT;
    json: AT;
  }
  
  const simpleValue: ISimpleGenric<string, number> = {
    value: 'sdsdsd',
    data: 1212,
    json: 1212
  };
  
  
  const anotherValue: ISimpleGenric<string, {value: string, id: number}> = {
    value: 'sdsdsds',
    data: {id: 12, value: 'sdsds'},
    json: {id: 12, value: 'sdsds'},
  }


  interface Examplegeneric<V,AV>{
     name:V,
     complex:AV
  }

  const complexInfo:Examplegeneric<string,{value:string,id:number}>={
      name:'bala',
      complex:{id:1,value:'hello all'}
  }