 let courses = [
        { name: "Courses in England", prices: [0, 100] }, 
        { name: "Courses in Germany", prices: [500, null] }, 
        { name: "Courses in Italy", prices: [100, 200] }, 
        { name: "Courses in Russia", prices: [null, 400] },
        { name: "Courses in China", prices: [50, 250] },
        { name: "Courses in USA", prices: [200, null] },
        { name: "Courses in Kazakhstan", prices: [56, 324] },
        { name: "Courses in France", prices: [null, null] },
    ];
   
let requiredRange2 = [100, 350];
//callback function for filter func
const intersection =(courseRange, userRange) => {
    //change null's to numbers  
    courseRange[0] == null ? courseRange[0] = 0: void 0;
    courseRange[1] == null ? courseRange[1] = Infinity: void 0;
    userRange[0] == null ? userRange[0] = 0: void 0;
    userRange[1] == null ? userRange[1] = Infinity: void 0;
    //main logic: (if diapasons intersects => true)  
    return ((userRange[0] >= courseRange[0]) && (userRange[0] <= courseRange[1]))? true : ((userRange[1] >= courseRange[0]) && (userRange[1] <= courseRange[1]))}

//filter function to filter courses
const filter = (courses, limits) => {return courses.filter((el)=> intersection(el.prices, limits))}
    
const filtered = filter(courses, requiredRange2);
console.log(filtered)
