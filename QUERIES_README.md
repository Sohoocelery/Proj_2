# MongoDB Queries for College Event Planning Database

This folder contains 5 queries that demonstrate various MongoDB operations on the college_event_planning database.

## Query Descriptions

### Query 1: Aggregation Pipeline (`query1_aggregation.js`)
**Purpose**: Count total RSVPs per club and calculate average RSVPs per event
**Techniques Used**: 
- `$unwind` - to flatten nested arrays
- `$group` - to aggregate data by club
- `$project` - to shape output
- `$sort` - to order results

**How to Run**:
```bash
mongosh college_event_planning query1_aggregation.js
```

Or in MongoDB Compass:
1. Go to Aggregations tab
2. Copy the aggregation pipeline array from the file
3. Click "Run"

---

### Query 2: Complex Search (`query2_complex_search.js`)
**Purpose**: Find clubs that are either academic OR have events with capacity > 75
**Techniques Used**:
- `$or` - logical OR operator
- `$elemMatch` - matches documents in arrays
- Projection to limit returned fields

**How to Run**:
```bash
mongosh college_event_planning query2_complex_search.js
```

Or in MongoDB Compass:
1. Go to Documents tab
2. Click "Filter"
3. Paste the filter criteria from the file

---

### Query 3: Count Documents for User (`query3_count_student.js`)
**Purpose**: Count how many events a specific student (Alice Johnson, student_id: 1) has RSVPed to
**Techniques Used**:
- Aggregation with `$unwind`
- `$match` on nested fields
- `$group` to count

**How to Run**:
```bash
mongosh college_event_planning query3_count_student.js
```

---

### Query 4: Update Document (`query4_update.js`)
**Purpose**: Toggle the `is_active` boolean for a specific event (Python Workshop)
**Techniques Used**:
- `updateOne()` with positional operator `$`
- `$set` to modify nested array elements

**How to Run**:
```bash
mongosh college_event_planning query4_update.js
```

Or in MongoDB Compass:
1. Find the document with event_id: 2
2. Click Edit
3. Change the is_active field
4. Save

---

### Query 5: Find Pending Events (`query5_pending_events.js`)
**Purpose**: Find all events awaiting admin approval
**Techniques Used**:
- Aggregation pipeline
- Filtering on nested submission status
- Sorting by date

**How to Run**:
```bash
mongosh college_event_planning query5_pending_events.js
```

---

## Running Queries in MongoDB Compass

### Method 1: Aggregations Tab (for aggregation queries)
1. Select the `clubs` collection
2. Click the "Aggregations" tab
3. Copy the pipeline array from the .js file (the part inside `aggregate([...])`)
4. Paste into Compass
5. Click "Run"

### Method 2: Documents Tab (for find queries)
1. Select the `clubs` collection
2. Click the "Documents" tab
3. Click "Filter"
4. Copy the filter object from the .js file (the part inside `find({...})`)
5. Paste and press Enter

### Method 3: MongoDB Shell in Compass
1. Click "Open MongoDB Shell" button
2. Switch to database: `use college_event_planning`
3. Copy and paste the entire query from the .js file
4. Press Enter

---

## Running Queries via Command Line

If you have `mongosh` installed:

```bash
# Navigate to the queries folder
cd queries/

# Run each query
mongosh college_event_planning query1_aggregation.js
mongosh college_event_planning query2_complex_search.js
mongosh college_event_planning query3_count_student.js
mongosh college_event_planning query4_update.js
mongosh college_event_planning query5_pending_events.js
```

---

## Assignment Requirements Met

✅ **Query 1**: Uses aggregation framework ($unwind, $group, $project, $sort)  
✅ **Query 2**: Contains complex search criterion with $or logical connector  
✅ **Query 3**: Counts documents for specific user (student_id: 1)  
✅ **Query 4**: Updates a document by flipping a boolean (is_active field)  
✅ **Query 5**: Additional query (finds pending event submissions)
