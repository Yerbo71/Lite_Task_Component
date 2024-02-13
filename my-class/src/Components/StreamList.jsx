import StreamItem from "./StreamItem";
function StreamList() {
    const streamList = [
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
        },] 
        
return (
      <div className='StreamList' style={{
        border: "dashed black 2px",
        paddingTop: "50px",
        paddingLeft: "15px",
        paddingRight: "15px",
        paddingBottom: "50px",
      }}>
        <StreamItem data={streamList}></StreamItem>
      </div>
    );
  }
  
  export default StreamList;