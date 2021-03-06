import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class CreateUser extends React.Component {
  constructor(props) {
    super(props);
  }

  handleKeyPress = (e) => {
      if(e.key === 'Enter') {
        this.props.submitCreateUser();
      }
    }
    
  render() {
    return (
      <div className={'container'}>
          <TextField
            floatingLabelText="Username"
            name = "username"
            onChange =  {(input) => this.props.createdUsername(input)}
            id = "username"
          />
          <TextField
            floatingLabelText="Password"
            type="password"
            onChange =  {(input) => this.props.createdPassword(input)}
            id = "password"
          />
          <RaisedButton id="submit" secondary={true} label="Register" onClick={this.props.submitCreateUser} style={{display:'inline-block', marginLeft:20 + 'px', marginTop:5+'px'}} />
          <RaisedButton id="return" label="Login" onClick={this.props.backToLog} style={{display:'inline-block', float:'right', position:'relative', top:30 + 'px', right:30 +'px'}} />
        <div id="err">{this.props.createErr}</div>
      </div>
        
    );
  }
}