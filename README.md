# Routines

A lightweight app to track routines such as fitness workouts.

## Versions

### V1

- [x] Initialize project
- [x] Create [app design in Figma](https://www.figma.com/file/0P9jKFJoGaWL2kz5Le4fY1/Fitness-Routines?type=design&node-id=0%3A1&mode=design&t=H40qrGNbU17FIl0r-1)
- [x] Add views
- [x] Insert sample data
- [x] Deploy on Vercel

### V2

- [ ] Tracking a hard-coded routine (start and end)

### V3

- [ ] Track which exercises have been completed

### V4

- [ ] Track detailed exercises with repetition or minutes
- [ ] Toggle exercise card

### V5

- [ ] Add CRUD functionality for routines, exercises and sets

### V6

- [ ] Implement offline usage

### V7

- [ ] Testing

### V8

- [ ] Use express.js and a database to store data persistently

## Data Structure

- routines[] \<Object Array>  
  - routine \<Object> 
    - name \<String>
    - iterations[] \<Object Array>  
      - iteration \<Object>
        - start <String (ISO 8601 format)>   
        - end <String (ISO 8601 format)>
        - units[] \<Object Array>  
          - name \<String>
          - description \<String>
          - done? \<Boolean>
          - type \<enum>
          - sets[] \<Object Array> 
            -set \<Object>
              - duration \<Number>
              - repetitions \<Number>
              - kg \<Number>
              - text \<String>
           
