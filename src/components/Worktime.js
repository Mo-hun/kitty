import React, { useState }  from "react";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Worktimer from './Worktimer';

const newDate = new Date();
function formatDate(date) { 
    var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear(); if (month.length < 2) month = '0' + month; if (day.length < 2) day = '0' + day; return [year, month, day].join(''); 
}
const Worktime = (props) =>{
    console.log('hello...');
    const [style, setStyle] = useState({'width' : '50%'});
    const [week_time, isSettime] = useState(false);
    const GET_WORKTIME = gql`
    query worktime_days($name: String!){
        worktime_days(where:{
        name : $name}
    ){
        id
        date
        name
        attend
        leave
    }
    }
    `;
    console.log("worktime-name-->"+props.name);
    var setcode = 0;
    const { loading, error, data} = useQuery(GET_WORKTIME, {variables: {'name' : (props.name || "방문자")}});
    if (loading) return <p>로딩중...</p>;
    if (error) return <p>{error}!</p>;
    if (data){
        console.log('hello...'+data.worktime_days.length);
        if(data.worktime_days[0]){
            console.log(data);
            console.log("dater"+(data.worktime_days && data.worktime_days[data.worktime_days.length-1].date));
            if(formatDate(newDate) == (data.worktime_days && data.worktime_days[data.worktime_days.length-1].date)){
                setcode=1;
                if(!props.update){
                    console.log(data.worktime_days[data.worktime_days.length-1]);
                    props.settingAttend(data.worktime_days[data.worktime_days.length-1].attend);
                    props.settingIsAttend('수정하기');
                    props.settingLeave(data.worktime_days[data.worktime_days.length-1].leave);
                    props.settingIsLeave('수정하기');
                    props.settingWorktimeId(data.worktime_days[data.worktime_days.length-1].id);
                }
            }
        }
        console.log(setcode);

        return (
            <span>
                <Worktimer setcode={setcode || 0} name={props.name || "방문자"} date={formatDate(newDate)} leave={props.leave} attend={props.attend} wid={props.worktimeId}/>
            <div className="progress_text" style={{'width':'100%', 'minWidth': '250px'}}>
            이번주 근무시간 <span className="week_time_text">{week_time || '00시간'}</span>
            </div>
            <div className="progress">
                <div className="progress-done" style={style}>
                </div>
            </div>
            </span>
        )
    }
    return <></>;
};

export default Worktime;