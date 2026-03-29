Query Descriptions
query1_aggregation.js - Count RSVPs per Club
Counts how many total RSVPs each club has and calculates the average per event. Uses MongoDB's aggregation pipeline with $unwind, $group, and $sort. Shows which clubs are most popular based on event signups.
query2_complex_search.js - Find Academic or Large Events
Finds clubs that are either in the "academic" category OR have at least one event with capacity greater than 75. Uses the $or operator with $elemMatch to search through nested arrays.
query3_count_student.js - Count Events for a Student
Counts how many events Alice Johnson (student_id: 1) has RSVPed to. Shows the total count and lists which events. You can change the student_id to check other students.
query4_update.js - Toggle Event Active Status
Updates the Python Workshop event (event_id: 2) by changing its is_active field from false to true. Uses the positional operator ($) to update items inside arrays.
query5_pending_events.js - Find Pending Event Approvals
Shows all events that are waiting for admin approval (status: "pending"). Useful for admins to see which submissions need review. Sorts by submission date.
How to Run
In MongoDB Compass:

Open MongoDB Shell
Type: use college_event_planning
Copy/paste the query code
Press Enter
