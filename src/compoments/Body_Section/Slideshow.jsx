import React,{useRef,useEffect}from 'react';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import {connect} from 'react-redux';
import {getCovidDataAction} from '../../redux/actions/getCovidDataAction';
import Card from './SlidCard';


const Slideshow = ({fetCovidData,getCovidDataAction}) => {

const nxt = useRef(null);
const nxtbtn = useRef(null);

let index = 0;
  const nextbtn = ()=>{
    index++;
    nxt.current.style.transform = `translateX(-${index*1920}px)`
    // const SlideshowTRanslate = nxt.current.style.transform.match(/-+[0-9]+/);
    // console.log(SlideshowTRanslate)
  }

  const prevbtn = ()=>{
    index--;
    nxt.current.style.transform = `translateX(-${index*1920}px)`
  }

  useEffect(()=>{
    const fetchCovid_19_Data = async ()=>{

    await getCovidDataAction();

    }
    fetchCovid_19_Data();
},[getCovidDataAction]);

  return (
    <div className="outer-container" >
    <div className="slide-show-container" ref={nxt} >
        {fetCovidData?.success&&fetCovidData?.message?.map((continentdata)=>{
            return(
            <Card key={continentdata.continent}
            continentdata={continentdata}
            />
            )
        })}
     </div>
     <div className="nav">
      <button className="prev" onClick={prevbtn}>
      <ArrowRightAltIcon className="left-arrow-btn"/>
      </button>
      <button className="next" onClick={nextbtn} ref={nxtbtn}>
      <ArrowRightAltIcon/>
      </button>
      </div>
     </div>
    
  )
}

const mapStateToprops = ({covidDataReducer})=>{
    const {fetCovidData} =covidDataReducer;
    return {fetCovidData};
  }

export default connect(mapStateToprops,{getCovidDataAction})(Slideshow)
