import ClassWorkItemChild from "./ClassWorkItemChild";

const ClassWorkItem = (props) => {
    const dataFromClassWorkItem = props.data
      .map((classList) => { 
        return ( 
            <div key={classList.id} className="StreamItemComponent" style={{  
                border: "dashed black 2px",
                padding: "10px",
                width:"800px",
                display:"flex",
                marginTop:"15px",
                flexWrap:"wrap",
                }}>
                <div style={{
                        color:"green",
                        padding:"10px",
                        width:"800px",
                    }}>
                        {classList.name}
                </div>
                <div style={{
                    width:"100%",
                    backgroundColor: "green",
                    height: "2px",
                }}></div>
                <div>
                <ClassWorkItemChild data={classList}/>
                </div>
            </div>
        ); 
      }); 
    return <div>{ dataFromClassWorkItem  }</div>; 
   
   }
   export default ClassWorkItem ; 
   