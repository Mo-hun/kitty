import React from "react";
import UpdateWorktime from './UpdateWorktime';
import CreateWorktime from './CreateWorktime';

const Worktimer = (props) => {
    var update;
    var create;
    console.log(props.setcode);
    if(!props.setcode){
         update = false;
        if(props.name === "방문자"){
             create = false;
        }else{
             create = true;
        }
    }else{
         create = false;
         update = true;
    }
    console.log("worktimer-"+props.update+update);
    return (
        <>
        {update && <UpdateWorktime setcode={props.setcode || 0} name={props.name || "방문자"} date={props.date} leave={props.leave} attend={props.attend} wid={props.wid}/>}
        {create && <CreateWorktime setcode={props.setcode || 0} name={props.name || "방문자"} date={props.date} leave={props.leave} attend={props.attend} wid={props.wid}/>}
        </>
    )
};

Worktimer.defaultProps = {
    name: "방문자",
    setcode: 0,
    leave: "0900",
    attend: "0900",
    date: "20151020"
}

export default Worktimer;