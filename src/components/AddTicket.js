import React from 'react';
import { TextArea, Form, Message} from 'semantic-ui-react';
import Dropdown from './custom-dropdown/dropdown/Dropdown';
import { getDate } from '../utils/date/dates';

class AddTicket extends React.Component {
  state = {
    date: getDate(),
    ticket: {
      createdOn: getDate('UTC'),
      createdBy: this.props.user,
      subject: '',
      description: '',
      priority: '',
      status: '',
      department: '',
      logs: [],
    },
  };

  handleChange = (e) => {
    let name = e.target.name;
    name = name.toLowerCase();
    this.setState({
      ...this.state,
      ticket: {
        ...this.state.ticket,
        [name]: e.target.value,
      },
    });
  };

  handleDropdown = (name, value) => {
    name = name.toLowerCase();
    this.setState({
      ...this.state,
      ticket: {
        ...this.state.ticket,
        [name]: value,
      },
    });
  };

  checkTicket = () => {
    const { subject, description, priority, status, department } =
      this.state.ticket;
    if (!subject || !description || !priority || !status || !department) {
      this.setState({ error: true });
      return;
    } else {
      this.setState({ error: false });
      this.props.saveTicket(this.state.ticket);
    }
  };

  render() {
    const {
      ticket: { createdOn, createdBy }, error,
    } = this.state;
    return (
      <div className="ui column">
        {error && (
          <Message negative>
            <Message.Header>Error</Message.Header>
            <p>Please fill in Subject and Body and choose Department, Priority and Status before submitting the ticket.</p>
          </Message>
        )}        
        <div style={styles.container}>
          <div className="ui input header" style={styles.input}>
            <input
              type="text"
              placeholder="SUBJECT"
              maxLength="100"
              name="Subject"
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <Form style={styles.input}>
            <TextArea
              placeholder="description"
              style={styles.textArea}
              name="Description"
              onChange={(e) => this.handleChange(e)}
            />
          </Form>
        </div>
        <div style={styles.container}>
          CREATED ON: {createdOn} BY: {createdBy}
        </div>
        <div className="ui three column centered grid">
          <div style={styles.dropdowns} className="column">
            <Dropdown
              customBtnStyle={{
                color: 'white',
                backgroundColor: '#a5673f',
                borderColor: '#a5673f',
              }}
              customIconStyle={{
                borderTop: '4px solid white',
                borderLeft: '4px solid transparent',
                borderRight: '4px solid transparent',
              }}
              customdropdownListStyle={{
                position: 'absolute',
                zIndex: '1',
                color: 'black',
                backgroundColor: 'white',
                textAlign: 'left',
              }}
              customLiStyle={{
                padding: '5px',
              }}
              placeholder="Department"
              choices={this.props.departments.map((choice) => choice)}
              name="Department"
              handleChoice={(choice) =>
                this.handleDropdown('department', choice)
              }
            />
          </div>
          <div style={styles.dropdowns} className="column">
            <Dropdown
              customBtnStyle={{
                color: 'white',
                backgroundColor: '#db2828',
                borderColor: '#db2828',
              }}
              customIconStyle={{
                borderTop: '4px solid white',
                borderLeft: '4px solid transparent',
                borderRight: '4px solid transparent',
              }}
              customdropdownListStyle={{
                position: 'absolute',
                zIndex: '1',
                color: 'black',
                backgroundColor: 'white',
                textAlign: 'left',
              }}
              customLiStyle={{
                padding: '5px',
              }}
              placeholder="Priority"
              choices={this.props.priorities.map((choice) => choice)}
              name="Priority"
              handleChoice={(choice) => this.handleDropdown('priority', choice)}
            />
          </div>
          <div style={styles.dropdowns} className="column">
            <Dropdown
              customBtnStyle={{
                color: 'white',
                backgroundColor: '#21BA45',
                borderColor: '#21BA45',
              }}
              customIconStyle={{
                borderTop: '4px solid white',
                borderLeft: '4px solid transparent',
                borderRight: '4px solid transparent',
              }}
              customdropdownListStyle={{
                position: 'absolute',
                zIndex: '1',
                color: 'black',
                backgroundColor: 'white',
                textAlign: 'left',
              }}
              customLiStyle={{
                padding: '5px',
              }}
              placeholder="Status"
              choices={this.props.statuses.map((choice) => choice)}
              name="Status"
              handleChoice={(choice) => this.handleDropdown('status', choice)}
            />
          </div>
        </div>
        <div className="ui two column centered grid" style={styles.container}>
          <div
            className="ui brown label button column"
            onClick={() => this.checkTicket()}
            style={styles.dropdowns}
          >
            <i className="paper plane outline icon big"></i>SEND
          </div>
          <div
            className="ui label button column"
            onClick={this.props.cancel}
            style={styles.dropdowns}
          >
            <i className="times circle outline icon big"></i>
            CANCEL
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    marginTop: '10px',
    marginBottom: '10px',
  },
  input: {
    minWidth: '100%',
  },
  textArea: {
    minWidth: '100%',
    marginBottom: '50px',
  },
  ticketActions: {
    width: '150px',
  },
  dropdowns: {
    width: '150px',
  },
};

export default AddTicket;
