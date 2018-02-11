import React from 'react';
import { ContactForm } from '../../components';

const Contact = ({ contactContent, contactImage }) => (
  <div>
    <ContactForm content={contactContent} image={contactImage} />
  </div>
);

// class Contact extends Component {
//   // componentWillMount() {
//   //   const { contactItems } = this.props;
//   //   if (contactItems.length <= 0) {
//   //     this.props.getContactItems();
//   //   }
//   // }
//   //
//   // contactFromSubmit = (submission) => {
//   //   const { email: sendToMail } = 'stephanie.tassone@gmail.com';
//   //   const { email, message } = submission;
//   //
//   //   const messageToSend = `Message: ${message} `;
//   //
//   //   this.props.sendEmail({
//   //     send_to: sendToMail,
//   //     reply_to: email,
//   //     message: messageToSend,
//   //   });
//   // };
//   render() {
//     return (
//       <div>
//         <ContactForm
//           loadingMail={this.props.loadingMail}
//           mailError={this.props.mailError}
//           mailSuccess={this.props.mailSuccess}
//           submitForm={this.contactFromSubmit}
//         />
//       </div>
//     );
//   }
// }

export default Contact;
