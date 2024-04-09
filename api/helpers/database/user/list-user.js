module.exports = { 
 friendlyName: 'List Users', 
 description: 'Helper for fetching the list of users.', 
 inputs:{ 
 search_criteria: { 
 type: 'ref', 
 required: true 
 }, 
 sort_criteria: { 
 type: 'ref', 
 required: false 
 }, 
 limit: { 
 type: 'number', 
 required: false 
 }, 
 skip: { 
 type: 'number', 
 required: false 
 }, 
 populate: { 
 type: 'ref', 
 required: false 
 } 
 }, 

 fn: async function(inputs, exits) { 
 let promise = User.find(inputs.search_criteria), 
 userList = []; 

 if (inputs.sort_criteria) { 
 promise.sort(inputs.sort_criteria); 
 } 

 if (inputs.limit) { 
 promise.limit(inputs.limit); 
 } 

 if (inputs.skip) { 
 promise.skip(inputs.skip); 
 } 

 if (inputs.populate) { 
 /* if the User model is linked to any other model, populate the data from those models here. For instance, if it is linked to a model called 'role', add:*/ 
// if (inputs.populate.role) { 
// promise.populate('role'); 
// } 

 /* populate for other models here */ 
 } 

 userList = await promise.then(); 

 return exits.success(userList); 
 } 
 };