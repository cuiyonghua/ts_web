import { User } from './models/User';

// const user = new User({name: 'myname', age: 20});

// user.on('change', () => {
//     console.log('Change #1');
// });
// user.on('change', () => {
//     console.log('Change #2');
// });
// user.on('save', () => {
//     console.log('Save was triggered');
// });

// user.trigger('sasas');

// console.log(user);


// const user = new User({ id: 1});

// user.fetch();

// setTimeout(()=> {
//     console.log(user);
// }, 4000);


// const user = new User({ name: 'New update', age: 56565, id: 3});

// user.save();


const user = new User({ name: 'new 1', age: 1});

user.events.on( 'change', () => {
    console.log('change!');
});

user.events.trigger('change');