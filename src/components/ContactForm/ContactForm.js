import classnames from "classnames"
import React, { Component } from "react"
import { navigate } from "gatsby"
import Page from "../Page/Page"

class ContactModal extends Component {
  state = {
    name: "",
    replyto: "",
    content: "",
    error: false,
  }

  onSubmit = e => {
    const form = e.target
    const { name, replyto, content } = this.state
    e.preventDefault()

    if (!name || !replyto || !content) {
      this.setState({ error: true })
    } else {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": form.getAttribute("name"),
          name,
          replyto,
          content,
        }),
      })
        .then(() => navigate(form.getAttribute("action")))
        .catch(() => navigate("/error"))
    }
  }

  encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { error } = this.state
    const contactClassNames = classnames("Contact", {
      "Contact--error": error,
    })
    return (
      <Page>
        <div className={contactClassNames}>
          <h1 className="Contact__description">
            I like my conversation with coffee. <span role="img" aria-label="coffee emoji">☕</span>
          </h1>
          <form
            name="contact"
            onSubmit={this.onSubmit}
            action="/thanks/"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="Contact__form"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="Contact__field--hidden" hidden>
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
                name="replyto"
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
        </div>
      </Page>
    )
  }
}
export default ContactModal
