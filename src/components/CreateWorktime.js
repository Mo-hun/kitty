import React, { useEffect } from "react";
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const CreateWorktime = (props) => {
    var MUTATE = gql`
    mutation createWorktime_day($leave: String!, $date: String!, $attend: String!, $name: String!){
        createWorktime_day(data:{
        date : $date
        name : $name
        attend : $attend
        leave : $leave
        }
    ){
        id
    }
    }
    `;
    var variables = {variables: {'leave' : props.leave || "0900", 'date' : props.date, 'attend': props.attend || "0900",  'name' : props.name}};
    const [UpWork, {data}] = useMutation(MUTATE);
    useEffect(() => {console.log('Create-'+props.name+props.setcode+props.wid)
    console.log(variables);
    if(props.setcode == 0){
    UpWork(variables);}
    },[])
    
    return (
        <></>    
    )
};

CreateWorktime.defaultProps = {
    name: "방문자",
    setcode: 0,
    leave: "0900",
    attend: "0900",
    date: "20151020"
}

export default CreateWorktime;