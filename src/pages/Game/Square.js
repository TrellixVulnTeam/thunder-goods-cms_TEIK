
function  Square(props)    {
    let { row, col} = this.props
    return (
      <button
        className="square_item"
        onClick={ ()=>{this.props.handleSquare(row,col)} }
      >
        {this.props.value}
      </button>
    )
}
export default Square
