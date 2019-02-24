import React, { Component } from 'react'


export default class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            form: {
                name: {
                  value: ''
                },
                email: {
                  value: ''
                },
                phone: {
                  value: ''
                },
                web: {
                    value: ''
                  },
                  text: {
                    value: 'COŚ'
                  }
            }

        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
      
        this.setState({
            form: {
              [name]: value
            }
        });
      
      }

    render() {

        console.log(this.state.form)

        return (
            <div id="contact">

            <h1>Contact Form</h1>

            <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" value={this.state.name} onChange={this.handleChange} />
                <br />
                <input type="text" name="email" placeholder="Your Email address" value={this.state.email} onChange={this.handleChange} />
                <br />
                <input type="text" name="phone" placeholder="Your Phone number" value={this.state.phone} onChange={this.handleChange} />
                <br />
                <input type="text" name="web" placeholder="Your Web Seit" value={this.state.web} onChange={this.handleChange} />
                <br />
                <textarea value={this.state.text} name="text" onChange={this.handleChange}/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        
        </div>
        )
    }
}
