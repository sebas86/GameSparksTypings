# GameSparksTypings
TypeScript typings for GameSparks Cloud Code API.

Based on https://github.com/ajinkyanazare/GameSparksTypings.

## How to use

You can use *npm*:
```bash
npm install --save-dev git+https://github.com/sebas86/GameSparksTypings.git
```

In this case please make sure you have add *node_modules/@types* to *typeRoots* in your *tsconfig.json*:
```json
{
  "compilerOptions": {
    "typeRoots": [
      "node_modules/@types"
    ]
  }
}
```

## Known problems

GameSparks has it's own `require` and `requireOnce` global functions and TypeScript will emit warnings or errors when see for example Node.js `require` declaration. Also in your project additional typings probably will be added automatically as dependencies according to some tools which you want to use. In this case you can provide strict list of typings which you want to use, just add to your *tsconfig.json* array with required typing directory names:
```json
{
  "compilerOptions": {
    "types": [
      "gamesparks-cloud-code-api"
    ]
  }
}
```

## How to update typings

Clone repository and make changes, push, done. ;)

## History

Original Typings from:
https://github.com/JEphron/gamesparks-typings
