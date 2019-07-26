/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Col,
  Input,
} from 'reactstrap';
import { createRoom, roomCreated, getUsersList } from '../redux/actions';

class ModalCreateRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      addingPeople: [],
      roomName: '',
      nameError: '',
    };
  }

  onChangeRoomName = (event) => {
    this.setState({ roomName: event.target.value });
  }

  addHuman = (email) => {
    const { addingPeople } = this.state;
    if (addingPeople.includes(email)) {
      const index = addingPeople.indexOf(email);
      const arr = [...addingPeople];
      arr.splice(index, 1);
      this.setState({ addingPeople: arr });
      return;
    }
    this.setState({ addingPeople: [...addingPeople, email] });
  }

  toggle = () => {
    // const { roomCreated } = tis.state;
    const { modal } = this.state;
    this.setState({ modal: !modal, nameError: '', addingPeople: [] });
    this.props.roomCreated(false);
  }

  createRoom = () => {
    const { addingPeople, roomName } = this.state;
    const { email } = this.props;
    if (roomName.length === 0) {
      this.setState({ nameError: 'You have to enter name' });
      return;
    }
    if (addingPeople.length === 0) {
      this.setState({ nameError: 'You have to choose interlocutor' });
      return;
    }
    if (addingPeople.length > 0) {
      this.setState({ nameError: '' });
    }
    this.props.createRoom(addingPeople, roomName, email);
  }

  componentDidUpdate = () => {
    const { wasRoomCreated, clientsList } = this.props;
    if (wasRoomCreated) {
      this.toggle();
    }
    if (clientsList.length === 0) {
      this.props.getUsersList();
    }
  }

  render() {
    const { clientsList, email, error } = this.props;
    const { modal, nameError } = this.state;
    const domClientsList = clientsList.map((element) => {
      if (element !== email) {
        return (
          <FormGroup check key={element}>
            <Label check>
              <Input
                className="checkbox"
                type="checkbox"
                value={element}
                onClick={() => { this.addHuman(element); }}
              />
              {element}
            </Label>
          </FormGroup>
        );
      }
      return true;
    });
    return (
      <React.Fragment>
        <Button outline color="success" onClick={this.toggle}>Create room</Button>
        <Modal isOpen={modal}>
          <ModalHeader toggle={this.toggle}>Create room</ModalHeader>
          <ModalBody>
            <span className="name-error">{nameError || error}</span>
            <FormGroup row>
              <Label for="roomName" sm={3}>Room name</Label>
              <Col sm={9}>
                <Input type="text" id="roomName" placeholder="Enter room name" onChange={this.onChangeRoomName} />
              </Col>
            </FormGroup>
            {domClientsList}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.createRoom}>Create Room</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}

export default connect(state => ({
  connectionState: state.appStates.connectionState,
  email: state.user.email,
  clientsList: state.lists.clientsList,
  error: state.errors.error,
  wasRoomCreated: state.rooms.wasRoomCreated,
}),
{ createRoom, roomCreated, getUsersList })(ModalCreateRoom);
