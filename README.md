Citizen.js
==========
A modular multi-platform and framework independant client-server model sync. A model citizen of your application stack, Citizen.js will keep your backend and frontend data models in sync and allow your frontend to only see the data it is allowed to see, including data owned by the logged-in user etc.

At the core, Citizen.js defines a generic JSON api (using xmlhttp and/or socket.io) for the client and server to initiate 2-way communication. Adapters can then be written for different clients or servers. 

Initially, Citizen.js will provide adapters for:

 * [Ember.js](http://emberjs.com/) (Javascript)
 * [Mongoose](http://mongoosejs.com/) via [Express](http://expressjs.com/) (Node.js)

With plans to provide adapters for the following in future:

 * [mongoengine](http://mongoengine.org/) via [web.py](http://webpy.org/) (Python)
 * [ExtJS 4.x](http://sencha.com) 
