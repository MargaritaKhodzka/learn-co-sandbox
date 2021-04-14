class Tickler extends React.Component {
  tickle = () => {
    console.log('Tee hee!')
  }
  
  render() {
    return (
      <button onCLlick={this.tickle}>Tickle me!</button>
    )
  }
}