const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const connection = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'development_team_meetings'
})


const PORT = 5678;
const app = express();
app.use(cors());
app.use(express.json());

// app.get('/', function (req,res){
//     res.send('hello world');
// })


app.get('/api/get', (req,res)=>{
    const sqlSelect = "SELECT * FROM development_teams";
    connection.query(sqlSelect,(err,result)=> {
        res.send(result);
    });
})

app.post("/api/insert", (req,res) => {
    //console.log(req.body);
    const teamId = req.body.team_id;
    const startDateTime = req.body.start_date_time;
    const endDateTime = req.body.end_date_time;
    const meetingDescription = req.body.meeting_description;
    const meetingRoom = req.body.meeting_room;


    const sqlInsert = "INSERT INTO team_meetings (team_id,meeting_start_time_date,meeting_end_time_date,meeting_description,meeting_room) VALUES (?,?,?,?,?)";
    connection.query(sqlInsert, 
        [
            teamId,
            startDateTime,
            endDateTime,
            meetingDescription,
            meetingRoom
        ], (err,result)=> {
        console.log(err,result);
    })
})

app.get('/api/meetings/:team_id', (req,res)=>{
    const {team_id} = req.params;
    const sqlSelectTeamMeetings = "SELECT * FROM team_meetings WHERE team_id = ?";
    connection.query(sqlSelectTeamMeetings,[Number(team_id)],(err,result)=> {
        res.send(result);
    });
})












app.listen(PORT, ()=> console.log(`listeining at port ${PORT}`));