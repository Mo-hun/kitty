import React, { useState }  from "react";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import  Worktime  from './Worktime';
import CreateUser from './CreateUser';


const toDay = new Date();
function formatDate(date) { 
    var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear(); if (month.length < 2) month = '0' + month; if (day.length < 2) day = '0' + day; return [year, month, day].join(''); 
}
const Test = () => {
    const [name, setName] = useState();
    const [inputname, UpdateIname] = useState();
    const [isname, isSetName] = useState(false);
    const [isattend, isSetAttend] = useState(false);
    const [isleave, isSetLeave] = useState(false);
    const [attend, setAttend] = useState('');
    const [leave, setLeave] = useState('');
    const [worktimeId, setWorktimeId] = useState();
    const [inputAttend, setInputAttend] = useState('');
    const [inputLeave, setInputLeave] = useState('');
    const ISGET_CONTINENTS = gql`
    query users{
        users{
        id
        name
        }
    }
    `;
    const { loading, error, data } = useQuery(ISGET_CONTINENTS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}!</p>;
    const isUser = () => {
        var flag = 0, ismap = 0;
        data.users.map((users) => {
            ismap = 1;
            if(users.name === name){
                console.log('match');
                flag = 1;
            }
        });
        if(flag){
            return (
                <span key={name}>
                <div className="profile">
                    <div className="name">
                        <span className="name_text">{name || "방문자" }님<br/>
                            <input className="name_input" name="name" type="text" value={inputname} onChange={(e) => {UpdateIname(e.target.value)}}placeholder="이름"/>
                            <button className="submit" onClick={() => {setName(inputname)}}>{isname || "입력하기"}</button>
                        </span>
                        <span className="progress_box">
                            <Worktime update={inputAttend} leave={leave} worktimeId={worktimeId} attend={attend} name={name} isattend={isattend} settingWorktimeId={(wortimeId)=>{setWorktimeId(wortimeId);}} settingName={(name)=>{setName(name);}} settingAttend={(attend)=>{setAttend(attend);}} settingLeave={(leave)=>{setLeave(leave);}} settingIsAttend={(isattend)=>{isSetAttend(isattend);}} settingIsLeave={(isleave)=>{isSetLeave(isleave);}}/> 
                        </span>
                    </div>
                </div>
                <div className="workbutton">
                    <div className="attend">출근:{attend}<br/>
                    <input className="name_input" name="name" type="text" value={inputAttend || ''} onChange={(e) => {setInputAttend(e.target.value)}} placeholder="출근시간"/>
                    <button className="submit" onClick={()=> {setAttend(inputAttend)}}>{isattend || "입력하기"}</button>
                    </div>
                    <div className="leave">퇴근:{leave}<br/>
                    <input className="name_input" name="name" type="text" value={inputLeave || ''}  onChange={(e) => {setInputLeave(e.target.value)}} placeholder="퇴근시간"/>
                    <button className="submit" onClick={()=> {setLeave(inputLeave)}}>{isleave || "입력하기"}</button>
                    </div>
                </div>
            </span>
            );
        }else if(!flag && ismap && name){
            console.log('sibal');
            return (
                <span key={name}>
                    <CreateUser name={name}/>
                <div className="profile">
                    <div className="name">
                        <span className="name_text">{name || "방문자" }님<br/>
                            <input className="name_input" name="name" type="text" value={inputname} onChange={(e) => {UpdateIname(e.target.value)}}placeholder="이름"/>
                            <button className="submit" onClick={() => {setName(inputname)}}>{isname || "입력하기"}</button>
                        </span>
                        <span className="progress_box">
                            <Worktime update={inputAttend} leave={leave} worktimeId={worktimeId} attend={attend} name={name} isattend={isattend} settingWorktimeId={(wortimeId)=>{setWorktimeId(wortimeId);}} settingName={(name)=>{setName(name);}} settingAttend={(attend)=>{setAttend(attend);}} settingLeave={(leave)=>{setLeave(leave);}} settingIsAttend={(isattend)=>{isSetAttend(isattend);}} settingIsLeave={(isleave)=>{isSetLeave(isleave);}}/> 
                        </span>
                    </div>
                </div>
                <div className="workbutton">
                    <div className="attend">출근:{attend}<br/>
                    <input className="name_input" name="name" type="text" value={inputAttend || ''} onChange={(e) => {setInputAttend(e.target.value)}} placeholder="출근시간"/>
                    <button className="submit" onClick={()=> {setAttend(inputAttend)}}>{isattend || "입력하기"}</button>
                    </div>
                    <div className="leave">퇴근:{leave}<br/>
                    <input className="name_input" name="name" type="text" value={inputLeave || ''}  onChange={(e) => {setInputLeave(e.target.value)}} placeholder="퇴근시간"/>
                    <button className="submit" onClick={()=> {setLeave(inputLeave)}}>{isleave || "입력하기"}</button>
                    </div>
                </div>
            </span>
            );
        }
        else if(!flag & ismap){
            console.log('ssssibal');
            return (
                <span key={name}>
                <div className="profile">
                    <div className="name">
                        <span className="name_text">{name || "방문자" }님<br/>
                            <input className="name_input" name="name" type="text" value={inputname} onChange={(e) => {UpdateIname(e.target.value)}}placeholder="이름"/>
                            <button className="submit" onClick={() => {setName(inputname)}}>{isname || "입력하기"}</button>
                        </span>
                        <span className="progress_box">
                            <Worktime update={inputAttend} leave={leave} worktimeId={worktimeId} attend={attend} name={name} isattend={isattend} settingWorktimeId={(wortimeId)=>{setWorktimeId(wortimeId);}} settingName={(name)=>{setName(name);}} settingAttend={(attend)=>{setAttend(attend);}} settingLeave={(leave)=>{setLeave(leave);}} settingIsAttend={(isattend)=>{isSetAttend(isattend);}} settingIsLeave={(isleave)=>{isSetLeave(isleave);}}/> 
                        </span>
                    </div>
                </div>
                <div className="workbutton">
                    <div className="attend">출근:{attend}<br/>
                    <input className="name_input" name="name" type="text" value={inputAttend || ''} onChange={(e) => {setInputAttend(e.target.value)}} placeholder="출근시간"/>
                    <button className="submit" onClick={()=> {setAttend(inputAttend)}}>{isattend || "입력하기"}</button>
                    </div>
                    <div className="leave">퇴근:{leave}<br/>
                    <input className="name_input" name="name" type="text" value={inputLeave || ''}  onChange={(e) => {setInputLeave(e.target.value)}} placeholder="퇴근시간"/>
                    <button className="submit" onClick={()=> {setLeave(inputLeave)}}>{isleave || "입력하기"}</button>
                    </div>
                </div>
            </span>
            );
        }
    };
    return (<span>
        {isUser()}
        {/* {data.users.map(({ code, name }) => (
            <span key={name}>
            <div className="profile">
                <div className="name">
                    <span className="name_text">{name || "방문자" }님<br/>
                        <input className="name_input" name="name" type="text" value={inputname} onChange={(e) => {UpdateIname(e.target.value)}}placeholder="이름"/>
                        <button className="submit" onClick={() => {setName(inputname)}}>{isname || "입력하기"}</button>
                    </span>
                    <span className="progress_box">
                        <Worktime name={name} settingName={(name)=>{setName(name);}} settingAttend={(attend)=>{setAttend(attend)}} settingLeave={(leave)=>{setLeave(leave)}}/>
                    </span>
                </div>
            </div>
            <div className="workbutton">
                <div className="attend">출근<br/>
                <input className="name_input" name="name" type="text" value={attend || ''} placeholder="출근시간"/>
                <button className="submit">{isattend || "입력하기"}</button>
                </div>
                <div className="leave">퇴근<br/>
                <input className="name_input" name="name" type="text" value={leave || ''} placeholder="퇴근시간"/>
                <button className="submit">{isleave || "입력하기"}</button>
                </div>
            </div>
            </span>
            ))} */}
        </span>
    )
};

export default Test;