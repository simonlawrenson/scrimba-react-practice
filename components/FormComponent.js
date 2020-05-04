import React from "react"

function FormComponent(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        name="firstName"
        placeholder="First name"
        onChange={props.handleChange}
        value={props.data.value}
      />
      <br />
      <input
        type="text"
        name="lastName"
        placeholder="Last name"
        onChange={props.handleChange}
        value={props.data.value}
      />
      <h1>{props.data.firstName} {props.data.lastName}</h1>
      
      <textarea
        name=""
        value={props.data.value}
        onChange={props.handleChange}
        />
      <br />
      <label>
        <input
          type="checkbox"
          name="isFriendly"
          checked={props.data.isFriendly}
          onChange={props.handleChange}
        />
        is Friendly?
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={props.data.gender === "male"}
          onChange={props.handleChange}
        />
        Male
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={props.data.gender === "female"}
          onChange={props.handleChange}
        />
        Female
      </label>
      <h2>You are a {props.data.gender}</h2>
      <br />
      <select
        name="favColor"
        value={props.data.favColor}
        onChange={props.handleChange}>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
      </select>
      <h3>Your favourite colour is {props.data.favColor}</h3>

      <button>Submit</button>
    </form>
  )
}

export default FormComponent