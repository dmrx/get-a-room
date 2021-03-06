import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import CreateOrganization from './../CreateOrganization.jsx';

class CreateBuilding extends Component {
  constructor(props) {
		super(props);
		this.state = {
			buildings: [],
			selectedBuilding: undefined,
			rooms: [],
      buildingChange: '',
      addRoom: '',
			selectedRoom: undefined
		}


	}



  componentDidMount() {
		this.loadBuildings()
  }


	// Load all BUILDINGS and initialize selected to 1st element
	loadBuildings = () => {
	  return $.get("/buildings", (data) => {
			 this.setState({buildings: data, selectedBuilding:data[0].name})
			 console.log("Building Data", data)
			 this.loadRooms(this.state.selectedBuilding)
	  })
	}

  // FIXME -- ROOM LOAD ON SELECTION IS ALWAYS OFF BY ONE STATE
	selectBuilding = (event, index, value) => {
		this.setState({selectedBuilding: value})
		this.loadRooms(value)
  };


	// Load all ROOMS and initialize selected to 1st element
	loadRooms = (building) => {
		let url = "/buildings/" + this.state.selectedBuilding;
		return $.get(url, (data) => {
			 this.setState({rooms: data.rooms, selectedRoom:data.rooms[0].name})
			 console.log("my room data is:", data.rooms)
	  })
	}

  selectRoom = (event, index, value) => {
		this.setState({selectedRoom: value})
  };


 render() {
    return (

			<div className={'container'}>
				<CreateOrganization submitCreateOrg={this.submitCreateOrg} />
			</div>
		)
 }
}

export default CreateBuilding;
