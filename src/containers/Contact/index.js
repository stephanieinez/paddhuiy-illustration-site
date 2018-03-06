import React, { Component } from 'react';
import { ContactForm } from '../../components';

class Contact extends Component {
  contactFromSubmit = (submission) => {
    const { email: sendToMail } = 'stephanie.tassone@gmail.com';
    const { email, message } = submission;

    const messageToSend = `Message: ${message} `;

    this.props.sendEmail({
      send_to: sendToMail,
      reply_to: email,
      message: messageToSend,
    });
  };

  render() {
    return (
      <div>
        <ContactForm
          content={this.props.contactContent}
          image={this.props.contactImage}
          loadingMail={this.props.loadingMail}
          mailError={this.props.mailError}
          mailSuccess={this.props.mailSuccess}
          submitForm={this.contactFromSubmit}
        />
      </div>
    );
  }
}

export default Contact;
