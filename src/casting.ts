//How to converter types in typescript

// use "namespace" if a variable with that name already exists
namespace casting {
    let idade: any = 25;
    //trate a idade como um número
    (idade as number).toFixed();
    (idade as string).length;
    
    //error
    (idade as string[]).forEach(x => {
        console.log(x)
    });

    //how to converter number to string
    let nome: string = 35 as unknown as string;
}
