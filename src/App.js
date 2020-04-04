import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="App">
      <h1>Assignment</h1>
      <ol>
      <li>Create TWO new components: UserInput and UserOutput</li>
      <li>UserInput should hold an input element, UserOutput two paragraphs</li>
      <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
      <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
      <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
      <li>Add a method to manipulate the state (=> an event-handler method)</li>
      <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
      <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
      <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
      <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
      </ol>
    </div>
  );
}

export default App;
