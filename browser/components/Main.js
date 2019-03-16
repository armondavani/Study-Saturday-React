import React from 'react';
import axios from 'axios';
import StudentRow from './StudentRow';


export default class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      students: []
    }
  }

  async componentDidMount() {
    try {
      const response = await axios.get('/student');
      this.setState({ students: response.data} );
    } catch (error) {
      console.log(error);
    }

  }

  render() {
    return (
      <div id="main">
        <table>
          <thead>
            <tr>
              <th>Students</th>
            </tr>
          </thead>
          <tbody>
            {this.state.students.map((student) => {
              return <StudentRow key={student.id} student={student}/>
            })}
          </tbody>

        </table>



      </div>
    )
  }


}


