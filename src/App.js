import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='container'>
      <div className='row'>

        <div className='col-sm-4 col-1 mx-auto' id='sidebar'>

        <div className="row">
     <div className="col">
          <input className="form-control border-secondary border-right-1 rounded-0" type="search" value="Looking for..." id="example-search-input4"></input>
     </div>
     <div className="col-auto">
          <button className="btn btn-outline-secondary border-left-1 rounded-0 rounded-right" type="button">Search
          </button>
     </div>
</div>
          <h1>Some Favorites</h1>
          <ul>
            <li className = 'alert alert-primary' role='alert' ><a className = 'alert-link' href='#'>Celery Root</a></li>
            <li className = 'alert alert-primary' role='alert' ><a className = 'alert-link' href='#'>Spaghetti Squash</a></li>
            <li className = 'alert alert-primary' role='alert' ><a className = 'alert-link' href='#'>Killer Mushrooms</a></li>
          </ul>
        </div>
        <div className='col-sm-8 col-2' id='main'>
          <h1 className= 'alert alert-success'>Wild & Wacky Vegetables</h1>
          <blockquote>
            <p>Kale courgette salsify mustard broccoli seakale wakame potato fava bean tigernut leek celery spinach avocado cabbage celtuce rutabaga kohlrabi. Parsnip pea soko groundnut bitterleaf spring onion. Grape dulse rutabaga lentil gram kakadu plum water spinach cabbage lotus root.</p>
            </blockquote>
          <p>
            Mung bean quandong kale prairie turnip celery gram zucchini pumpkin green bean silver beet chard endive komatsuna eggplant kakadu plum radish broccoli. Arugula amaranth fennel wakame peanut garlic chickweed. Sorrel jícama quandong kale chickpea water chestnut rock melon aubergine lettuce pea azuki bean cress onion sea lettuce dandelion nori dulse rutabaga. Coriander napa cabbage bok choy carrot kakadu plum brussels sprout bamboo shoot salad okra cucumber garlic kombu beet greens cauliflower summer purslane. Artichoke daikon horseradish arugula taro catsear kombu rock melon pea sprouts collard greens mustard courgette lettuce soko maize plantain.
            </p>
            <table className='table'>
  <thead>
    <tr>
      <th scope='col'>#</th>
      <th scope='col'>First</th>
      <th scope='col'>Last</th>
      <th scope='col'>Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope='row'>1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope='row'>2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope='row'>3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
        </div>
      </div>
    </div>


  );
}

export default App;
// <div class='wrapper'>
//   <!-- top nav -->
//         <nav>
//     ...
//         </nav>

//   <!-- main -->
//         <div class='left' id='main'>
//     <div class='container-fluid'>
//       <h1>Bootstrap Grid...</h1>
//     </div>
//   </div>

//   <!-- sidebar -->
//         <div class='right' id='sidebar'>
//     Fixed right sidebar
//         </div>
// </div>