import { useRef, useEffect} from "react";
import Card from "./Card";

/*eslint react/prop-types:0 */
function CardList(props) {
  const { items } = props;
  const scrollRef = useRef(null);
  useEffect(()=>{
    const container = scrollRef.current;
    if(!container) return;

    const handleWheel =(e)=>{
      // prevent default behavior of vertical scroll if hovering over horizonatal scroll container
      if(
        container.scrollWidth > container.clientWidth &&
        Math.abs(e.deltaX) < Math.abs(e.deltaY)
      ) {
        e.preventDefault();
        container.scrollBy({
          left: e.deltaY * 2,
          behavior: 'smooth'
        });
      }
    };
    container.addEventListener('wheel', handleWheel, {passive: false});
    return ()=>{
      container.removeEventListener('wheel', handleWheel);
  };
  },[])
  return (
    <div ref={scrollRef} className="flex overflow-x-auto gap-4 scrollbar-hide scroll-smooth py-4 px-8" style={{WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
      {items.map((item, index) => (
        <div className="flex-none" key={index}>
          <Card title={item.title} subtitle={item.subtitle} image={item.image} onClick={item.onClick}/>
        </div>
      ))}
    </div>
  );
}
export default CardList;
