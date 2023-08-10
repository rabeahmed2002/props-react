// import React from 'react'

// const Index = (props) => {
//   return (
//     <div>
//       <div>
//         <div>
//             <img src=''/>
//             <h1>{props.name}</h1> 

//             <p>{props.time}</p>
//         </div>

//         <div>
//             <p>{props.caption}</p>
//             <img src=''/>
//         </div>

//         <div>
//             <button>Like</button>
//             <button>Comment</button>
//             <button>Share</button>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Index











import React from 'react';
import "./style.css"

const Index = (props) => {
  return (
    <div className="post">
      <div className="header">
        <div className="user-info">
          <img className="user-avatar" src={props.avatar} alt="User Avatar" />
          <div className="user-details">
            <h1>{props.name}</h1>
            <p className="post-time">{props.time}</p>
          </div>
        </div>
      </div>

      <div className="post-content">
        <p className="post-caption">{props.caption}</p>
        <img className="post-image" src={props.image} alt="Post Image" />
      </div>

      <div className="actions">
        <button className="action-button">Like</button>
        <button className="action-button">Comment</button>
        <button className="action-button">Share</button>
      </div>
    </div>
  );
}

export default Index;
