                                                             ** Online Railway Reservation System**

This System is designed for online reservation of railway tickets for travelling between any two locations. In this passenger can login/register for making reservations. After making reservation passenger can view reservations as well as he/she can cancel reservation as per his/her convenience. Without login to website passenger can search for trains by entering source and destinations.
In this system another user of this system is admin. Admin will update all the train details including their source, destinations and fair details, in order to have updated information to end users or passenger.
If passenger needs any kind of help or guidance that will be provide via navigating to portal.


1. Database Design:

  •	Collections in database-
  
    o	Passenger
  
    o	Train
    
    o	Admin
    
    o	Reservation


•	Document structure for collection

    o	Passenger
        	Name: String, required
        	Age:  Number, required
        	Gender: string, required
        	Address: string
        	Email: string, unique
        	Password: string, required

    o	Train
        	Train-name: string, required
        	Source: string, required
        	Destination: string, required
        	Train-number: number
        	Fair: number, required

    o	Admin
        	Name: String
        	Age: number
        	Email: string, required, unique
        	Password: required

    o	Reservation
        	Date: date, required
        	Source: string, required
        	Destination: string, required
        	Fair: number
        	Class: string
        	Number of seats: number, required
        	Payment:
        	Credit card no: number, required
        	Bank name: string, required
        	CVV: number, required


2. Functionalities

    	Register as a passenger

    	Login as a passenger

    	Login as an admin

    	Register as an admin

    	Passenger can make reservation based on source and destination he/she provided

    	After making reservation passenger can cancel reservation

    	After making reservation passenger can also view Reservation details

    	Passenger can search train

    	Passenger view Available trains

    	Admin can update train details

    	Help or guidance for passenger

3. Micro-services

  	Registration/Login
  
     It can be accessible to passenger and admin in order to register or login with website

  	Reservation
  
     With these passengers can make reservation by entering details. In that passenger can also view their reservation. 

  	Update train
  
     This can be only accessible to admin in order to update train details

  	View Train
  
     It will be accessible to any end user as for view or searching trains, as no need of login or registration. 

  	Help
  
    This will be useful for passenger to get more information or help for booking, cancelling railway tickets. 




