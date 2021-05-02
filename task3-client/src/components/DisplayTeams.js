import { useState, useEffect} from 'react'
import './DisplayTeam.css';
import Axios from 'axios';


const DisplayTeams = (props) => {

    const [teamList,setTeamList] = useState([]);
    const [teamSelected,setTeamSelected] = useState([]);

    useEffect(()=> {
        Axios.get('http://localhost:5678/api/get').then((response)=> setTeamList(response.data));
    },[])

    const selectTeam = (team_id)=>{
        console.log(team_id);
        Axios.get(`http://localhost:5678/api/meetings/${team_id}`).then((response)=> setTeamSelected(response.data));
    }

    return (
        <div>
            <div>
                <h1>Teams List</h1>
            </div>
            <div>
            {teamList.map((val)=>{
                return (
                <div key={val.team_id} className="card">
                    <h1>Team ID: {val.team_id}</h1> 
                    <h1> Team Name: {val.team_name}</h1>
                    <button onClick={()=>{selectTeam(val.team_id)}}>Show meetings</button>
                
                    
                </div>);
            })}
        
            
            </div>

            { <div>
                {teamSelected.map((team)=> {
                    return (
                        <div key={team.meeting_id} className="card2">
                            <p>Meeting ID: {team.meeting_id}</p>
                            <p>Team ID: {team.team_id}</p>
                            <p>Meeting start: {team.meeting_start_time_date}</p>
                            <p>Meeting end: {team.meeting_end_time_date}</p>
                            <p>Description: {team.meeting_description}</p>
                            <p>Meeting Room: {team.meeting_room}</p>
                        </div>
                    )
                })}
            </div> }
            
        </div>
    )
}

export default DisplayTeams