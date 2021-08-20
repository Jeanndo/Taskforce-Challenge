import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {getCovidDataAction} from '../../redux/actions/getCovidDataAction';
// import ImageSlider from '../Slide/Slide';
import '../../App.css'
import Header from '../Header/Header';
import AppContents from '../Body_Section/AppContents';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
const Home = ({getCovidDataAction,fetCovidData}) => {
    
    useEffect(()=>{
        const fetchCovid_19_Data = async ()=>{

        await getCovidDataAction();

        }
        fetchCovid_19_Data();
    },[getCovidDataAction]);

   console.log(fetCovidData);
    return (
     <div>
     <Header/>
     <AppContents/>
     <Profile/>
     <Footer/>
     </div>
        
    )
}

const mapStateToprops = ({covidDataReducer})=>{
  const {fetCovidData} =covidDataReducer;
  return {fetCovidData};
}
export default connect(mapStateToprops,{getCovidDataAction})(Home);
