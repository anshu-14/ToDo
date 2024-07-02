import "./ox.css";
export default function Oxbox({len}){
    function mark(keyy) {
      console.log(keyy);
    }
    return (
      <>
        <div className="row">
         {len.map((item)=>{
            return <div className="box" key={item} onClick={()=>{mark(item)}}></div>;
         })}
        </div>
      </>
    );
}