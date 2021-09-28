import { Component} from "react";
import Square from './Square'
class Board extends Component{
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      isPlayerX:true,
      winner:null,
      history:[]
    }
  }
  handleSquare(row=0,col=0){
    let { squares,isPlayerX,winner} = this.state
    
    if(squares[ 3*row + col]){
      return
    }
    squares[ 3*row + col] = isPlayerX?'X':'O'
    let currentWinner = this.showWinner(squares)
    if(winner){
      console.log('we have a winner',winner)
      return
    }
    this.addHistory(squares)
    this.setState({
      squares,
      isPlayerX:!isPlayerX,
      winner:currentWinner,
    })
  }
  addHistory(params=null){
    const temp = this.state.history
    const item = JSON.parse(JSON.stringify(params))
    temp.push(item)
    this.setState({
      history:temp
    })
  
  }
  resetAllSquare(){
    this.setState({
      squares:Array(9).fill(null),
      isPlayerX:true,
      winner:false,
      history:[]
    })
  }
  showWinner(squares){
    let possibilitiesOfWinner = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    let winner = null
    possibilitiesOfWinner.forEach((ele,idx)=>{
      if(squares[ele[0]] === squares[ele[1]] && squares[ele[1]] === squares[ele[2]]){
        winner = squares[ele[0]] !== "X"?squares[ele[0]] === "O"?'O':null:"X"
      }
    })
    return winner
  }
  stepBack(index){
    let { history } = this.state
    let temp = Object.assign(history[index])
    this.setState({
      squares:temp
    })
  }
  render(){
    let { squares,isPlayerX,winner,history } = this.state
    let squareContainer = [[],[],[]]
    squares.forEach((item,index)=>{
      let rowIndex = parseInt(index/3)
      squareContainer[rowIndex].push(item)
    })
    let squareAll = []
    squareContainer.forEach((item,index)=>{
      let squareRow = []
      item.forEach((ele,idx)=>{
        squareRow.push(<Square value={ele} key={`${index}-${idx}`} row={index} col={idx} handleSquare={this.handleSquare.bind(this)}></Square>)
      })
      squareAll.push(<div key={index} className={'square_row'}>{squareRow}</div>)
    })
    
    
    return (
      <div className={'square_board'}>
        <p className={'player_note'}>{ winner ?`the winner is :${winner}` :`next player is :${isPlayerX?'X':'O'}`}</p>
        
        <div>
          {squareAll}
        </div>
        <ul className={'operation_list'}>
          {history.map((item,index)=>{
            return (
              <li onClick={()=>{this.stepBack(index)} } key={'oprate'+index}>step:{index+1}</li>
            )
          })}
        </ul>
        <button
          className={'re_play'}
          onClick={()=>{this.resetAllSquare()}}
        >
          RePlay
        </button>
      </div>
    )
  }
}
export default Board
