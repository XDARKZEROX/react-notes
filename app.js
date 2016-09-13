var AppStates = React.createClass({
  getDefaultProps: function(){
    return {
        backgroundColor: "Turquoise",
        height: 200,
        width: 200

      }

  },
  //Componente es nativo de react
  componentWillMount: function(){

      console.log('El componente esta a punto de montarse');
  },
  componentDidMount: function(){
      console.log('El componente se ha montado')
  },
  render: function(){
    return(
        <div>
            <div style={this.props}></div>
                <section style={this.props}>
        </section>
            </div>

    )
  }
})

ReactDOM.render(<AppStates/>
                , document.getElementById('main'))

var Component = document.getElementsByTagName('div')[0];

Component.onclick = function(){
    ReactDOM.unmountComponentAtNode(document.body);

    console.log('component eliminado')
}

