const StreamItem = (props) => {
    const dataFromStreamItem = props.data
      .map((streamList) => { 
        return ( 
            <div key={streamList.id}  className="StreamItemComponent" style={{  
                border: "dashed black 2px",
                padding: "10px",
                width:"800px",
                display:"flex",
                justifyContent:"flex-start",
                alignItems:"center",
                flexDirection:"row",
                marginTop:"15px",
                }}>
                <div style={{
                    width:"100px",
                    height:"100px",
                    backgroundColor:"#d4d4d4",
                    borderRadius:"50%",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    fontSize:"30px",
                    fontFamily:"sans-serif",
                    fontWeight:"500",
                    }}>
                    {streamList.type.charAt(0).toUpperCase()}

                </div>
                <div style={{marginLeft:"15px"}}>
                    <p>{streamList.text}</p>
                    <p>{streamList.date.slice(11, 16)}</p>
                </div>
            </div>
        ); 
      }); 
    return <div>{dataFromStreamItem }</div>; 
   
   }
   export default StreamItem ; 
   