import useFetch from "../../hooks/useFetch"
import "./featured.css";

const Featured = () => {
  const {data,loading} = useFetch("/hotels/countByCity?cities=berlin,madrid,london")
  return (
    <div className="featured">
      {loading ?("Loading please wait") : 
      (<>
        <div className="featuredItem">
        <img src="/images/Berlin.jpg" alt="berlin" className="featuredImg"/>
        <div className="featuredTitles">
          <h1>Berlin</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img src="/images/Madrid.jpeg" alt="madrid" className="featuredImg"/>
        
        <div className="featuredTitles">
          <h1>Madrid</h1>
          <h2>{data[1]} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
      <img src="/images/London.jpeg" alt="london" className="featuredImg"/>
        <div className="featuredTitles">
          <h1>London</h1>
          <h2>{data[2]} properties</h2>
        </div>
      </div>
      </>)
      }
    </div>
  );
};

export default Featured;
