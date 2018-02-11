import React, { Component } from 'react';
import './contact-form.css';

class ContactForm extends Component {
  state = {
    email: '',
    message: '',
    emailError: '',
  };

  handleInputChange = id => event =>
    this.setState({ [id]: event.target.value });

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.email) {
      return this.setState({
        emailError: 'Please enter your email address',
      });
    }
    return this.setState({ emailError: '' }, this.props.submitForm(this.state));
  };
  render() {
    const { email, message } = this.state;
    const { content, image } = this.props;
    return (
      <div className="contact-container">
        <div className="contact-form-container">
          <p>{content}</p>
          <form>
            <div>
              <label htmlFor="contact-email">Email</label>
              <div id="contact-email">
                <input
                  onChange={this.handleInputChange('email')}
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                />
              </div>
            </div>
            <div>
              <label htmlFor="contact-message">Message</label>
              <div>
                <textarea
                  onChange={this.handleInputChange('message')}
                  id="contact-message"
                  type="text"
                  name="message"
                  rows="10"
                  cols="40"
                  placeholder="Message"
                  value={message}
                />
              </div>
            </div>
            <div>
              <button type="submit" onClick={this.handleSubmit}>
                Send
              </button>
              {this.props.mailSuccess ? (
                <div className="mail-success">
                  Your message was successfully sent.
                </div>
              ) : null}
              {this.props.mailError ? (
                <div> {this.props.mailError} </div>
              ) : null}
              {this.props.loadingMail ? (
                <div className="mail-sending">...sending</div>
              ) : null}
            </div>
          </form>
        </div>
        <img src={image} alt="" className="contact-image" />
      </div>
    );
  }
}

export default ContactForm;
