# Mar 3, 2022 23:31:29
## The difference between v-if and v-show
### The different implementation principles
1. v-if order will dynamically create and remove dom elements, therefore controls how elements are shown and are hidden on a page.
2. v-show order dynamically add or remove style for elements, therefore controls how elements are shown and are hidden on a page. 
### The different performance costs.
#### v-if has higher toggle costs, but v-show has higher init render cost.
1. if you need to switch very frequently, v-show is better. 
2. if conditions are few at run time, v-if is better.
   