# tic-tac-toe-react

great game.

## Installation

```
npm i ~~~
```

## TypeScript Support

```
npm i -D @types/~~~
```

## view

![img](https://github.com/bokotomo/tic-tac-toe-react/blob/main/docs/tictactoeThumb.jpg?raw=true 'img')

# Customize

props.

## squareSize

```
<TicTacToe squareSize={2} />
<TicTacToe squareSize={5} />
<TicTacToe squareSize={10} />
```

![img](https://github.com/bokotomo/tic-tac-toe-react/blob/main/docs/tictactoeThumbSize.jpg?raw=true 'img')

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
