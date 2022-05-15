# shopify-fall-2022-challenge
This is my submission for the Shopify Fall 2022 backend developer challenge! Hope you like it

Setting up:
The replit link for the project is https://shopify-fall-2022-challenge.isaaclall.repl.co



Features and Walkthrough

This app contains the following features -
Create, delete, update and get Items each having configurable attributes
Create, delete, update and get  warehouses with configurable attributes
Assign items to those warehouses
Create, delete, update any item in the warehouse 

The design follow works as follows:
There are two router : The item route  and the warehouse route
The Item route gives you information about the item and which warehouses currently store that item and the total quantity of that item that is not assigned  to any warehouse
The warehouse route gives you information about what warehouses are their and what items they contain
When you assign an item to a warehouse with a specific quantity it automatically updates the total inventory left in the items route

When sending requests make sure the body is in json format


Walkthrough of some routes

For the items route use the GET, POST, PATCH, and DELETE calls on the /items endpoint 
Screenshots of sample request, request body, and responses are provided below!

WALKTHROUGH OF ITEMS ROUTE/FUNCTIONALITY

GET ALL ITEMS

<img width="858" alt="image" src="https://user-images.githubusercontent.com/66037084/168487629-c02e4a93-e639-4681-8313-35251e8a6be7.png">
<img width="1118" alt="image" src="https://user-images.githubusercontent.com/66037084/168487639-b6bfa25e-97d0-4c8c-b07d-65e70df8bf5d.png">

ADD A NEW ITEM

<img width="690" alt="image" src="https://user-images.githubusercontent.com/66037084/168487736-e3729dd3-c2bc-4c44-b021-7422330f6aa0.png">

EDIT an existing Item

<img width="653" alt="image" src="https://user-images.githubusercontent.com/66037084/168487809-5c7582dc-902b-408a-890c-27039699e501.png">

Delte an existem Item

<img width="618" alt="image" src="https://user-images.githubusercontent.com/66037084/168487837-0e9f1a86-912a-40d6-b399-c0a20ca0f60b.png">


WALKTHROUGH OF WAREHOUSE ROUTE/FUNCTIONALITY





