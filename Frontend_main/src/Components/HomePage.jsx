import React, {useState, useEffect} from "react";
import "./Components.css";
import axios from 'axios'
import { Link } from "react-router-dom";
import Footer from "./Footer";

const HomePage = () => {
 const arr=[1,2,3,4,5]
 const qrr=[1,2,3,4,5,6]
 const mental = [{name:"happy", img:"https://img.freepik.com/free-photo/front-view-beautiful-woman-with-copy-space_23-2148483063.jpg?w=740&t=st=1694348554~exp=1694349154~hmac=de730c8eb9fa2d807a5bc7040c87edf24fe86d14d0bd05da0f6a600deeb0b770"}, {name:"Anxious", img:"https://img.freepik.com/free-photo/anxious-man-indoors-front-view_23-2149729600.jpg?w=1060&t=st=1694348603~exp=1694349203~hmac=9b0d985093413be29761448a259ef6eb9455fe24fce1438a65e14dc73179bbb2"}, {name:"Stressed", img:"https://img.freepik.com/free-photo/stressed-male-massaging-nose-bridge-suffering-from-headache_1163-3988.jpg?w=1060&t=st=1694348655~exp=1694349255~hmac=0f9c02baa17be26d55ef9c424189d73a3504c9fee2c79e597bd21460c2598543"}, {name:"Paranoia", img:"https://img.freepik.com/free-photo/caucasian-young-woman-peeks-through-fingers-covers-face-with-hands-dressed-hat-afraids-something-looking-throw-fingers-isolated-grey-background_176532-14748.jpg?w=1060&t=st=1694348731~exp=1694349331~hmac=cf58e20ccafcf7bd6b50b5290fdc711ffee3e4ed5442bfa6bac8c5a9e3707c00"}, {name:"Depression", img:"https://img.freepik.com/free-photo/side-view-woman-with-low-self-esteem_23-2149837651.jpg?w=1060&t=st=1694348767~exp=1694349367~hmac=8c399debbf1152661552453a130900eb6bd69a041e6b8a6a7aa30f2821bc5c62"}]
 const [doctors, setDoctors] = useState([])

const getDoctordetails  = async () => {
  const docdet = await axios.get("http://localhost:8100/doctors/")
  console.log(docdet.data)
  return docdet.data
}

useEffect( () => {
getDoctordetails()
.then( p => {
  setDoctors(p.doctors)
})
console.log(doctors)
},[])


  return (
    <div className="container-fluid">
      <div className="row justify-content-center header-row">
        <div className="col-md-6 home-heading text-center my-5">
          <h1>Just Breathe & Relax</h1>
          <p className="home-p my-3">
            Spring Behavioral Health provides high quality mental health
            services using an
            <br></br>
            evidence-based approach.We beleive early in Identification.
          </p>
          <Link to='/session'><button type="button" className="btn btn-secondary px-3 session-btn">
            Register for an session
          </button></Link>
        </div>
      </div>
      <div className="row justify-content-center mind-content">
        <div className="col-10 text-center header-col">
          <h2 className="my-3">How are you feeling today?</h2>
          <div className="row justify-content-evenly mood">
            {mental.map( (p) => {
              return(
                <div className="card cardhome" >
            <img src={p.img} className="card-img-top-st img-fluid" alt="..."/>
            <div class="card-body">
          <p class="card-text">{p.name}</p>
        </div>
         </div>
                )
             
            }
              )
              }


</div>
        </div>
      </div>
      {/* Specialist */}
      <div className="row justify-content-evenly Specialist">
        <h2 className="specialists my-4">Our Specialists</h2>
        {
          doctors.map( (p) => {
            return(
              <div className="col-sm-3">
              <div className="card doctor-card">
  <img src="https://img.freepik.com/free-photo/attractive-young-male-nutriologist-lab-coat-smiling-against-white-background_662251-2960.jpg?w=2000" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{p.name}</h5>
    <p className="card-text">{p.status}</p>
    <a href="#" className="btn btn-primary">{p.specialization}</a>
  </div>
  </div>
</div>
            )
          })
        }
      </div>
      {/* FeedBack */}
      
        <h2 className="fdk">Feedback</h2>
        <div className="row feedback ">
        {arr.map( (p) => {
          return(
            <div className="feedback-col my-4">
              <h5>Amlan</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam odit ipsam cupiditate laboriosam vero quam consectetur aliquam, nisi, laborum numquam voluptatibus quae. Vitae totam praesentium in enim reiciendis deleniti, provident molestias. Voluptates ut, nemo illum harum error necessitatibus quia dolores!</p>
            </div>

          )
        })}
      </div>
<Footer></Footer>
      
    </div>
  );
};

export default HomePage;
