import { useState,UseEffect } from 'react';
import Axios from 'axios';
import './AddMeeting.css';

const AddMeeting = (props) => {

const [teamId,setTeamId] = useState();
const [startDateTime,setStartDateTime] = useState('');
const [endDateTime,setEndDateTime]= useState('');
const [description,setDescription]= useState('');
const [meetingRoom,setMeetingRoom]= useState('');

const submitMeeting = () => {
    Axios.post("http://localhost:5678/api/insert",{
        team_id : teamId,
        start_date_time : startDateTime,
        end_date_time : endDateTime,
        meeting_description : description,
        meeting_room : meetingRoom
    })
    // .then(res => res.data()).then(res =>props.setTeamList(res.data) )
    // props.setTeamList
        // setTeamListt([
        //     ...teamList, {the added team information}
        // ]);
}




    return (
        <div>
            <div className = 'form'>
            <label>Team Id:</label>
            <input type="number" name="teamID" onChange = {(e)=> {
                setTeamId(e.target.value)
            }} />
            <label>Start date and time:</label>
            <input type="datetime-local" id="meeting-start-time" name="startTime" onChange = {(e)=> {
                setStartDateTime(e.target.value)
            }} />
            <label>End date and time:</label>
            <input type="datetime-local" id="meeting-end-time" name="endTime" onChange = {(e)=> {
                setEndDateTime(e.target.value)
            }} />
            <label>Meeting Description:</label>
            <input className='description' type="text" name="meetingDescription" onChange = {(e)=> {
                setDescription(e.target.value)
            }} />
            <label>Meeting room:</label>
            <input type="text" name="meetingRoom" onChange = {(e)=> {
                setMeetingRoom(e.target.value)
            }} />

            <button onClick = {submitMeeting}>Submit meeting request</button>

            </div>
        </div>
    )
}

export default AddMeeting;