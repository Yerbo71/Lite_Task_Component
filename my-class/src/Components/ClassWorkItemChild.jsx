const ClassWorkItemChild = (props) => {
    const { data } = props;
  
    return (
      <div>
        {data.children.map((child) => (
          <div key={child.id} className="ClassWorkItemChildComponent" style={{
            border: "dashed black 2px",
            padding: "10px",
            width:"778px",
            display:"flex",
            flexDirection:"row",
            marginTop:"15px",
            justifyContent:"flex-start",
            alignItems:"center",
          }}>
            <div style={{
                    width:"50px",
                    height:"50px",
                    backgroundColor:"#d4d4d4",
                    borderRadius:"50%",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    fontSize:"18px",
                    fontFamily:"sans-serif",
                    fontWeight:"500",
                }}>
                {child.type.charAt(0).toUpperCase()}
            </div>
            <div style={{
              marginLeft:"15px",
              display:"flex",
              justifyContent:"flex-start",
              width:"58%"
          }}>
                <p>{child.text}</p>
            </div>
            <div style={{
              marginLeft:"15px",
              display:"flex",
              justifyContent:"flex-end",
              width:"30%"
          }}>
                <p>Posted: {child.date.slice(11, 16)}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default ClassWorkItemChild;