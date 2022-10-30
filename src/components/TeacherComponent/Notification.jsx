import React, { useState, useEffect } from 'react'
import axios from "axios";
import "../../styles/StudentStyles/style.css"

const Notification = () => {
  const [notification, setNotification] = useState([])

  useEffect(() => {
    const getNotification = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log(token)
        const response = await axios.get("http://localhost:8080/api/v1/notification/retrieve", {headers:{
          Authorization:token
        }});
        console.log(response.data);
        setNotification(response.data.payload);
        console.log(notification)
      } catch (error) {
        console.log(error);
      }
    }; getNotification();
  }, []);

  return (

    <div className="notificationList">
      <div className='notification_header'>
        <h2 className='notification_head'>Notifications</h2>
        <hr className='horiz_line' />
      </div>

      { notification.length > 0 ? notification.map((item, index) => (
        <div className='notification_moneySent'>
          <div className='notification_info'>
          <h3 className='money_header'>{item.date}</h3>
          <p className='money_claimed'>{item.message}</p>
          </div>
          {/* <p className='money_claimed'>Claimed</p> */}
        </div>))
        :
        <>
        
          {/* <div className='notification_moneySent'>
            <div className='notification_info'>
              <h3 className='money_header'>Today, 10:15AM</h3>
              <p className='money_paragraph'>You sent money to Babatunde.</p>
            </div>
            <p className='money_claimed'>Claimed</p>
          </div>
          <div className='notification_moneySent'>
            <div className='notification_info'>
              <h3 className='money_header'>Today, 10:15AM</h3>
              <p className='money_paragraph'>You funded your wallet with N12,000</p>
            </div>
          </div>
          <div className='notification_moneySent'>
            <div className='notification_info'>
              <h3 className='money_header'>Today, 10:15AM</h3>
              <p className='money_paragraph'>Cythian Morgan appreciated you👍</p>
            </div>
          </div> */}
        </>
      }
    </div>

  )
}

export default Notification