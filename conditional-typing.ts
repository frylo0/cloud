// Welcome to the TypeScript Playground, this is a website
// which gives you a chance to write, share and learn TypeScript.

// You could think of it in three ways:
//
//  - A location to learn TypeScript where nothing can break
//  - A place to experiment with TypeScript syntax, and share the URLs with others
//  - A sandbox to experiment with different compiler features of TypeScript

const anExampleVariable = "Hello World"
console.log(anExampleVariable)

interface First{
    name: string
}
interface Second{
    email: string;
}


enum INTER_TYPES {
    First = 'First',
    Second = 'Second'
}

interface CompositInterface{
    [INTER_TYPES.First]: First,
    [INTER_TYPES.Second]: Second;
}


type TaregetInterface<T extends INTER_TYPES> = CompositInterface[T];


const kek: TaregetInterface<INTER_TYPES.First> = {
    name: 'kek'
}




// To learn more about the language, click above in "Examples" or "What's New".
// Otherwise, get started by removing these comments and the world is your playground.
  
