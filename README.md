# shopify-fall-2022-challenge
This is my submission for the Shopify Fall 2022 backend developer challenge! Hope you like it

Setting up:
The replit link for the project is https://shopify-fall-2022-challenge.isaaclall.repl.co



Features and Walkthrough

This app contains the following features -
1. Create, delete, update and get Items each having configurable attributes
2. Create, delete, update and get  warehouses with configurable attributes
3. Assign items to those warehouses
4. Create, delete, update any item in the warehouse 

The design follow works as follows:
There are two routes:
- The item route  and the warehouse route
- The Item route gives you information about the item and which warehouses currently store that item and the total quantity of that item that is not assigned  to any warehouse
- The warehouse route gives you information about what warehouses are their and what items they contain
- When you assign an item to a warehouse with a specific quantity it automatically updates the total inventory left in the items route

When sending requests make sure the body is in json format


WALKTHROUGH OF ITEMS ROUTE/FUNCTIONALITY

Get /items will get all the items you created

Post /items will create a new item - to do this you must send the req in json format - example below

<img width="712" alt="image" src="https://user-images.githubusercontent.com/66037084/168488611-ed8221e9-335f-44bf-ab8d-f4461d86b15d.png">

Patch /items/{itemId} will edit an already existing item 

Delete /items/{itemId} will delete an already existing item and remove it from its corresponding warehouses

WALKTHROUGH OF WAREHOUSE ROUTE/FUNCTIONALITY

get /warehouse will get a list all the warehouses

get /warehouse/{warehouseId} will get all the information for a specific warehouse

post /warehouse will create a new warehouse - to do this you must send the req in json format - example below

<img width="554" alt="image" src="https://user-images.githubusercontent.com/66037084/168488884-881a7bd9-a4e2-4ed0-b9b5-2407f208caf2.png">

post /warehouse/{warehouseId}/{itemId} will add a specific item that already exists in the items route to a specific warehouse

patch /warehouse/{warehouseId}/{itemId} is used to edit the quanity of an item in a specific warehouse

delete /warehouse/{warehouseId}/{itemId} will delete a specific item from a specific warehouse


Thats all for today folks! 















