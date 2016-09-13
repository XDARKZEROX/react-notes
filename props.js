var Caja = React.createClass({
    getDefaultProps: function(){

        return {
           // colorIndex: -1
        }

    },
    getInitialState: function(){
       console.log(this.props.colores);
       return {
           estilo: {
           backgroundColor: "blue",
           weight: 300,
           height: 200,
           color: "white",
           textAlign: "center"
           },
           myColorIndex: -1
       }
    },
    actualizar: function(){


        console.log("actualizando")
        this.setState({
            myColorIndex: this.state.myColorIndex+1
        })

        console.log(this.state.myColorIndex);

    },
    componentWillReceiveProps: function(nextProp){
        console.log('here');
        console.log(nextProp);
    },
    render: function(){
        return(
            <div style={this.state.estilo} onClick={this.actualizar}>
               Cajita actualizable
            </div>

        )
    }


});


ReactDOM.render(<Caja colores="Red, Peru, Salmon, DarkMagenta"/>
    , document.getElementById('main'))
