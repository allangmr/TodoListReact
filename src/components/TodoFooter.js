import React from 'react'

export const TodoFooter = ({todosPending, handleDeleteAll}) => {
    return (
        <div className="footer">
            <p>You have <span className="pendingTasks">{todosPending}</span> pending tasks</p>
            <button className={ `${ todosPending>=1 && 'active'}` } onClick={handleDeleteAll}>Clear All</button>
        </div>
    )
}
