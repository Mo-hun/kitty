import React, {useEffect} from "react";
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const CREATE = gql`
mutation createUser($name: String!){
    createUser(data:{
    name : $name}
){
    id
}
}
`;

const  CreateUser = (props) => {
    const [Create, {data}] = useMutation(CREATE);
    useEffect(() => {console.log('222'+props.name)
        
        Create({variables: {'name' : props.name}});
    },[])
    return (
        <></>    
    )
};

export default CreateUser;