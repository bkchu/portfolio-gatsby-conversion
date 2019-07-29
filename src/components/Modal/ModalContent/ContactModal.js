import classnames from "classnames"
import React, { Component } from "react"
import ModalWrapper from "../ModalWrapper"
import { navigate } from "gatsby"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}
class ContactModal extends Component {
  state = {
    name: "",
    _replyto: "",
    content: "",
    error: false,
    submissionError: false,
  }

  onSubmit = e => {
    const { name, _replyto, content } = this.state
    if (!name || !_replyto || !content) {
      this.setState({ error: true })
    } else {
      const form = e.target
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name"),
          ...this.state,
        }),
      })
        .then(() => navigate(form.getAttribute("action")))
        .catch(() => this.setState({ submissionError: true }))
    }
    e.preventDefault()
  }

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { error, submissionError } = this.state
    const contactClassNames = classnames("Contact", {
      "Contact--error": error,
    })
    return (
      <ModalWrapper {...this.props} width={1000} showOk={false}>
        <div className={contactClassNames}>
          {submissionError ? (
            <div className="Contact__error-container">
              <h2 className="Contact__error">
                Oops, an error appeared while submitting, sorry. Please reach
                out to my email!
              </h2>
            </div>
          ) : (
            <form
              name="contact"
              onSubmit={this.onSubmit}
              action="/"
              method="POST"
              data-netlify-honeypot="bot-field"
              data-netlify="true"
              className="Contact__form"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden className="Contact__form--hidden">
                <label>
                  Don’t fill this out:
                  <input name="bot-field" onChange={this.onChangeHandler} />
                </label>
              </p>
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
                  placeholder="ex. Brandon, let's grab coffee..."
                />
              </label>
              <button
                className="Contact__input Contact__input--submit"
                type="submit"
              >
                Send
              </button>
            </form>
          )}
        </div>
      </ModalWrapper>
    )
  }
}
export default ContactModal
