import ClassWorkItem from "./ClassWorkItem";
import { useState } from 'react';
function ClassWorkList() {
    const topics = [
        {
          id: 1,
          name: 'React render',
          children: [
           {
             id: 100,
             type: 'task',
             text: 'Someone added a task',
             date: '2024-01-21T13:30:12.621Z'
           },
           {
            id: 101,
            type: 'material',
            text: 'Someone added a material',
            date: '2024-01-20T15:30:12.621Z'
           },
          ]
        },
       {
          id: 2,
          name: 'React hooks',
          children: [
           {
             id: 102,
             type: 'task',
             text: 'Someone added a task 2',
             date: '2024-01-21T16:30:12.621Z'
           },
           {
            id: 103,
            type: 'material',
            text: 'Someone added a material 2',
            date: '2024-01-20T17:30:12.621Z'
           },
          ]
        }
       ];
       const [filter, setFilter] = useState('all');

       const filteredTopics = topics.map((topic) => {
         return {
           ...topic,
           children: topic.children.filter((child) => {
             if (filter === 'all') {
               return true;
             }
             return child.type === filter;
           }),
         };
       });
     
       return (
         <div className='ClassWorkList' style={{
           border: "dashed black 2px",
           padding: "50px 15px 50px 15px"
         }}>
     
           <select name="topics" id="topics" style={{
             padding:"10px",
             width:"200px",
           }} value={filter} onChange={(e) => setFilter(e.target.value)}>
             <option value="all">All topics</option>
             <option value="task">Task</option>
             <option value="material">Material</option>
           </select>
           <ClassWorkItem data={filteredTopics}></ClassWorkItem>
         </div>
       );
     }
     
     export default ClassWorkList;