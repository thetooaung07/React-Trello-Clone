import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "./MyModal.css"
import {Modal , Button} from 'react-bootstrap'
import CardMember from "../CardMember";
// import { getInitials} from "../utils.js";


const MyModal = ({show, showHandler,card, list}) => {

  const title = card.title;
  const description = card.description;
  const members = card.members;
  const listTitle = list.title;
  


  console.log(list);
  console.log(card);
  return(
    <Modal id="main-modal" show={show} >
    <Modal.Header closeButton onClick={showHandler} >
      <div id="mainlabel" className="label-div">
        <h4 id="labelh4tag">{title}</h4>
        <div id="labelShow " className="pl-1"> in List <u className="text-secondary"> {listTitle}</u> </div> {/* in List ListTitle */}
      </div>
    </Modal.Header>
    <Modal.Body>
      <div className="container">
          <div className="header-desc">
            <div className="container-main-content">
              <div id="card-title"></div>
              <div id="titlelist"></div>
              <div className="label-member">

                

                <div id="mainmember" className="mem-div">
                  

                  <div id="memShow">  <h4 id="memberh4tag" >Members</h4>
                    {members.length > 0 ? members.map((member) => (

                    <CardMember key={member.username} member={member} />
                    
                  )) : ""}
               
                   {/* Here is something to add */}
                  </div>
               </div>

              </div>
              <div id="card-des" className="modal-description"><i className="fa fa-list"></i> &nbsp; {description}</div>
              <div  className="textareahidden"><textarea name="" id="" cols="45" rows="3" placeholder="Type the description for details"></textarea>
                <div className="small">
                  <input type="button" value="Save" />
                  <i className="fa fa-times"></i>
                </div>
              </div>
                  <div id="checklists">
                    {/* Checklists to add */}
                  </div>

              <div className="small1">
                <span><i className="fa fa-list-ul"></i> &nbsp; Activity</span>
                <div className="pr-4 mx-2">Show Details</div>
              </div>
            </div>
              
          </div>

          
          <div className="container-sidebar">

            <div className="sidebar1">
              <div className="sidebar-header">Suggested<i className="fa fa-cog"></i></div>
              <button className="sidebar-label"><i className="fa fa-user"></i> &nbsp; Join</button>
              <span className="feedback btn btn-sm">Feedback</span>
            </div>


            <div className="sidebar1">
              <div className="sidebar-header">Added to Card</div>
              <button className="sidebar-label"><i className="fa fa-user"></i> &nbsp; Members</button>
              <button className="sidebar-label"><i className="fa fa-tag"></i> &nbsp; Label</button>
              <button className="sidebar-label"><i className="fa fa-check-square"></i> &nbsp; Checklist</button>
              <button className="sidebar-label"><i className="fa fa-calendar"/> &nbsp; Due Date</button>
              <button className="sidebar-label"><i className="fa fa-paperclip"></i> &nbsp; Attachment</button>
              <button className="sidebar-label"><i className="fa fa-window-maximize"></i> &nbsp; Cover</button>
            </div>


            <div className="sidebar1">
              <div className="sidebar-header">Get Power-Ups</div>
              <button className="sidebar-label"><i className="fa fa-github" ></i> &nbsp; Github</button>
              <button className="sidebar-label" >Get More PowerUps.</button>
            </div>


            <div className="sidebar1">
              <div className="sidebar-header">Suggested</div>
              <button className="sidebar-label"><i className="fa fa-arrow-right"></i> &nbsp; Move</button>
              <button className="sidebar-label"><i className="fa fa-copy"></i> &nbsp; Copy</button>
              <button className="sidebar-label"><i className="fa fa-window-restore"></i> &nbsp; Make Template</button>
              <button className="sidebar-label"><i className="fa fa-eye"></i> &nbsp; Watch</button>
              <div className="separator"></div>
              <button className="sidebar-label"><i className="fa fa-archive"></i> &nbsp; Archieve</button>
              <button className="sidebar-label"><i className="fa fa-share-alt"></i> &nbsp; Share</button>
            </div>
 
        </div>
        
      </div>
    </Modal.Body>

      <Modal.Footer>
        <Button onClick={showHandler}>
            Close
          </Button>
      </Modal.Footer>
       


    </Modal>
  )
    
  
};

export default MyModal;
