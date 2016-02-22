var DATA = {
  title: 'Menu',
  items: [
    { id: 1, name: 'tacos', type: 'mexican'},
    { id: 2, name: 'burritos', type: 'mexican'},
    { id: 3, name: 'egg roles', type: 'chinese'},
    { id: 4, name: 'tostada', type: 'mexican'},
    { id: 5, name: 'pizza', type: 'italian'}
  ]
};


var Menu = React.createClass({
  render: function(){

    var mexiFood = function(u){
      return u.type === 'mexican';
    };

    var mapMexi = function(u){
      return <li> { u.name } </li>;
    };

    var finalFood = DATA.items.filter(mexiFood).map(mapMexi);

    return (
      <div>
        <h3> All my friends are: </h3>
        <ul>         
            { finalFood }
        </ul>
      </div>
      )
  }
});

React.render(<Menu/>, document.getElementById('food'))



var MAP ={
  title: 'cars',
  items: [
    {id: 1, name: 'pinto', type: 'jalopy'},
    {id: 2, name: 'ford', type: 'vroom'}
  ]
};

var CAR = React.createClass({
  render: function(){
    var goodCar = function(v){
      return v.type === 'jalopy';
    };

    var badCar = function(v){
      return <li> {v.name}</li>;
    };
    var finalCar = MAP.items.filter(goodCar).map(badCar);

    return (
      <div>
        <h2> I like: </h2>
        <ul> { finalCar } </ul>
      </div>
      )
  }
});
React.render(<CAR/>, document.getElementById('cars'))

var HORSE = {
  title: 'menu',
  items: [
  {id: 1, name: 'jane', type: 'bay'},
  {id: 2, name: 'larry', type: 'red'},
  {id: 3, name: 'fred', type: 'palimino'}
  ]
}

var LIGHT = React.createClass({
  render: function(){
    var mexiHorse = function(x){
      return x.type === 'red';
    };

    var mapHorse = function(x){
      return <li> {x.name} </li>;
    };

    var finalHorse = HORSE.items.filter(mexiHorse).map(mapHorse);

    return (
      <div>
        <h1> My favorite horse is: </h1>
        <ul> { finalHorse } </ul>
      </div>
      )
  }
});

React.render(<LIGHT/>, document.getElementById('horse'))


