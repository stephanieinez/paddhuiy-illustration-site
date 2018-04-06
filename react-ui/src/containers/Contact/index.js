import React, { Component } from 'react';
import { ContactForm } from '../../components';

class Contact extends Component {
  state = {
    loadingMail: false,
    mailError: false,
    mailSuccess: false,
    disableButton: false,
  };

  contactFromSubmit = (submission) => {
    const { email, message } = submission;
    this.setState(
      {
        loadingMail: true,
        mailError: false,
        mailSuccess: false,
        disableButton: true,
      },
      () => {
        fetch('/api/email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            message,
          }),
        })
          .then(response => response.json())
          .then(() => {
            this.setState({
              loadingMail: false,
              mailSuccess: true,
              disableButton: false,
            });
          })
          .catch((error) => {
            this.setState({ mailError: true, disableButton: false });
            console.log(error);
          });
      },
    );
  };

  render() {
    return (
      <div>
        <ContactForm
          content={this.props.contactContent}
          image={this.props.contactImage}
          submitForm={this.contactFromSubmit}
          loadingMail={this.state.loadingMail}
          mailError={this.state.mailError}
          mailSuccess={this.state.mailSuccess}
          disableButton={this.state.disableButton}
        />
      </div>
    );
  }
}

export default Contact;
