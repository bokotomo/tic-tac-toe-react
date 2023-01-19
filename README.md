# tic-tac-toe-react

great game.  
[demo page](https://bokotomo.github.io/tic-tac-toe-react/)

## Installation

```
npm i ~~~
```

## TypeScript Support

```
npm i -D @types/~~~
```

## View

![img](https://github.com/bokotomo/tic-tac-toe-react/blob/main/docs/images/tictactoeThumb.jpg?raw=true 'img')

# Game Mode

```
// Friend mode
<TicTacToe gameMode={GameModeType.FRIEND} />
// AI mode
<TicTacToe gameMode={GameModeType.AI} />
```

# Customize

props.

## squareSize

```
<TicTacToe squareSize={2} />
<TicTacToe squareSize={5} />
<TicTacToe squareSize={10} />
```

![img](https://github.com/bokotomo/tic-tac-toe-react/blob/main/docs/images/tictactoeThumbSize.jpg?raw=true 'img')

## title

```
// Title is displayed.
<TicTacToe title="Tic Tac Toe" />

// Title is not displayed.
<TicTacToe />
```

## text

```
<TicTacToe
    title="custom title"
    startButtonTitle="start button title"
    textWinMe="You Win!"
    textWinEnemy="You Lose!"
    textDraw="Draw!"
/>
```

## color

```
<TicTacToe itemColor="orange" itemMarkColor="red" />
```

## styles

```
<TicTacToe buttonStyle={{ color: 'red', fontSize: 30 }} />
<TicTacToe itemStyle={{ borderRadius: 100 }} />
```

## Props List

| Props            | Type                                 | example               |
| ---------------- | ------------------------------------ | --------------------- |
| gameMode         | GameModeType.AI, GameModeType.FRIEND | GameModeType.AI       |
| title            | string                               | "title"               |
| startButtonTitle | string                               | "startButtonTitle"    |
| squareSize       | number                               | 5                     |
| textWinMe        | string                               | "textWinMe"           |
| textWinEnemy     | string                               | "textWinEnemy"        |
| textDraw         | string                               | "textDraw"            |
| itemColor        | string                               | "orange"              |
| itemMarkColor    | string                               | "red"                 |
| itemStyle        | CSSProperties                        | { borderRadius: 100 } |
| buttonStyle      | CSSProperties                        | { color: 'red' }      |

# Command

develop command

## demo

```
npm run demo
```

## build

```
npm run build
```
