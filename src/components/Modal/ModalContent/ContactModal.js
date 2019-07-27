import classnames from 'classnames';
import React, { Component } from 'react';
import ModalWrapper from '../ModalWrapper';

class ContactModal extends Component {
  state = {
    name: '',
    _replyto: '',
    content: '',
    error: false
  };

  onSubmit = e => {
    const { name, _replyto, content } = this.state;
    if (!name || !_replyto || !content) {
      e.preventDefault();
      this.setState({ error: true });
    }
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { error } = this.state;
    const contactClassNames = classnames('Contact', {
      'Contact--error': error
    });
    return (
      <ModalWrapper {...this.props} width={1000} showOk={false}>
        <div className={contactClassNames}>
          <form
            onSubmit={this.onSubmit}
            action="https://formspree.io/brandon.k.chung@gmail.com"
            method="POST"
            className="Contact__form"
          >
            <label className="Contact__field" htmlFor="name">
              <span className="Contact__label">Name</span>
              <input
                onChange={this.onChangeHandler}
                className="Contact__input"
                type="text"
                id="name"
                name="name"
                placeholder="ex. John Doe"
              />
            </label>

            <label className="Contact__field" htmlFor="email">
              <span className="Contact__label">Email</span>
              <input
                onChange={this.onChangeHandler}
                className="Contact__input"
                type="email"
                id="email"
                name="_replyto"
                placeholder="ex. john.doe@site.com"
              />
            </label>
            <label className="Contact__field" htmlFor="content">
              <span className="Contact__label">Content</span>
              <textarea
                onChange={this.onChangeHandler}
                className="Contact__input Contact__input--textarea"
                type="text"
                id="content"
                name="content"
                placeholder="ex. Brandon, I would like to know if..."
              />
            </label>
            <button
              className="Contact__input Contact__input--submit"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </ModalWrapper>
    );
  }
}
export default ContactModal;
