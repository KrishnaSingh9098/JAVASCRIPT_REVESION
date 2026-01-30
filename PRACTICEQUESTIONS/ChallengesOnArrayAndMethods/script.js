
// 1. Declare an Array name `teaflavour` that contains the strings `"greenTea", "Black Tea" , and "oolong tea". 
//    Access the first element of the tea and store it in a new Variable called `firstTea`.



let teaFlavour = ["Green Tea" , "Black Tea" , "oolong Tea"]
console.log(teaFlavour)
let firatEleOfString = teaFlavour[1]
console.log(firatEleOfString)

// 2. Declare and array named `cities` conataining "London", "Tokyo", "Paris" , and "Newyork" . Access the third element 
 //   in the array and store it in a another variable named favouriteFactory.

 let cities = ["London", "Tokyo", "Paris", "NewYork"]
 console.log(cities)
 let favouriteFactory = cities[3]
 console.log(favouriteFactory)


 // 3. You have an array Name TeaType conatining "herbalTeas" ," whiteTea" and "MasalaCahi"
 //     chnge the secod element of the array to "Jasmine Tea" ?


 let teaType = ["herbal Teas", "White Teas", "Masala Chai"]
 console.log(teaType)
 let SecondElement = teaType[2] = "Jasmine Tea"
 console.log(SecondElement)


 // 4. Declare an Array named  `citiesVisited`  containing" mumbai" and "sydney".
 //   Add "Berlin" to the array  using the `push` method

//  let citiesVisited = ["mumbai", "Sydney"]
//  console.log(citiesVisited)
//  let newCityAdded = citiesVisited.push("berlin")
//  console.log(newCityAdded)

// Output : 
// [ 'mumbai', 'Sydney' ]
// 3

 let citiesVisited = ["mumbai", "Sydney"];
citiesVisited.push("berlin");
citiesVisited[3] = "BhoPal"
console.log(citiesVisited);




 // 5. You have an Array named `teaOrders` with `"chai"`, "Ice tea " , `"Match"`  and earl grey .
 // remove the  last element  of the array  using the "pop " method and store it in a  variable  named `lastOrder`.


 let  teaOrders = ["Chai", "Ice Tea", "Matcha", "Earl Grey"]
 teaOrders.pop()
 console.log(teaOrders)


 // 6. You have an array named PopularTeas containing  "GreenTea" , "Oolong Tea" and "chai " 
 // Create a soft copy of the array and named softCopyTeas 


 let PopularTeas = ["GreenTea", "Oolong Tea", "Chai" , ]