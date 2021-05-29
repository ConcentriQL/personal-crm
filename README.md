# The Personal CRM that keeps you in-touch with the most important people.



#### What was the original vision for the project? ####

- Original Vision was a "Personal CRM"; place to easily display reminders of who you need to keep in touch with or lost track of. Our user would be able to sign up/ login and upon login would be taken to the Contacts page where they could go between seeing each contact and scheduling a touch or just seeing a touch with the contact it pertains to. The user can also add, edit and delete and contact and do the same for a touch. Also if a contact has no touches scheduled, the user could easily see that with a button that would render the create touch form for that specific contact.


#### If the project has strayed from the original vision, why? ####

- Hasn't strayed too much, we did want to allow for Google Calendar API to talk with our app so when a user scheduled a touch, it would populate on their Google Calendar


#### How far has the project progressed? ####

-We have a pretty good front-end and back-end set so the bare bones of all the app is built out.
- Main issue is did not have time to connect both together completely


#### What are some current issues/roadblocks? ####

- Unfortuantely, the hardest roadblock is going to be connecting the front-end and back-end. The front end was built out expecting the server/database to send back the info in a certain format, and we are struggling to connect the two. The server is sending back the data, but not in the format we expected so either changing the front-end to use the info or change the backend to send the info as needed to the front end.
    - The DB Calls are currently commented out in actions.js so if you want to see where we got, just uncomment and hope for the best.

- note, you may have to create your own SQL table in Elephant SQL or talk to Mike to get the URI for his Elephant SQL


#### What are some suggestions for iterating on this project? ####

- Connecting the Front- end and Back- end
  - There are some unresolved bugs with what the front end and is expecting and what the backend is giving
- Cookies and Authentication
- OAuth with Google Calendar API


