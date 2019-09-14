import React from 'react';

const Tasks = (props) => {
    return (<div className="tasks-list">
        {(props.todos.length) ? (
            <>
                {props.todos.filter((item) => item.checked === 0).map((item) => {
                    return (
                        <div key={item.id} className="task">
                            <span>{item.todo}</span>
                            <button onClick={() => props.markAsDone(item.id)}>Zrobione</button>
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

export default Tasks;