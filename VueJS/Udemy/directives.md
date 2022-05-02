v-bind (:)
v-html
v-for
v-model
v-on (@)
v-once
v-if --> Tira do DOM
v-else
v-show --> Display none
v-else-if
Methods vs Computed vs Watchers
Methods: 
- use with events binding or data binding
- When data binding, the method is executed for every re render
- Use for events or data that really needs to be re-evaluated all the time

Computed: 
- Use with data binding
- Only executes if the computed properties change

Watcher:
- Run any code if a data changes
- Use for any non-data update you wanna make
