import logo from './logo.svg'
import './App.css'
import { useState } from 'react'
import Pets from './components/Pets'

/**
  V4 pet summoning probability
  Package Name	Grade	Item Name	Probability
Radiant Pet Egg	Normal	Doomog	5.4050%
Radiant Pet Egg	Normal	Doodle	5.4050%
Radiant Pet Egg	Normal	Muka	5.4050%
Radiant Pet Egg	Normal	Lobs	5.4050%
Radiant Pet Egg	Normal	Rocco	5.4050%
Radiant Pet Egg	Normal	Grog	5.4050%
Radiant Pet Egg	Normal	Lizard	5.4050%
Radiant Pet Egg	Normal	Piraku	5.4050%
Radiant Pet Egg	Normal	Orga	5.4050%
Radiant Pet Egg	Normal	Froggy	5.4050%
Radiant Pet Egg	Normal	Crow	5.4050%
Radiant Pet Egg	Normal	Vlan	5.4050%
Radiant Pet Egg	Normal	Cava	5.4050%
Radiant Pet Egg	Normal	Harpy	5.4050%
Radiant Pet Egg	Fine	Ent Sprout	1.1000%
Radiant Pet Egg	Fine	Spora	1.1000%
Radiant Pet Egg	Fine	Dras	1.1000%
Radiant Pet Egg	Fine	Mangora	1.1000%
Radiant Pet Egg	Fine	Kobold	1.1000%
Radiant Pet Egg	Fine	Golem	1.1000%
Radiant Pet Egg	Fine	Beezly	1.1000%
Radiant Pet Egg	Fine	Sunny Tino	1.1000%
Radiant Pet Egg	Fine	Pumpkin	1.1000%
Radiant Pet Egg	Fine	Potato	1.1000%
Radiant Pet Egg	Fine	Anouk	1.1000%
Radiant Pet Egg	Fine	Pappsi	1.1000%
Radiant Pet Egg	Fine	Kobold Vice-Captain	1.1000%
Radiant Pet Egg	Fine	Rapi	1.1000%
Radiant Pet Egg	Fine	Baske	1.1000%
Radiant Pet Egg	Fine	Jarod	1.1000%
Radiant Pet Egg	Fine	Monsi	1.1000%
Radiant Pet Egg	Fine	Paimon	1.1000%
Radiant Pet Egg	Fine	Carlon	1.1000%
Radiant Pet Egg	Fine	Sylfein	1.1000%
Radiant Pet Egg	Rare	Kokas	0.0952%
Radiant Pet Egg	Rare	Hoghorn	0.0952%
Radiant Pet Egg	Rare	Poporo	0.0952%
Radiant Pet Egg	Rare	Wisp	0.0952%
Radiant Pet Egg	Rare	Dood	0.0952%
Radiant Pet Egg	Rare	Kami	0.0952%
Radiant Pet Egg	Rare	Tino	0.0952%
Radiant Pet Egg	Rare	Snowflake Yaka	0.0952%
Radiant Pet Egg	Rare	Sand Yaka	0.0952%
Radiant Pet Egg	Rare	Small Troll	0.0952%
Radiant Pet Egg	Rare	Mantino	0.0952%
Radiant Pet Egg	Rare	Benati	0.0952%
Radiant Pet Egg	Rare	Bauz	0.0952%
Radiant Pet Egg	Rare	Malito	0.0952%
Radiant Pet Egg	Rare	Kobold Captain	0.0952%
Radiant Pet Egg	Rare	Palin	0.0952%
Radiant Pet Egg	Rare	Vanel	0.0952%
Radiant Pet Egg	Rare	Likaon	0.0952%
Radiant Pet Egg	Rare	Tetrola	0.0952%
Radiant Pet Egg	Rare	Hoz	0.0952%
Radiant Pet Egg	Rare	Leaf Ent	0.0952%
Radiant Pet Egg	Epic	Poma	0.0194%
Radiant Pet Egg	Epic	Hegwid	0.0194%
Radiant Pet Egg	Epic	Little Baktar	0.0194%
Radiant Pet Egg	Epic	Tina	0.0194%
Radiant Pet Egg	Epic	Shakir	0.0194%
Radiant Pet Egg	Epic	Baz	0.0194%
Radiant Pet Egg	Epic	Pason	0.0194%
Radiant Pet Egg	Epic	Little Ruskal	0.0194%
Radiant Pet Egg	Epic	Little Brokut	0.0194%
Radiant Pet Egg	Epic	Rimska	0.0194%
Radiant Pet Egg	Epic	Shura	0.0194%
Radiant Pet Egg	Epic	Bhadon	0.0194%
Radiant Pet Egg	Epic	Slime	0.0194%
Radiant Pet Egg	Epic	Zamonto	0.0194%
Radiant Pet Egg	Epic	Payati	0.0194%
Radiant Pet Egg	Epic	Kellia	0.0194%
Radiant Pet Egg	Epic	Gaud	0.0194% 
Combine Legendary Little Dinuks 0.0%
Combine Legendary Little Artuman 0.0%
Combine Legendary Little Falvinia 0.0%
Combine Legendary Little Bamaron 0.0%
Combine Legendary Pengro 0.0%
 */

function GenerateRandomPet() {}

// React Component that returns a pet name from the list of probabilities
function PetName() {}

function App() {
  return (
    <div className="App">
      <Pets />
    </div>
  )
}

export default App
