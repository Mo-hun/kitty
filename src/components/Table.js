import React from 'react';

const test = _ => {
    console.log('int');
}

function Table(props) {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th> 이름 </th>
                    <th> 출근시각 </th>
                    <th> 퇴근시각 </th>
                    <th> 오늘의 근무시간 </th>
                    <th> 금주의 근무시간 </th>
                </tr>
            </thead>
            <tbody>
                {props.data.map(m => <tr key={m.key} onClick={test}><th id={m.id}>{m.name}</th><th>{m.attend}</th><th>{m.leave}</th><th>{m.leave}</th><th>{m.leave}</th></tr>)}
            </tbody>
        </table>
      </div>
  );
}

export default Table;
