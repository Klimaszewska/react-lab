import {useState} from "react";
import NewMeetingForm from "./NewMeetingForm";
import MeetingsList from "./MeetingsList";

export default function MeetingsPage() {
    const [meetings, setMeetings] = useState([]);

    function handleNewMeeting(meeting) {
        const nextMeetings = [...meetings, meeting];
        setMeetings(nextMeetings);
    }

    return (
        <div>
            <button>Add a new meeting</button>

            {
                meetings.length === 0
                && <div>No meetings yet</div>
            }
            {
                meetings.length > 0
                && <section>
                    <h2>Classes ({meetings.length})</h2>
                    <MeetingsList meetings={meetings}/>
                </section>
            }

            <NewMeetingForm onSubmit={(meeting) => handleNewMeeting(meeting)}/>

        </div>
    )
}