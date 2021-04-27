/*

Some of this queries are not used in the app but we decided to leave it for reference

/* This is where we're storing all the plain query strings


Adding a user to the user db:

const addUserParams = [firstName, lastName, password, email]
const addUserQuery = `INSERT INTO "user" (fist_name, last_name, password, email) 
VALUES ($1, $2, $3)`


Verifying User is in the database for login:

const sqlparams = [email, password]
const verifyUserQuery = `SELECT u.email, u.password
FROM "user" u
WHERE u.email= $1 AND u.password = $2`


Creating a new touch event:

const newTouchParams = [name, date, time, importance, recurring, numContacts]
`INSERT INTO event (event_name, event_date, touch_time, event_importance, event_recurring, numofcontacts)
VALUES ($1, $2, $3, $4, $5)
RETURNING event_id`
//New query to add contact and touch to join table
//in the promise grab the result event_id
const addRowToJoin = `INSERT INTO joinContactAndEvent (event_id, contact_id)
                      VALUES (result(or however it is from the result object), contactId)`


Create a new Contact:

const newContactParams = [userId, email, phonenumber, preferredContactMethod, circle, priority, first_name, last_name]
const createContact = `INSERT INTO contact (contact_userid, contact_email, contact_phonenumber, contact_preferredcontactmethod, contact_circle, contact_priority, contact_first_name, contact_last_name)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`






Deleting Contact:

//given contact ID from fornt end
//delete contact from contact table

const { contactId } = req.body (or params)
const deleteContactQuery = `DELETE FROM contact WHERE contact_id=$1`

//Delete all rows that contain that contactId from the join table and return all the eventIds (assuming it's getting returned as an array)
DELETE FROM joincontactandevent j
WHERE j.contact_id = 4
RETURNING j.event_id

//for all instances of this event_ID in event table decrement numofContacts
//wrap below in a for loop for the length of the eventId array
UPDATE event
SET numofcontacts = numofcontacts - 1
WHERE event_id = $i

//final querry, delete all instances where numofcontacts is zero
DELETE FROM event WHERE numofcontacts = 0



Delete touch:
//given eventId from fronted:
const eventId = [eventId]
const deleteTouch = `DELETE FROM event WHERE event_id = $1`
const deleteTouchinJoin = `DELETE FROM joincontactandevent WHERE event_id = $1`


Update Contact email:

const newEmail = [req.body.email] (or params)
const updateContact = `UPDATE contact
SET contact_email =  $1`

Update Phone Number:

const newNumber = [req.body.number]
const updateContact = `UPDATE contact
SET contact_phonenumber = $1`

Update Prefered Contact Method:

const newMethod = [req.body.method]
const updateContact = `UPDATE contact
SET contact_preferredContactMethod = $1`

Update Circle:

const newCircle = [req.body.circle]
const updateContact = `UPDATE contact
SET contact_circle = $1`

Update priority:

const newPrio = [req.body.priority]
const updateContact = `UPDATE contact
SET contact_priority = $1`

Update Touch:

Update Touch Name
const newName = [req.body.touchName]
const updateTouch = `UPDATE event
SET event_name = $1`

Update Touch date:
const newDate = [req.body.touchDate]
const updateTouch = `UPDATE event
SET event_date = $1`

Update Touch importance:

const newImportance = [req.body.importance]
const updateTouch = `UPDATE event
SET event_importance = $1`

Update Recurring:

const newRecurring = [req.body.recur]
const updateTouch = `UPDATE event
SET event_recurring = $1`

Update numOfContacts:

cosnt newNum = [req.body.numOfContacts]
const updateTouch = `UPDATE event
SET numofcontacts = $1`

Update touch_time:

const newTime = [req.body.touchTime]
const updateTouch = `UPDATE event
SET touch_time = $1`


Grab all the events that are associated with a contact:

const contactid = [contactId]
`SELECT e.*, c.contact_id
FROM event e
INNER JOIN joinContactAndEvent j
ON e.event_id = j.event_id
INNER JOIN contact c
ON j.contact_id = c.contact_id
WHERE c.contact_id = $1`


Grab all contacts associated with a touch:

const eventId = [req.body.eventId]
const grabContacts = `SELECT c.*, e.event_id
FROM contact c
INNER JOIN joinContactAndEvent j
ON c.contact_id = j.contact_id
INNER JOIN event e
ON j.event_id = e.event_id
WHERE e.event_id = $1`



BELOW IS REFERENCE MATERIAL TO HELP WITH THE ABOVE QUERIES:

//All of the films that person with id 1 is in!!!

SELECT f.*, p._id
FROM films f
INNER JOIN people_in_films pf
ON f._id = pf.film_id
INNER JOIN people p
ON pf.person_id = p._id
WHERE p._id = 1




https://stackoverflow.com/questions/3486644/sql-many-to-many-select/3486655

How would I create an SQL query so that it selects all the names from manufacturer when id_category is equal to something?

SELECT m.name, cp.id_category
FROM manufacturer as m
INNER JOIN product as p
    ON m.id_manufacturer = p.id_manufacturer
INNER JOIN category_product as cp
    ON p.id_product = cp.id_product
WHERE cp.id_category = 'some value'



Converting the TIME data type to just be HH:MM
https://stackoverflow.com/questions/42987492/format-time-in-sql




*/