// IMPORT ANY NEEDED COMPONENTS HERE
import { Dataset } from "./data/dataset"
import "./App.css"
import Header from "./components/Header/Header"
import Instructions from "./components/Instructions/Instructions"
import Chip from "./components/Chip/Chip"
import { useState } from "react"

// don't move this!
export const appInfo = {
  title: `Fast Food Feud 🍔!`,
  tagline: `Folks' Favorite Friendly Fuel Finder For Food Facts`,
  description: `Finding healthy food is hard. Sometimes we just settle for what's available. That doesn't mean we shouldn't know what's going into our bodies! Fast Food Feud is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.`,
  dataSource: `All data pulled from the MenuStat.org interactive online database.`,
  instructions: {
    start: `Start by clicking on a food category on the left and a fast food joint from the list above. Afterwards, you'll be able to choose from a list of menu items and see their nutritional content.`,
    onlyCategory: `Now select a fast food restaurant from the list above!`,
    onlyRestaurant: `Now select a category from the list on the left!`,
    noSelectedItem: `Almost there! Choose a menu item and you'll have the fast food facts right at your fingertips!`,
    allSelected: `Great choice! Amazing what a little knowledge can do!`,
  },
}
// or this!

export function App() {
  const { data, categories, restaurants } = Dataset.createDataSet();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRestaurant, setSelectedRestaurant] = useState("");
 
 const [selectedItem, setSelectedItem] = useState("");

  const currentMenuItems = data.filter( (item) => {
    if(item.food_category === selectedCategory && 
      item.restaurant === selectedRestaurant)
    {
        return true;
    }
    else
    {
      return false;
    }
  })

  return (
    <main className="App">
      {/* CATEGORIES COLUMN */}
      <div className="CategoriesColumn col">
        <div className="categories options">
          <h2 className="title">Categories</h2>
          {
            categories.map((category)=> {
              let isChipActive;

              if(category === selectedCategory)
              {
                isChipActive = true;
              }
              else
              {
                isChipActive = false;
              }

              return (<Chip key={category}
                            label={category}
                            isActive={isChipActive}
                            chipClick={
                              () => {
                                console.log(`Selected category: ${category}`)
                                setSelectedCategory(category)
                              }
                            }
                            />)  
            })
          }
        </div>
      </div>

      {/* MAIN COLUMN */}
      <div className="container">
        {/* HEADER GOES HERE */}
        <Header title={appInfo.title} tagline={appInfo.tagline} description={appInfo.description}/>

        {/* RESTAURANTS ROW */}
        <div className="RestaurantsRow">
          <h2 className="title">Restaurants</h2>
          <div className="restaurants options">
          {
            //restaurants.map((restaurant) => {

            restaurants.map((restaurant)=> {
              let isChipActive;

              if(restaurant === selectedRestaurant)
              {
                isChipActive = true;
              }
              else
              {
                isChipActive = false;
              }

              return (<Chip key={restaurant}
                            label={restaurant}
                            isActive={isChipActive}
                            chipClick={
                              () => {
                                console.log(`Selected restaurant: ${restaurant}`)
                                setSelectedRestaurant(restaurant)
                              }
                            }
                            />)  
            })
          }
          </div>
        </div>

        {/* INSTRUCTIONS GO HERE */}
        <Instructions start = {appInfo.instructions.start}/>

        {/* MENU DISPLAY */}
        <div className="MenuDisplay display">
          <div className="MenuItemButtons menu-items">
            <h2 className="title">Menu Items</h2>
            { //SOMETHING IS WRONG HERE
              //USER CODE HERE  
              currentMenuItems.map((item)=> {
                let isChipActive;
  
                if(item === selectedItem)
                {
                  isChipActive = true;
                }
                else
                {
                  isChipActive = false;
                }
  
                return (<Chip key={item.item_name}
                              label={item.item_name}
                              isActive={isChipActive}
                              chipClick={
                                () => {
                                  console.log(`Selected item: ${item.item_name}`)
                                  setSelectedItem(item.item_name)
                                }
                              }
                              />)  
              })
            }


          </div>

          {/* NUTRITION FACTS */}
          <div className="NutritionFacts nutrition-facts">{/* YOUR CODE HERE */}</div>
        </div>

        <div className="data-sources">
          <p>{appInfo.dataSource}</p>
        </div>
      </div>
    </main>
  )
}

export default App
