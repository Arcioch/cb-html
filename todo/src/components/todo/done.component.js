import React from 'react';

const Done = (props) => {
    return (<div className="tasks-list">
        {(props.todos.length) ? (
            <>
                {props.todos.filter((item) => item.checked === 1).map((item) => {
                    return (
                        <div key={item.id} className="task">
                            <span>{item.todo}</span>
                            <button onClick={() => props.deleteTask(item.id)}>Usuń</button>
                        </div>
                    );
                })}
            </>
        ) : (
                <div className="warning">
                    Nie masz jeszcze tasków
                </div>
            )}
    </div>);
}

export default Done;