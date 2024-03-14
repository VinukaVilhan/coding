import './App.css'
// import DiceGame from './diceGame';
// import Die from './die';
// import ListPicker from './listPicker';
// import Pokemon from './PokemonComponent/pokemon';
// import Heading from './heading';
// import ColorLIst from './colorList';
// import SlotMachine from './SlotMachine';
// import ShoppingList from './shoppingList';
// import PropertyList from './propertyList';
// import Clicker from './clicker';
// import ClickerExcercise from './clickerExcercise';
// import Counter from './counter';
// import Toggler from './toggler';
// // import ColorBox from './colorBox';
// import BoxGrid from './colorBoxGrid';
// import GameBoard from './gameBoard';
// import ScoreKeeper from './scoreKeeper';
// import EmojiClicker from './emojiClicker';
// import ShoppingCart from './shoppingCart';
import ScoreOfPlayers from './scoreOfPlayers';

export function App() {

  // const data = [
  //   { id:1, item: "eggs", quantity: 12, completed: false },
  //   { id:2, item: "milk", quantity: 1, completed: true },
  //   { id:3, item: "chicken breasts", quantity: 4, completed: false },
  //   { id:4, item: "carrots", quantity: 6, completed: true }
  //  ];

  //  const properties = [
  //   { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  //   { id: 129331, name: "Lone Mountain Cabin", srating: 4.8, price: 250 },
  //   { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  //   { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  //   { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  //   { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
  //  ];

  //  const colors = ["Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Black", "White", "Gray", "Pink", "Brown", "Teal", "Violet", "Indigo", "Gold", "Silver", "Maroon", "Olive", "Lime", "Aqua"];

  //  const shoppingCart = [
  //   { id: 1, product: "HDMI Cable", price: 4 },
  //   { id: 2, product: "Easy Bake Oven", price: 28 },
  //   { id: 3, product: "Peach Pie", price: 6.5 },
  //   ];
   

  return (
      <>
      <ScoreOfPlayers/>
      {/* <ShoppingCart items={shoppingCart}/>
      <EmojiClicker/>
      <ScoreKeeper/>
      <GameBoard/>
      <BoxGrid colors={colors}/> */}
      {/* <ColorBox Color={colors}/> */}
      {/* <Toggler/>
      <Counter/> */}
      {/* <ClickerExcercise msg="Hi!!!" buttonText="Click Me!"/>
      <Clicker num={1}/>
      <ShoppingList />
      <PropertyList items={properties}/> */}
      {/* <SlotMachine/>
      <ColorLIst colors={["red", "green", "blue"]}/>
      <Heading color="orange" text="vinuka" fontSize="10px"/>
      <Pokemon />
      <Die sides={10}/>
      <Die sides={5}/>
      <ListPicker values={[1,2,23,4]}/>
      <DiceGame/> */}
      </>
  );
}

export default App
