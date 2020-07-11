import React, {Component} from 'react';
import axios from 'axios';

import StudentList from './StudentList.js' 
import SingleStudent from './SingleStudent.js' 
import NewStudent from './NewStudent'

export default class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            students: [],
            selectedStudent : {}
        }

        this.selectStudent = this.selectStudent.bind(this)
        this.addStudent = this.addStudent.bind(this)

    }

    componentDidMount(){
        this.getStudents()
    }
    addStudent(data){   
        console.log("made it to addStudent", data)
        this.setState({
            students: [...students, data]
        })
    }
    getStudents(){
        console.log("fetching")
        axios.get('/student')
        .then(res => this.setState({students: res.data}))
        .catch(console.error)
    }

    selectStudent(student) {
        return this.setState({
            selectedStudent : student
        })
    }

    render(){
        return (
            <div>
                <h1>Students</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Tests</th>
                        </tr>
                    </thead>
                    < StudentList students={this.state.students} selectStudent={this.selectStudent} />
                </table>
                {
                    this.state.selectedStudent.id ? <SingleStudent student={this.state.selectedStudent} /> : null
                }
                <NewStudent addStudent={this.addStudent}></NewStudent>
               
            </div>
        )
    }
}