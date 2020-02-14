import React, { useEffect } from "react";
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';


const UpdateWorktime = (props) => {
    console.log(props.wid+"아이디");
    var MUTATE = gql`
    mutation updateWorktime_day($cid: ID!, $leave: String!, $date: String!, $attend: String!, $name: String!){
        updateWorktime_day(data:{
        date : $date
        name : $name
        attend : $attend
        leave : $leave
        }, where: {
            id: $cid
        }
    ){
        date
        name
    }
    }
    `;
    var variables = {variables: { 'cid' : props.wid, 'leave' : props.leave || "0900", 'date' : props.date, 'attend': props.attend || "0900",  'name' : props.name}};
    console.log(variables);
    console.log(props);
    const [UpWork, {data}] = useMutation(MUTATE);
    useEffect(() => {console.log('Update-'+props.name+props.setcode+props.wid+props.attend)
    if(props.setcode == 1){
        UpWork(variables);
    }
    if (data) return (<></>) ;
    return (<></>);
    },[]);
    return (
        <></>    
    )
};

UpdateWorktime.defaultProps = {
    name: "방문자",
    setcode: 0,
    leave: "0900",
    attend: "0900",
    date: "20151020"
}

export default UpdateWorktime;